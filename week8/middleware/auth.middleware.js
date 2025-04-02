import jwt from 'jsonwebtoken';


export const isLoggedIn = async (req, res, next) => {
    try {
        console.log("res cookies.........:", req.cookies);
      
        const token = req.cookies.verifyToken; // Get token from 
        // cookies
        if (!token) {
            return res.status(401).json({ message: "Unauthorized, token missing" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request
        
        next();
    } catch (error) {
        console.log("middleware error : ", error);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
