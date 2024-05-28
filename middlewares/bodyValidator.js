const { body, validationResult } = require("express-validator");

const registerRules = () => [
  body("firstname", "The Firstname is obligatory").notEmpty(),
  body("lastname", "The Lastname is obligatory").notEmpty(),
  body("email", "The email is invalid").notEmpty().isEmail().custom((value) => {
    if (!value.endsWith('@gmail.com')) {
      throw new Error('The email address should be terminated at @gmail.com');
    }
    return true;
  }).normalizeEmail(),
  body("birthdate", "The Birthdate is obligatory and must be a valid date.").notEmpty().isDate(),
  body("bio", "The bio is obligatory").notEmpty(),
  body("role", "The Role is obligatory").notEmpty(),
];

const loginRules = () => [
  body("email", "L'email est invalide").notEmpty().isEmail().custom((value) => {
    if (!value.endsWith('@gmail.com')) {
      throw new Error('The email address should be terminated at @gmail.com');
    }
    return true;
  }).normalizeEmail(),
  body("password", "This password is invalid, it contains exactly 8 entries.").notEmpty().isLength({
    min: 8,
    max: 8,
  }),
];

const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().map((el) => ({
        msg: el.msg,
      })),
    });
  }
  next();
};

module.exports = {
  validator,
  loginRules,
  registerRules,
};
