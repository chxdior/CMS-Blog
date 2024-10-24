const router = require('express').Router();
const { withAuth } = require('../utils/auth');
const { User } = require('../models');

router.get('/', withAuth, async(req, res) => {
    
    try {
        const user = await User.findOne({
            where: {username: req.session.username},
        })

        const posts = await user.getPosts({raw: true});

        res.render('dashboard', {
            headerTitle: 'Your Dashboard',
            posts: posts,
            loggedIn: req.session.loggedIn,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error');
        return;
    }
});

module.exports = router;