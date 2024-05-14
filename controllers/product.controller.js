const Product= require ('../models/products.model');


// getProducts
const getProducts= async (req, res)=>{
    try {
        const product= await Product.find(req.body);
        res.status(200).json(product);

    }
    catch (error){
        res.status(500).json({message: error.message})
    }
};


//getProduct
const getProduct= async (req, res) =>{
    try {
        const {id}= req.params;
        const product= await Product.findById(id);
        res.status(200).json(product);

    }
    catch (error){
        res.status(500).json({message: error.message})
    }
};


//Create a Product
const createProduct= async (req, res) =>{
    try {
        const product= await Product.create(req.body);
        res.status(200).json(product);

    }
    catch (error){
        res.status(500).json({message: error.message})
    }
};


// update a Product
const updateProduct= async (req, res) =>{
    try {
        
        const {id}= req.params;
       
        const product= await Product.findByIdAndUpdate(id, req.body);
        
        if (!product) {
            return res.status(404).json({message: 'Product not found'});
        }
        const updatedProduct= await Product.findById(id);
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({message: error.message});
        
    }
};


// delete a prodcut
const deleteProduct= async (req, res) =>{
    try{

        const {id}= req.params;
        
        const product= await Product.findByIdAndDelete(id, req.body);

        if(!product) {
            return res.status(404).json({message: 'Product not Found'});
        }
        return res.status(200).json('Product deleted successfully');
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports= {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}