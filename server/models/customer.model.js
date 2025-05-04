import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },

    customerTel: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    totalPrice: {
        type: Number,
        required: true,
    },
})

const Order = mongoose.model("Customer", customerSchema);
export default Order;