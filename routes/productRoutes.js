import express from "express";
import { isAdmin, requireSignin } from "./../middlewares/authMiddleware.js";
import {
    UpdateProductController,
    braintreePaymantController,
    braintreeTokenController,
    createProductController,
    deleteProductController,
    getProductController,
    getSingleProductController,
    productCategoryController,
    productCountController,
    productFiltersController,
    productListController,
    productPhotoController,
    relatedProductController,
    searchProductController
} from "../controllers/productController.js";
import formidable from 'express-formidable';


const router = express.Router();

//routes
router.post(
    "/create-product",
    requireSignin,
    isAdmin,
    formidable(),
    createProductController
);

//routes
router.put(
    "/Update-product/:pid",
    requireSignin,
    isAdmin,
    formidable(),
    UpdateProductController
);


//get product
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFiltersController);

//product count 
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search route
router.get("/search/:keyword", searchProductController);

//similar route
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//paymaent
router.post("/braintree/payment", requireSignin, braintreePaymantController);

export default router;