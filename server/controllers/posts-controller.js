let postModel = require('../db')['Posts']
let sequelize = require('sequelize');
const { Posts } = require('../db');

const postsCtrl = {};

//Route to get all posts
postsCtrl.getAllPosts = async (req, res) => {
    try {
        let posts = await postModel.findAll({
            attributes: ['id', 'title', 'picture', 'creation_date'],
            order: [['creation_date', 'DESC']], //Order Posts by creation date desc.
        })
        return res.json(posts)
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

//Route to create post
postsCtrl.createPost = async (req, res) => {
    try {
        let { title, content, picture, creation_date} = req.body
        let post = await postModel.create({
            title: title,
            content: content,
            picture: picture,
            creation_date: creation_date,
        });
        res.json(post);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

//Route to get one post
postsCtrl.getOnePost = async (req, res) => {
    try {
        let post = await postModel.findByPk(req.params.id);
        res.json(post)
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

//Route to edit post
postsCtrl.editPost = async (req, res) => {
    try {
        let { title, content, picture, creation_date} = req.body;
        let post = await postModel.update(
            {
                title: title,
                content: content,
                picture: picture,
                creation_date: creation_date
            },
            {
                where: {
                    id: req.params.id,
                },
            },
        )
        res.json(post);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

//Route to delete post
postsCtrl.deletePost = async (req, res) => {
    try {
        const post = await postModel.destroy({
            where: { id: req.params.id },
        })
        res.json(post);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = postsCtrl;
