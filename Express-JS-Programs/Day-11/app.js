import express from "express"
import mongoose from "mongoose"
import { LoginRouter } from "./Router/login.router.js"
import { StudentRouter } from "./Router/Student.router.js"
import { homerouter } from "./Router/home.router.js"
import cookieParser from "cookie-parser"
import session from "express-session"
import ConnectMongoDBSession from "connect-mongodb-session"

const MongoDBStore = ConnectMongoDBSession(session)
const app = express()
const port = 3000

const Db_path = "mongodb://127.0.0.1:27017/Abhu"

// Connect to MongoDB
try {
  await mongoose.connect(Db_path)
} catch (error) {
  console.log(error)
  process.exit()
}

// ✅ Define session store first
const store = new MongoDBStore({
  uri: Db_path,
  collection: "session"
})

// Middlewares
app.set("view engine", "ejs")
app.use(express.urlencoded())
app.use(cookieParser())
app.use('/uploads',express.static('public/uploads'))
app.use(session({
  secret: "abc",
  resave: false,
  saveUninitialized: true,
  store: store   // ✅ now store is defined
}))

// Custom middleware to check session
app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn === true
  next()
})

// Routers
app.use(LoginRouter)
app.use(homerouter)

// Protect student routes
app.use('/', (req, res, next) => {
  if (req.isLoggedIn) {
    next()
  } else {
    res.redirect("/")
  }
})

app.use("/", StudentRouter)

// Start server
app.listen(port, () => {
  console.log(`running on ${port}`)
})
