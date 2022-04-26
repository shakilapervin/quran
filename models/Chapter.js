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
        banglaTafsil2: {
            type: String,
        },
        sura: {
            type: String,
            required: true,
        },
        serial: {
            type: Number,
            required: true,
            unique:true,
        },
    },
    {
        timestamps: true,
        strict: false
    }
);

const Chapter =
    mongoose.models.Chapter || mongoose.model('Chapter', chapterSchema);
export default Chapter;
