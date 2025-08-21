import Order from "../models/Orders";

const Orders = [
    {
    "orderId": "ORD001",
    "customerName": "Alice Johnson",
    "orderDate": "2025-02-10T00:00:00Z",
    "status": "Delivered",
    "items": [
      { "productname": "Mouse", "quantity": 2, "price": 500 },
      { "productname": "Keyboard", "quantity": 1, "price": 1500 }
    ],
    "totalAmount": 2500
  },
  {
    "orderId": "ORD002",
    "customerName": "Bob Smith",
    "orderDate": "2025-03-12T00:00:00Z",
    "status": "Pending",
    "items": [
      { "productname": "Laptop", "quantity": 1, "price": 60000 }
    ],
    "totalAmount": 60000
  },
  {
    "orderId": "ORD003",
    "customerName": "Charlie Adams",
    "orderDate": "2025-03-15T00:00:00Z",
    "status": "Shipped",
    "items": [
      { "productname": "Monitor", "quantity": 2, "price": 8000 }
    ],
    "totalAmount": 16000
  },
  {
    "orderId": "ORD004",
    "customerName": "David Lee",
    "orderDate": "2025-04-01T00:00:00Z",
    "status": "Delivered",
    "items": [
      { "productname": "Mouse", "quantity": 5, "price": 500 }
    ],
    "totalAmount": 2500
  },
  {
    "orderId": "ORD005",
    "customerName": "Esha Gupta",
    "orderDate": "2025-04-10T00:00:00Z",
    "status": "Shipped",
    "items": [
      { "productname": "USB Cable", "quantity": 3, "price": 200 },
      { "productname": "Charger", "quantity": 2, "price": 1000 }
    ],
    "totalAmount": 2600
  },
  {
    "orderId": "ORD006",
    "customerName": "Farhan Khan",
    "orderDate": "2025-04-15T00:00:00Z",
    "status": "Pending",
    "items": [
      { "productname": "Keyboard", "quantity": 1, "price": 1500 }
    ],
    "totalAmount": 1500
  },
  {
    "orderId": "ORD007",
    "customerName": "Gita Mehra",
    "orderDate": "2025-05-01T00:00:00Z",
    "status": "Delivered",
    "items": [
      { "productname": "Laptop", "quantity": 1, "price": 70000 },
      { "productname": "Mouse", "quantity": 1, "price": 500 }
    ],
    "totalAmount": 70500
  },
  {
    "orderId": "ORD008",
    "customerName": "Hari Singh",
    "orderDate": "2025-05-07T00:00:00Z",
    "status": "Delivered",
    "items": [
      { "productname": "USB Cable", "quantity": 4, "price": 250 }
    ],
    "totalAmount": 1000
  },
  {
    "orderId": "ORD009",
    "customerName": "Isha Arora",
    "orderDate": "2025-05-15T00:00:00Z",
    "status": "Shipped",
    "items": [
      { "productname": "Headphones", "quantity": 1, "price": 3000 }
    ],
    "totalAmount": 3000
  },
  {
    "orderId": "ORD010",
    "customerName": "Jay Patel",
    "orderDate": "2025-05-20T00:00:00Z",
    "status": "Pending",
    "items": [
      { "productname": "Mouse", "quantity": 3, "price": 500 },
      { "productname": "Keyboard", "quantity": 1, "price": 1500 }
    ],
    "totalAmount": 3000
  },
  {
    "orderId": "ORD011",
    "customerName": "Kriti Sharma",
    "orderDate": "2025-06-01T00:00:00Z",
    "status": "Delivered",
    "items": [
      { "productname": "Monitor", "quantity": 1, "price": 10000 }
    ],
    "totalAmount": 10000
  },
  {
    "orderId": "ORD012",
    "customerName": "Lakshay Rana",
    "orderDate": "2025-06-07T00:00:00Z",
    "status": "Shipped",
    "items": [
      { "productname": "Laptop", "quantity": 1, "price": 75000 }
    ],
    "totalAmount": 75000
  },
  {
    "orderId": "ORD013",
    "customerName": "Megha Thakur",
    "orderDate": "2025-06-15T00:00:00Z",
    "status": "Pending",
    "items": [
      { "productname": "Charger", "quantity": 2, "price": 1200 }
    ],
    "totalAmount": 2400
  },
  {
    "orderId": "ORD014",
    "customerName": "Nikhil Sinha",
    "orderDate": "2025-07-01T00:00:00Z",
    "status": "Delivered",
    "items": [
      { "productname": "Keyboard", "quantity": 2, "price": 1400 }
    ],
    "totalAmount": 2800
  },
  {
    "orderId": "ORD015",
    "customerName": "Ojasvi Rathi",
    "orderDate": "2025-07-05T00:00:00Z",
    "status": "Shipped",
    "items": [
      { "productname": "Monitor", "quantity": 1, "price": 9500 },
      { "productname": "Mouse", "quantity": 2, "price": 600 }
    ],
    "totalAmount": 10700
  },
  {
    "orderId": "ORD016",
    "customerName": "Pranav Dixit",
    "orderDate": "2025-07-10T00:00:00Z",
    "status": "Delivered",
    "items": [
      { "productname": "USB Cable", "quantity": 10, "price": 200 }
    ],
    "totalAmount": 2000
  },
  {
    "orderId": "ORD017",
    "customerName": "Qureshi Khan",
    "orderDate": "2025-07-15T00:00:00Z",
    "status": "Pending",
    "items": [
      { "productname": "Charger", "quantity": 3, "price": 1000 }
    ],
    "totalAmount": 3000
  },
  {
    "orderId": "ORD018",
    "customerName": "Riya Goyal",
    "orderDate": "2025-07-20T00:00:00Z",
    "status": "Delivered",
    "items": [
      { "productname": "Laptop", "quantity": 1, "price": 65000 }
    ],
    "totalAmount": 65000
  },
  {
    "orderId": "ORD019",
    "customerName": "Sarthak Meena",
    "orderDate": "2025-07-25T00:00:00Z",
    "status": "Shipped",
    "items": [
      { "productname": "Headphones", "quantity": 2, "price": 2500 }
    ],
    "totalAmount": 5000
  },
  {
    "orderId": "ORD020",
    "customerName": "Tanvi Jain",
    "orderDate": "2025-07-30T00:00:00Z",
    "status": "Delivered",
    "items": [
      { "productname": "Keyboard", "quantity": 1, "price": 1500 },
      { "productname": "Mouse", "quantity": 1, "price": 500 }
    ],
    "totalAmount": 2000
  }
];

export const seedOrders = async ()=>{
    try{
        await Order.deleteMany({});
        await Order.insertMany(Orders);
        console.log("Orders data seeded successfully");
        
    }catch(error){
        console.log(`Error in seeding data: ${error}`);
    }
}
