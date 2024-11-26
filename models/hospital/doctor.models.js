import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        requierd: true
    },
    doctorPhoto: {
        type: String,
        required: true,
    },
    experienceInYear: {
        type: Number,
        required: true,
        default: 0
    }

}, {
    timestamps: true
})

export const Doctor = mongoose.model('Doctor', doctorSchema)