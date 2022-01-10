import NoteMessage from "../models/notesMessage.js"
import mongoose from 'mongoose'



export const getNotes = async (req, res) => {
   try {
    const noteMessages = await NoteMessage.find();
    res.status(200).json(noteMessages)
   } catch (error) {
       res.status(404).json({message: error.message})
   }
}



export const createNote = async (req, res) => {
    const { title, message, selectedFile, creator, label, backgroundColor, archive } = req.body;
    console.log("I am here")
    const newNoteMessage = new NoteMessage({ title, message, selectedFile, creator,label, backgroundColor, archive })

    try {
        await newNoteMessage.save();

        res.status(201).json(newNoteMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateNote = async (req, res) => {
    const {id} = req.params;
    const { title, message, selectedFile, creator, label, backgroundColor, archive } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedNote = {  title, message, selectedFile, creator, label, backgroundColor, archive,_id: id  };

    await NoteMessage.findByIdAndUpdate(id, updatedNote, { new: true });

    res.json(updatedNote);
  
}


export const deleteNote = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await NoteMessage.findByIdAndRemove(id);

    res.json({message:"Post Deleted Successfully"});
}