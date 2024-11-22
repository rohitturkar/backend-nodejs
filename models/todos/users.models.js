import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      min: [6, 'min 6 characters are needed'],
      max: 10,
    },

    isActive: Boolean,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
