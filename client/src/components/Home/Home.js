import React from 'react'

import {Row, Col} from "react-bootstrap";
import Tabs from '../Tabs/Tabs'
import NoteForm from '../Form/Form'
import {useEffect,useState} from 'react'


import {useDispatch} from 'react-redux'
import { getNotes } from '../../actions/notes'
import Navbarr from '../Navbar/Navbar';


function Home() {
    const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [listView , setListView] = useState(false);
  const [tab, setTab] = useState("first");
  const user = JSON.parse(localStorage.getItem('profile'));

  
  useEffect(() => {
    dispatch(getNotes());
    console.log("I am fired and id id changed" , currentId)
  }, [dispatch, currentId,tab])


    return (
        <div>
            
          
                   <Navbarr listView={listView} setListView={setListView} />
                   <NoteForm currentId={currentId} setCurrentId={setCurrentId} />
                   <Tabs currentId={currentId} setCurrentId={setCurrentId} listView={listView} tab={tab} setTab={setTab} />

          
   
        </div>
    )
}

export default Home
