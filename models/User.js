import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        streetName: {
            type: String,
        },
        buildingNumber: {
            type: String,
        },
        apartmentNumber: {
            type: String,
        },
        floorNumber: {
            type: String,
        },
        city: {
            type: String,
        },
        postalCode: {
            type: String,
        },
        intercomCode: {
            type: String,
        },
        phone: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
