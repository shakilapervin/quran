import mongoose from 'mongoose';
const suraSchema = new mongoose.Schema(
    {
        banglaName: {
            type: String,
            required: true,
        },
        arabicName: {
            type: String,
            required: true,
        },
        serial: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Sura = mongoose.models.Sura || mongoose.model('Sura', suraSchema);
export default Sura;
