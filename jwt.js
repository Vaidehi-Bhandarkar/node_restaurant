const jwt = require('jsonwebtoken');

//Authorise Token
const jwtAuth = (req, res, next) => {
    //Check if token present in headers or not
    const auth = req.headers.authorization;
    if(!auth)
        return res.status(401).json({error: "Invalid Token"});

    //extract jwt token from headers
    const token = req.headers.authorization.split(' ')[1];
    if(!token)
        res.status(401).json({error: 'Unauthorised'});

    try{
        //Verify token
        const decrypt = jwt.verify(token, process.env.JWT_TOKEN);

        //add user info
        req.user = decrypt;
        next();
    } catch(err){
        console.error (err);
        res.status(401).json({ error: 'Invalid token' });
    }
};

//Generate Token
const generateToken = (userData) => {
    return jwt.sign({userData}, process.env.JWT_TOKEN);
}

module.exports = {
    jwtAuth,
    generateToken
}