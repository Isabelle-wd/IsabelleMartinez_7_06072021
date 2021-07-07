const express = require("express");
const router = express.Router();

const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");

router.post("/:id", auth, commentCtrl.createcomment);
router.put("/:id", auth, commentCtrl.modifycomment);
router.delete("/:id", auth, commentCtrl.deletecomment);

module.exports = router;