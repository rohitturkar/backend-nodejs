import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    }
    ,
    addressLine1: {
        type: String,
        required: true,
    },
    addressLine2: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },

    specializedIn: {
        type: [{
            type: String
        }],
        required: true
    },

    patient: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    }],
    doctor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }]

}, {
    timestamps: true
})

export const Hospital = mongoose.model('Hospital', hospitalSchema)