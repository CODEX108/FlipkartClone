import express from 'express';
import { userSignup, userLogin } from '../controller/usercontroller.js';
import { getProducts, getProductById} from '../controller/productcontroller.js';
import { createPayment, processPayment } from '../controller/paymentcontroller.js';
const router=express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get('/products',getProducts);
router.get('/product/:id',getProductById);

router.post('/create-payment-intent', createPayment);
router.post('/confirm-payment', processPayment)

// router.get('/checkout-page',acceptPayment);
// router.post('/checkout', processPayment);

// router.get('/?success=true',(req, res)=>{
//     res.status(200);
// });

// router.get('/?canceled=true',(req, res)=>{
//     res.status(400).json('error');
// });

// router.post('/?success=true',(req, res)=>{
//     res.status(200);
// });

// router.post('/?canceled=true',(req, res)=>{
//     res.status(400).json('error');
// });
export default router;