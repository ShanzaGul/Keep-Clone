import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const fetchNotes = () => API.get('/notes');
export const fetchNotesBySearch = (searchQuery) => API.get(`/notes/search?searchQuery=${searchQuery.search || "none"}`)
export const createNote = (newNote) => API.post('/notes', newNote);
export const updateNote = (id,updatedNote)=> API.patch(`/notes/${id}`,updatedNote);
export const deleteNote = (id)=> API.delete(`/notes/${id}`);



export const signin = (formData) => API.post('/user/signin', formData);
export const signup = (formData) => API.post('/user/signup', formData)