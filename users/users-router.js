const router = require("express").Router();

const Users = require("../users/users-model.js");

function restrict(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next()
    } else {
        res.status(401).json({message: 'YOU, SHALL NOT, PAAAAAAAAASSSS!'})
    }
}

router.use(restrict)

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => res.status(400).json(err))
})

module.exports = router