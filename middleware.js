const {productSchema,reviewSchema}=require('./schema')

const validateProduct=(req,res,next)=>{
    let {name,img,price,desc}=req.body;
    const {error}=productSchema.validate({name,img,price,desc})
    if(error){
        return res.render('error', { err: 'Some error message' });

    }
    next();
}


const validateReview = (req, res, next) => {
    const { rating, comment } = req.body;
    const { error } = reviewSchema.validate({ rating, comment });
    if (error) {
        // Optional: pass flash message or error page
        return res.status(500).render('error', { err: error.message });
    }
    next();
}



module.exports={validateProduct,validateReview}