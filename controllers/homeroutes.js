// import sequel
const sequelize = require('../config/connection');
// import router
const router = require('express').Router();
// import models
const {Post, User, Comment} = require ('../models');

// find all posts on homepage
router.get('/',)