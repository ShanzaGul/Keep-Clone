import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
    title: String,
    message: String,
    name:String,
    creator: String,
    label: [String],
    selectedFile: String,
    backgroundColor: String,
    archive: Boolean,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var NoteMessage = mongoose.model('NoteMessage', noteSchema);

export default NoteMessage;