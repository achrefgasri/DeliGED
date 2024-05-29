const { body, validationResult } = require("express-validator");

const registerRules = () => [
 
  body("Nom", "Le Nom est obligatoire").notEmpty(),
  body("Prénom", "Le Prénom est obligatoire").notEmpty(),
  body("CIN", "Le CIN est obligatoire et doit être une valeur numérique de 8 chiffres.").notEmpty().isNumeric().isLength({
    min: 8,
    max: 8,
  }),
  body("Telephone", "Le Telephone est obligatoire").notEmpty(),
  body("Email", "L'email est invalide").notEmpty().isEmail().custom((value) => {
    if (!value.endsWith('@gmail.com')) {
      throw new Error('L\'adresse email doit se terminer par @gmail.com');
    }
    return true;
  }).normalizeEmail(),

  
  body("Département", "Le Département est obligatoire").notEmpty(),
  body("Role", "Le Role est obligatoire").notEmpty(),
];

const loginRules = () => [
  body("email", "L'email est invalide").notEmpty().isEmail().custom((value) => {
    if (!value.endsWith('@gmail.com')) {
      throw new Error('The email address should be terminated at @gmail.com');
    }
    return true;
  }).normalizeEmail(),
  body("motdepasse", "Le Mot de Passe est invalide, il doit contenir exactement 8 caractères.").notEmpty().isLength({
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
