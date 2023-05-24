const express = require('express');
// const { getAllProducts, getProduct } = require('../database/products');
const { getRecommendedProduct, getAllRecommendedproductsProducts } = require('../database/recommendedproducts');
const router = express.Router();


router.get('/', async (req, res) => {
    const recommendedproducts = await getAllRecommendedproductsProducts();
    // console.log(products);
    res.send({status:'OK', data:recommendedproducts});
});

router.get('/:productId', async (req, res) => {
    try{
        const product = await getRecommendedProduct(req.params.productId);

        if(!product){
            // res.status(404).send({status:'Failed', error: 'Product not found'});
            res.status(404).send({status:'Failed', error: e.message});
            return;
        }

        res.send({status:'OK', data:product});
    } catch (e){
        res.status(401).send({status:'Failed', error: e.message});
    }   
});

module.exports = router;
