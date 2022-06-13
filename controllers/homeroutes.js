// require express
const router = require('express').Router();
// require sequelize
const sequelize = require('../config/connection');
// call models
const { Post, User, Comment } = require('../models');
// auth
const withAuth = require('../utils/auth');

// route to get
router.get('/', withAuth, (req, res) => {
    // function to find all posts
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [{
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
            },
            {
             model: User,
             attributes: ['username']
            }
        ]
    }).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({plain: true}));
        res.render('dashboard', {posts, loggedIn: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})