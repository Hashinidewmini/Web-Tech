import express from 'express'
import Order from '../models/orderedProd.models.js'
const router = express.Router();

router.post('/orders', async (req, res) => {
    try {
        console.log('Payload received:', req.body); // Log the payload
        const order = new Order(req.body);
        await order.save(); // Save to MongoDB Atlas
        res.status(201).json({ message: 'Order created successfully!', order });
    } catch (error) {
        console.error('Error saving order:', error); // Log the error
        res.status(500).json({ message: 'Failed to create the order.', error });
    }
});

router.get('/orders', async (req, res) => {
    try {
        const order = await Order.find()
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({message: "Error...", error});
    }
})

export default router