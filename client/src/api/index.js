import axios from 'axios'

const url = "http://localhost:5000/notes";

export const fetchNotes = () => axios.get(url)
