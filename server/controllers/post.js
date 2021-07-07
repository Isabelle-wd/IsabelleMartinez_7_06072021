const db = require("../models");

exports.getAllPosts = async (req, res, next) => {
    try {
        let posts = await db.sequelize.models.Post.findAll();

        res.status(200).json(posts);
    } catch (e) {
        console.error(e);
        res.status(500);
    }
};