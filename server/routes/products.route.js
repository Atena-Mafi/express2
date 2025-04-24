const express = require('express');

const router=express.Router();

const {getAllProducts,
    getSingleProduct,
    creat,
    update,
    deleting}=require("../controllers/products.controller");

let products = [
    { id: 1, name: "iPhone 12 Pro", price: 1099.99 },
    { id: 2, name: "Samsung Galaxy S21", price: 999.99 },
    { id: 3, name: "Sony PlayStation 5", price: 499.99 },
    { id: 4, name: "MacBook Pro 16", price: 2399.99 },
    { id: 5, name: "DJI Mavic Air 2", price: 799.99 },
  ];



//////////////////////////
router.get("/",getAllProducts);

///////////////////////////////
router.get("/:id",getSingleProduct);
///////////////////////////////

router.post("/",creat);
//////////////////////////////////////////////


router.patch("/:id",update);
    //////////////////////////////////
    router.delete("/:id",deleting);

module.exports=router;
