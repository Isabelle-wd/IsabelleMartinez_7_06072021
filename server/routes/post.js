const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.put("/update", auth, multer, postCtrl.update)
router.post("/create", auth, multer, postCtrl.create);
router.delete("/delete", postCtrl.delete)
router.get("/", auth, postCtrl.listMsg);

module.exports = router; 