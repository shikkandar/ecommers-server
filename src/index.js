import express from 'express';
import cors from 'cors';
import authRouters from './routes/auth.routes.js'
import userRouters from './routes/user.routes.js'
import productRouters from './routes/product.routes.js'
import adminProductRouters from './routes/adminProduct.routes.js'
import cartRouters from './routes/cart.routes.js'
import cartItemRouters from './routes/cartItems.routes.js'
import orderRouters from './routes/order.routes.js'
import reviewRouters from './routes/review.routes.js'
import ratingRouters from './routes/rating.routes.js'
import adminOrderRouters from './routes/adminOrder.routes.js'
import paymentRouters from './routes/payment.routes.js'
const app=express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message:"Welcome to ecommerce api - node",status:true})
})
app.use("/auth",authRouters)
app.use("/api/users",userRouters)
app.use("/api/products",productRouters)
app.use("/api/admin/products",adminProductRouters)
app.use("/api/cart",cartRouters)
app.use("/api/cart_items",cartItemRouters)
app.use("/api/orders",orderRouters)
app.use("/api/reviews",reviewRouters)
app.use("/api/ratings",ratingRouters)
app.use("/api/admin/orders",adminOrderRouters)
app.use("/api/payments",paymentRouters)


export default app;