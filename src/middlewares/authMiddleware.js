import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'BASICSECRET';

export const authMiddleware = (req, res, next) => {
    //Get toke
    const token = req.cookies['authCookie'];

    if (!token) {
        //No token = Guest. guest can keep browsing the app
        next();
    }

    //Validate token
    try {
        const decodedToken = jwt.verify(token, SECRET);
        

        //Attach decoded token to request
        req.user = decodedToken;

        next();
    } catch (err) {

    }
}