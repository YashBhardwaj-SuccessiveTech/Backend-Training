import Order from "../models/Orders.js";

const runAggregations = async () => {

  // 1. Total revenue
  const totalRevenue = await Order.aggregate([
    { $group: { _id: null, totalRevenue: { $sum: "$totalAmount" } } }
  ]);
  console.log(" Total Revenue :", totalRevenue);

  // 2. Total number of orders by status
  const ordersByStatus = await Order.aggregate([
    { $group: { _id: "$status", totalOrders: { $sum: 1 } } }
  ]);
  console.log(" Orders by Status :", ordersByStatus);

  // 3. Top 3 customers who spent the most
  const topCustomers = await Order.aggregate([
    { $group: { _id: "$customerName", totalSpent: { $sum: "$totalAmount" } } },
    { $sort: { totalSpent: -1 } },
    { $limit: 3 }
  ]);
  console.log("\n Top 3 Customers :", topCustomers);

  // 4. Average order amount per customer
  const avgOrderAmount = await Order.aggregate([
    { $group: { _id: "$customerName", avgAmount: { $avg: "$totalAmount" } } }
  ]);
  console.log("\n Average Order per Customer :", avgOrderAmount);

  // 5. Products sold more than 10 times
  const topSellingProducts = await Order.aggregate([
    { $unwind: "$items" },
    { $group: { _id: "$items.productname", totalQuantity: { $sum: "$items.quantity" } } },
    { $match: { totalQuantity: { $gt: 10 } } }
  ]);
  console.log("\n Products Sold > 10 Units :", topSellingProducts);

  // 6. Monthly revenue for last 6 months
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const monthlyRevenue = await Order.aggregate([
    { $match: { orderDate: { $gte: sixMonthsAgo } } },
    {
      $group: {
        _id: {
          year: { $year: "$orderDate" },
          month: { $month: "$orderDate" }
        },
        revenue: { $sum: "$totalAmount" }
      }
    },
    { $sort: { "_id.year": 1, "_id.month": 1 } }
  ]);
  console.log("\n Monthly Revenue :", monthlyRevenue);

  // 7. Customers who placed more than 2 orders
  const frequentCustomers = await Order.aggregate([
    { $group: { _id: "$customerName", ordersCount: { $sum: 1 } } },
    { $match: { ordersCount: { $gt: 2 } } }
  ]);
  console.log("\n Customers with > 2 Orders :", frequentCustomers);

  // 8. Extract product names using $unwind + $project
  const productNames = await Order.aggregate([
    { $unwind: "$items" },
    { $project: { _id: 0, productname: "$items.productname" } }
  ]);
  console.log("\n All Product Names :", productNames);

  // 9. Revenue from only Delivered orders
  const deliveredRevenue = await Order.aggregate([
    { $match: { status: "Delivered" } },
    { $group: { _id: null, deliveredTotal: { $sum: "$totalAmount" } } }
  ]);
  console.log("\n Revenue from Delivered Orders :", deliveredRevenue);

  // 10. Total quantity and revenue per product
  const productStats = await Order.aggregate([
    { $unwind: "$items" },
    {
      $group: {
        _id: "$items.productname",
        totalQuantity: { $sum: "$items.quantity" },
        totalRevenue: {
          $sum: {
            $multiply: ["$items.quantity", "$items.price"]
          }
        }
      }
    }
  ]);
  console.log("\n Product-wise Quantity & Revenue :", productStats);

  process.exit();
};

runAggregations();


// 06 Monthly Revenue for last six months

// db.orders.aggregate([
//   {
//     $match: {
//       orderDate: {
//         $gte: new Date(new Date().setMonth(new Date().getMonth() - 6))  
//       }
//     }
//   },
//   {
//     $group: {
//       _id: {
//         year: { $year: "$orderDate" },
//         month: { $month: "$orderDate" }
//       },
//       totalRevenue: { $sum: "$totalAmount" } 
//     }
//   },
//   {
//     $sort: { "_id.year": -1, "_id.month": -1 }
//   }
// ]);

