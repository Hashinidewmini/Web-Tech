import mongoose from "mongoose";

const oderedProdSchema = new mongoose.Schema({
    customerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true,
    },

    product: {
        type: String,
        required: true,
    },

    Quantity: {
        type: Number,
        required: true,
    },

    totalPrice: {
        type: Number,
        required: true,
    },
})