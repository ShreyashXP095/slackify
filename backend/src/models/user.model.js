import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        default: '',
        required: true,
    }
}, {
    timestamps: true
});

export const User = mongoose.model('User', userSchema);