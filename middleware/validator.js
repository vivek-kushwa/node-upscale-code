const Joi = require("joi");

exports.validateMiddleware = (schema,)=>{
    return (req, res, next) => {
      const { error } = schema.validate(req.body);
      if (!error) {
        next();
      } else {
        res.status(422).json({ error }); 
      }
    };

}


