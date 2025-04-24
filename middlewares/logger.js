const logger=(req,res,next)=>{
    const reqTime=new Date();
    console.log(`At ${reqTime} was received a request with ${req.method} method.`);
    next();
}

module.exports=logger;