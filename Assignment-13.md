
# MongoDB Aggregation and Indexing Queries

## Aggregation Queries

### 1. Total Revenue Generated (sum of totalAmount)
```js
db.orders.aggregate([
  {
    $group: {
      _id: null,
      totalRevenue: { $sum: "$totalAmount" }
    }
  }
])
```

---

### 2. Total Number of Orders by Status
```js
db.orders.aggregate([
  {
    $group: {
      _id: "$status",
      orderCount: { $sum: 1 }
    }
  }
])
```

---

### 3. Top 3 Customers Who Spent the Most
```js
db.orders.aggregate([
  {
    $group: {
      _id: "$customerId",
      totalSpent: { $sum: "$totalAmount" }
    }
  },
  { $sort: { totalSpent: -1 } },
  { $limit: 3 }
])
```

---

### 4. Average Order Amount Per Customer
```js
db.orders.aggregate([
  {
    $group: {
      _id: "$customerId",
      averageOrderAmount: { $avg: "$totalAmount" }
    }
  }
])
```

---

### 5. Products Sold More Than 10 Times (By Total Quantity)
```js
db.orders.aggregate([
  { $unwind: "$items" },
  {
    $group: {
      _id: "$items.productId",
      totalQuantitySold: { $sum: "$items.quantity" }
    }
  },
  { $match: { totalQuantitySold: { $gt: 10 } } }
])
```

---

### 6. Monthly Revenue for the Last 6 Months
```js
db.orders.aggregate([
  {
    $match: {
      orderDate: {
        $gte: new Date(new Date().setMonth(new Date().getMonth() - 6))
      }
    }
  },
  {
    $group: {
      _id: {
        year: { $year: "$orderDate" },
        month: { $month: "$orderDate" }
      },
      monthlyRevenue: { $sum: "$totalAmount" }
    }
  },
  {
    $sort: {
      "_id.year": 1,
      "_id.month": 1
    }
  }
])
```

---

### 7. Customers Who Placed More Than 2 Orders
```js
db.orders.aggregate([
  {
    $group: {
      _id: "$customerId",
      orderCount: { $sum: 1 }
    }
  },
  { $match: { orderCount: { $gt: 2 } } }
])
```

---

### 8. Extract Only Product Names Using `$unwind` and `$project`
```js
db.orders.aggregate([
  { $unwind: "$items" },
  {
    $project: {
      _id: 0,
      productName: "$items.productName"
    }
  }
])
```

---

### 9. Filter Only Delivered Orders and Calculate Revenue
```js
db.orders.aggregate([
  { $match: { status: "Delivered" } },
  {
    $group: {
      _id: null,
      deliveredRevenue: { $sum: "$totalAmount" }
    }
  }
])
```

---

### 10. Total Quantity and Total Revenue Per Product
```js
db.orders.aggregate([
  { $unwind: "$items" },
  {
    $group: {
      _id: "$items.productId",
      totalQuantity: { $sum: "$items.quantity" },
      totalRevenue: { $sum: "$items.totalPrice" }
    }
  }
])
```

## Indexing Queries

### 1. Check Indexes on the Collection
```js
db.orders.getIndexes()
```

---

### 2. Run Query Without Index
```js
db.orders.find({ customerName: "John Doe" }).explain("executionStats")
```

---

### 3. Create Index
```js
db.orders.createIndex({ customerName: 1 })
```

---

### 4. Run Again With Index
```js
db.orders.find({ customerName: "John Doe" }).explain("executionStats")
```

---

### 5. Create Compound Index
#### Run Query Without Compound Index
```js
db.orders.find({ status: "Delivered", orderDate: { $gte: ISODate("2025-04-01") } }).explain("executionStats")
```

---

### 6. After Creating Compound Index
```js
db.orders.createIndex({ status: 1, orderDate: -1 })
db.orders.find({ status: "Delivered", orderDate: { $gte: ISODate("2025-04-01") } }).explain("executionStats")
```

---

### 7. Text Index on `items.productName`
```js
db.orders.createIndex({ "items.productName": "text" })
db.orders.find({ $text: { $search: "Laptop" } })
```

---

### 8. Drop an Index and Compare Performance
```js
db.orders.dropIndex({ customerName: 1 })
db.orders.find({ customerName: "John Doe" }).explain("executionStats")
```