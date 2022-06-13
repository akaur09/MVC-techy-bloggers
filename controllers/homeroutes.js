// import sequel
const sequelize = require('../config/connection');
// import router
const router = require('express').Router();
// import models
const { Post, User, Comment } = require('../models');

// find all posts on homepage
router.get('/', (req, res) => {
    Post.findAll({
        attributes: ['id', 'title', 'content', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'title', 'content', 'created_at'],
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
        const posts = dbPostData.map(post => post.get({ plain: true}));
        console.log(posts);
        res.render('homepage', {posts, loggedIn: req.session.loggedIn});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create a route to login
router.get('/login', (req,res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// route to sign up for blog
router.get('/signup', (req,res)=>{
    res.render('signup');
});

// get a post by id
router.get('/post/:id', (req,res) => {
    Post.findOne({
        where: { 
            id: req.params.id
        },
        attributes: ['id', 'title', 'content', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'title', 'content', 'created_at'],
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
    })
})