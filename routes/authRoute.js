import express from "express";
import {
    registercontroller,
    loginController,
    testController,
    forgotPasswordController,
    updateProfileController,
    getOrderController,
    getAllOrderController,
    orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register', registercontroller);

//LOGIN || PORT
router.post('/login', loginController);

//Forgot password
router.post('/forgot-password', forgotPasswordController);

//test routes
router.get('/test', requireSignin, isAdmin, testController);

//protected User route auth
router.get("/user-auth", requireSignin, (req, res) => {
    res.status(200).send({ ok: true });
});
//protected Admin route auth
router.get("/admin-auth", requireSignin, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignin, updateProfileController)

//order
router.get("/orders", requireSignin, getOrderController);

//All order
router.get("/all-orders", requireSignin, isAdmin, getAllOrderController);

//order status update
router.put("/order-status/:orderId", requireSignin, isAdmin, orderStatusController);

export default router;