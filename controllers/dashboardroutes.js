// require express
const router = require('express').Router();
// require sequelize
const sequelize = require('../config/connection');
// call models
const { Post, User, Comment } = require('../models');
// auth
const withAuth = require('../utils/auth');

// route to get all posts
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
// route for user to get a post
router.get('/edit/:id', withAuth, (req, res)=> {
    // function to find only one post for user
    Post.findOne({
        // location
        where: {
            id: req.params.id
        },
        attributes: ['id','title','content','created_at'],
        include: [
            {
                model: User,
                attributes: ['username'],
            },
            {
                model: Comment,
                attributes: ['id','title','content','created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({message: 'Sorry no post found with this id'});
            return;
        }
        const post = dbPostData.get({plain: true});
        res.render('edit-post', {post, loggedIn: true}); 
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
// to add a new post
router.get('/new', (req, res) => {
    res.render('add-post');
});

module.exports = router;