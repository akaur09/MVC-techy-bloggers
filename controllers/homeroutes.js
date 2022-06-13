// require express
const router = require('express').Router();
// require sequelize
const sequelize = require('../config/connection');
// call models
const {Post, User, Comment} = require('../models');
// auth
const withAuth = require('../utils/auth');

// route to get
router.get('/', withAuth, (req,res)=> {
    
})