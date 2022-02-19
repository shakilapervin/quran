import mongoose from 'mongoose';
const chapterSchema = new mongoose.Schema(
    {
        arabicTitle: {
            type: String,
            required: true,
        },
        banglaTitle: {
            type: String,
            required: true,
        },
        banglaTafsil: {
            type: String,
        },
        sura: {
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

const Chapter =
    mongoose.models.Chapter || mongoose.model('Chapter', chapterSchema);
export default Chapter;
