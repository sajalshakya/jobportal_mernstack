const express = require('express');

const {employerSignup_middleware,employerLogin_middleware, clientSignup_middleware, clientLogin_middleware} = require('../middleware/auth')
const {employerSignup, employerLogin, clientSignup, clientLogin} = require('../controller/auth')

const router = express.Router();

router.post("/employer-signup", employerSignup_middleware, employerSignup)
router.post("/employer-login", employerLogin_middleware, employerLogin)
router.post("/client-signup", clientSignup_middleware,clientSignup)
router.post("/client-login", clientLogin_middleware,clientLogin)

module.exports = router;