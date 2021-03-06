const { Router } = require("express");

const router = Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controllers
const { orders, orderStatus } = require("../controllers/admin");

// routes
router.get("/admin/orders", authCheck, adminCheck, orders);
router.put("/admin/order/status", authCheck, adminCheck, orderStatus);

module.exports = router;
