const {body} =  require('express-validator');

const expressValidate = require('./expressValidate');

const employerSignup_middleware = expressValidate([
    body('company_name').notEmpty().withMessage("Invalid Field"),
    body('company_email').isEmail().notEmpty().withMessage("Invalid Field"),
    body('website').isURL().withMessage("Invalid Field"),
    body('company_contact').notEmpty().withMessage("Invalid Field"),
    body('company_industry').notEmpty().withMessage("Invalid Field"),
    body('person_name').notEmpty().withMessage("Invalid Field"),
    body('person_email').isEmail().notEmpty().withMessage("Invalid Field"),
    body('person_contact').notEmpty().withMessage("Invalid Field"),
    body('password').notEmpty().isLength({ min: 8 }).withMessage("Invalid Field"),
])
const employerLogin_middleware = expressValidate([
    body('email').isEmail().notEmpty().withMessage("Invalid Field"),
    body('password').notEmpty().isLength({ min: 8 }).withMessage("Invalid Field"),
])

const clientSignup_middleware = expressValidate([
    body('name').notEmpty().withMessage("Invalid Field"),
    body('email').isEmail().notEmpty().withMessage("Invalid Field"),
    body('contact').notEmpty().withMessage("Invalid Field"),
    body('job_preference').notEmpty().withMessage("Invalid Field"),
    body('password').notEmpty().isLength({ min: 8 }).withMessage("Invalid Field"),
])

const clientLogin_middleware = expressValidate([
    body('email').isEmail().notEmpty().withMessage("Invalid Field"),
    body('password').notEmpty().isLength({ min: 8 }).withMessage("Invalid Field"),
])

module.exports = {
    employerSignup_middleware,
    employerLogin_middleware,
    clientSignup_middleware,
    clientLogin_middleware
}