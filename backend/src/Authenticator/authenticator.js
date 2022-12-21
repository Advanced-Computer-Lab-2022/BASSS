const jwt = require('jsonwebtoken');
require('dotenv').config();


const requireAuth = (req, res, next) => {
  const token = req.cookies.token;
    
  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.secret , (err, decodedToken) => {
      if (err) {
        // console.log('You are not logged in.');
        // res send status 401 you are not logged in
        res.status(401).json({message:"You are not logged in."})
        res.redirect('/guest/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(401).json({message:"You are not logged in."})
  }
};

const typeAuth = (req,res,next) => {
  //SP.NET_SessionId=br31unc01ox2uziq1vjr1wmw;
  //token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
  //eyJ1c2VybmFtZSI6Ik1haVNhbWlyIiwiaWF0IjoxNjcxNDU3ODYyLCJleHAiOjE2NzE3MTcwNjJ9.
  //sanLx2f2WH5uVURiI4CmmOMl3lnUykq7FVVth6K2Qxs
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
    return res.status(401).json({error: "You are not logged in"})
  }

}


module.exports = { requireAuth, typeAuth };
