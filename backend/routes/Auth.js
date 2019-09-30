const express = require('express')
const router = express.Router()



router.post('/signin', (req, res) => {
      
    const email = req.body.email
    const password = req.body.password

    res.send('this is the login route')
})



module.exports = router