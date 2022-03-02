import express from 'express'

import { getNotes, createNote, updateNote ,deleteNote, getNotesBySearch} from '../controllers/notes.js';
import auth from '../middleware/auth.js'
const router = express.Router();

router.get('/', auth, getNotes );
router.get('/search', auth, getNotesBySearch )
router.post('/',auth, createNote);
router.patch('/:id', auth, updateNote);
router.delete('/:id', auth, deleteNote);

export default router