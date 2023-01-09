const jwt = require('jsonwebtoken');
require('dotenv').config();

const requireAuth = (req,res,next) => {
  const token = (req.headers.cookie).split(';')[1];
  if(token){
    jwt.verify(token.split('=')[1], process.env.secret , (err, decodedToken) => {
      if(err){
        return res.status(401).json({error: "You are not logged in"})
      }else{
        res.locals.user = decodedToken.username
        next();
      }
    })
  }
  else{
    return res.status(401).json({error: "8alat"})
  }

}


module.exports = { requireAuth };
