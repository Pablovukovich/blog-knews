import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) =>{
    
        const token = req.cookies.token
    
        if(!token ){
            return res.status(401).json({seccess: true, message: "No autorizado"})
        }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded) return res.status(401).json({success: false, message: "No autorizado - token invalido"})

        req.userId = decoded.userId
        next()

     }catch(error){
        console.log("Error a verificar el token", error)
        return res.status(500).json({success: false, message:"server error"})
     }
}