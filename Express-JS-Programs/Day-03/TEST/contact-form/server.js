const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const app = express();
const PORT = 3000;

const MONGO_URL = "mongodb://localhost:27017";
const DB_NAME = "travelBookings";

app.use(bodyParser.json());
app.use(express.static(".")); // To serve admin.html and other files

MongoClient.connect(MONGO_URL, { useUnifiedTopology: true })
  .then(client => {
    const db = client.db(DB_NAME);
    const bookings = db.collection("bookings");

    // ✅ Store new booking
    app.post("/booking", async (req, res) => {
      try {
        const result = await bookings.insertOne(req.body);
        res.json({ success: true, id: result.insertedId });
      } catch (err) {
        res.status(500).json({ success: false, message: err.message });
      }
    });

    // ✅ Admin dashboard real-time stats
    app.get("/admin-data", async (req, res) => {
      try {
        const data = await bookings.find().toArray();

        const usernames = new Set(data.map(b => b.username));
        const sources = new Set(data.map(b => b.source));
        const destinations = new Set(data.map(b => b.destination));
        const revenue = data.reduce((sum, b) => sum + (parseInt(b.totalCost) || 0), 0);

        res.json({
          success: true,
          stats: {
            totalUsers: usernames.size,
            totalBookings: data.length,
            totalRevenue: revenue,
            totalSources: sources.size,
            totalDestinations: destinations.size
          }
        });
      } catch (error) {
        console.error("Error fetching admin stats:", error);
        res.status(500).json({ success: false, message: "Failed to fetch dashboard data" });
      }
    });

    app.listen(PORT, () =>
      console.log(`✅ Server running on http://localhost:${PORT}`)
    );
  })
  .catch(err => console.error("❌ MongoDB connection failed:", err));
