const express = require("express");

const router = express.Router();

const TodoController = require("../controller/controller")

router.get("/",TodoController.home);

router.post("/add",TodoController.add);

router.get("/get",TodoController.get);

router.delete("/delete/:id",TodoController.delete)

router.put("/update/:id",TodoController.update)


module.exports = router;