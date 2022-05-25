import mongoose from 'mongoose';
const duaSchema = new mongoose.Schema(
    {
        banglaName: {
            type: String,
            required: true,
        },
        arabicName: {
            type: String,
            required: true,
        },
        arabicText: {
            type: String,
        },
        banglaText: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Dua = mongoose.models.Dua || mongoose.model('Dua', duaSchema);
export default Dua;
