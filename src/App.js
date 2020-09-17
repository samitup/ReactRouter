/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import {
    BrowserRouter as Router,
    Switch, Route, Link
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Add from './components/Add'
import Home from './components/Home'
import List from './components/List'
import NoteForm from './components/NoteForm'

/*const Notes = () => {

    return(
        <div>
            <p>Valinta 1.</p>
        </div>
    )
} */

/*const Users = () => {

    return(
        <div>
            <p>Valinta 2.</p>
        </div>
    )
}*/

/*const Home = () => {
    return(
        <div>
            <p>Koti</p>
        </div>
    )
}*/

const App = () => {

    const padding = {
        padding: 5
    }
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')

    useEffect(() => {
        console.log('effect')
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                setNotes(response.data)
            })
    }, [])
    console.log('render', notes.length, 'notes')

    const addNote = event => {
        event.preventDefault()
        const noteObject = {
          content: newNote,
          date: new Date().toISOString(),
        }
        setNotes(notes.concat(noteObject))
        setNewNote('')
      
        axios
          .post('http://localhost:3001/notes', noteObject)
          .then(response => {
            console.log(response)
          })
        }
        const handleNoteChange = (event) => {
            console.log(event.target.value)
            setNewNote(event.target.value)
          }
    return (
        <div className="container">
            <Router>
                <div>
                    <Link style={padding} to="/">home</Link>
                    <Link style={padding} to="/add">add</Link>
                    <Link style={padding} to="/list">list</Link>
                </div>

                <Switch>
                    <Route path="/add">
                        <Add />
                    </Route>
                    <Route path="/list">
                        <ul>
                            {notes.map(note =>
                                <List
                                    key={note.id}
                                    note={note}
                                />
                            )
                            }
                        </ul>
                        <NoteForm onSubmit={addNote} value={newNote} onChange={handleNoteChange}></NoteForm>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

                <div>
                    <i>Esimerkkivalikko </i>
                    <i>perustuu HY:n fullstackopen-kurssimateriaaliin</i>
                </div>
            </Router>
        </div>
    )
}

export default App
