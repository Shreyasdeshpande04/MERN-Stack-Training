📘 React JS Practice (Day 1 - Day 6)
This repository contains my react js programs completed during Day-1 to Day-6 which were perfomed by me during my  MERN STACK Training in Fortune Cloud Technologies, Pune by Trainer Mr. Abhay Gawali Sir. Here i studied concepts like- Basics,operators, operations, projections, aggregations, etc


## 🚀 What is MongoDB?

* MongoDB is a **NoSQL database** that stores data in **flexible, JSON-like documents** instead of tables.
* It is **schema-less**, meaning each document can have different fields.
* MongoDB is great for **scalable, high-performance applications** and works well with Node.js (MERN stack).

---

## ⚙️ Setting Up MongoDB

1. **Install MongoDB**:

   * Download from [mongodb.com](https://www.mongodb.com/try/download/community)
   * Follow instructions to run MongoDB locally

2. Start MongoDB server:
   mongod
 
3. Optional: Use **MongoDB Compass** (GUI) for managing databases.

4. In Node.js, install MongoDB driver or Mongoose:
   npm install mongodb

## 📝 Example Using MongoDB in CMD

# 1. Start MongoDB server
mongod

# 2. Open MongoDB shell
mongosh
Run these commands:
# Create / switch to database
use myDatabase

# Insert a document
db.users.insertOne({ name: "Shreyas", age: 25 })

# View all documents
db.users.find()

# Count documents
db.users.countDocuments()

# Update a document
db.users.updateOne({ name: "Shreyas" }, { $set: { age: 26 } })

# Delete a document
db.users.deleteOne({ name: "Shreyas" })

## ✅ What Happens

* `use myDatabase` → creates/uses a database
* `insertOne()` → adds data
* `find()` → shows all data
* `updateOne()` → updates data
* `deleteOne()` → removes data

## ✅ Key Points

* MongoDB stores data in **JSON-like documents**.
* **Mongoose** simplifies database operations with **schemas, models, and validation**.
* Works seamlessly with **Node.js and Express.js** in MERN stack applications.

---
