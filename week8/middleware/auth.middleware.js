import jwt from 'jsonwebtoken'


export const isLoggedIn = async(req, res, next) => {
   try {
      console.log("req cookies: ", req.cookies?.verifyToken);
      
      // console.log("req cookies : ", req.cookie);
      
      
   } catch (error) {
      console.log("middleware error : ", error);
      
   }
}