const mongoose=require('mongoose');

const Product=require('./models/Product');


const products=[
    {
        name:"Iphone 16pro",
        img:"https://images.unsplash.com/photo-1726587912121-ea21fcc57ff8?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:130000,
        desc:"very costly"
    },
    {
        name:"Macbook m2 pro",
        img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:250000,
        desc:"very very costly"
    },
    {
        name:"ipad pro",
        img:"https://images.unsplash.com/photo-1627405016867-4d59bd6b4747?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZCUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
        price:237000,
        desc:"its not affordable"
    },
    {
        name:"Iwatch",
        img:"https://images.unsplash.com/photo-1558126319-c9feecbf57ee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXdhdGNofGVufDB8fDB8fHww",
        price:51000,
        desc:"its affordable"
    },
    {
        name:"airPods",
        img:"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D",
        price:25000,
        desc:"its great,awesome!"
    }
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("data seeded sucessfully");
    
}

module.exports=seedDB;

