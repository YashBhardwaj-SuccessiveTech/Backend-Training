<!-- Create a comprehensive documentation named "mongoose.md" covering MongoDB introduction, ORM, Mongoose, and distinctions between RDBMS and NoSQL databases. -->

## 🟩 MongoDB Introduction

**MongoDB** is a **NoSQL** database that stores data in a flexible, **JSON-like format** called **BSON** (Binary JSON). Unlike traditional relational databases, it doesn't use tables, rows, or SQL.

- **Document-oriented**: Stores data as documents (key-value pairs), like:
  ```json
  {
    "name": "Yash",
    "age": 22,
    "skills": ["JavaScript", "Node.js"]
  }

**Collections:** Like tables in SQL but can store documents of varying structure.

**Schema-less:** Documents in the same collection can have different fields.

**Used in:** Real-time apps, scalability-focused apps (e.g., e-commerce, IoT).

## ORM (Object Relational Mapping)
- ORM is a concept used in Relational Databases (SQL) to convert data between JavaScript objects and database tables.

- Example ORMs: Sequelize (for MySQL/PostgreSQL), TypeORM

- Advantage: You interact with the database using code (objects/functions), not raw SQL queries.

- Not used in MongoDB (which is NoSQL), but a similar tool exists — ODM.

## Mongoose (ODM for MongoDB)
- Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.

- It provides a schema-based structure to define documents in MongoDB.

- You can validate, query, and manage relationships in MongoDB easily.

Example:

```
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

// Add new user
const newUser = new User({ name: 'Yash', age: 22 });
newUser.save();
You interact with MongoDB using models and schemas — just like ORM but for NoSQL.
```

## Distinctions between RDBMS and NoSQL DataBases

| Feature            | RDBMS (SQL)                  | NoSQL (MongoDB)                           |
|--------------------|------------------------------|--------------------------------------------|
| **Structure**      | Tables with rows and columns | Collections with documents (JSON)          |
| **Schema**         | Fixed schema                 | Flexible schema                            |
| **Query Language** | SQL                          | No standard, uses BSON-style queries       |
| **Relationships**  | Supports complex joins       | Limited joins, uses embedding/referencing  |
| **Scalability**    | Vertical (scale-up)          | Horizontal (scale-out)                     |
| **Examples**       | MySQL, PostgreSQL, Oracle    | MongoDB, CouchDB, Firebase                 |


## Summary

- MongoDB: NoSQL, document-based, flexible schema.

- ORM: Tool to map SQL data to JS objects (used with RDBMS).

- Mongoose: ODM for MongoDB (like ORM but for documents).

- RDBMS vs NoSQL: Tables vs Documents, fixed vs flexible schema, SQL vs object-based queries