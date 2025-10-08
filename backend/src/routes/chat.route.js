import express from "express";
import { getStreamToken } from "../controllers/chat.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";


const router = express.Router();

router.get("/token" ,protectRoute, getStreamToken); // here protectRoute is a middleware to protect the route , means only authenticated user can access this route 



export default router;