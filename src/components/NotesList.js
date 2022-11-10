import React, { Component } from 'react'
import {useState} from 'react'
import axios from 'axios'
import {format} from "timeago.js"
import {Link} from 'react-router-dom'


//
//const getCats = () => {
//    axios.get("https://api.thecatapi.com/v1/images/search")
//    .then(res => {
//        console.log(res.data[0].url)
//        setCat(res.data[0].url)
//    }).catch(err => {
//        console.log(err)
//    })
//}   

export default class NotesList extends Component {
    state= {
        notes: [],
        cats: []
    }

    async componentDidMount(){
        
        
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10")
        .then(res => {
            const cats = res.data
            this.setState({cats});

            console.log(cats)
        })

        this.getNotes()

    }
    async getNotes(){
        const res = await axios.get('http://localhost:4000/api/notes')
        this.setState({notes: res.data})
    }
    deleteNote = async (id) => {
        await axios.delete('http://localhost:4000/api/notes/' + id);
        this.getNotes();
    }


    render() {
        const lista = this.state.cats.map((cat) => cat.url)
        console.log(lista)
        return (
            
            <div className="row">
                
            {
                this.state.notes.map(note => (
                    <div className="col-md-4 p-2" key={note._id}>
                        <div className="card">
                        <div className="card-header d-flex justify-content-between"> 
                                <h5>{note.title}</h5>
                                <Link className="btn btn-secondary" to={"/edit/" + note._id}>
                                        Edit
                                    </Link>
                            </div>
                            <div className="card-body">
                                <p>{note.content}</p>
                                <p>{note.author}</p>
                                <p>{format(note.date)}</p>
                            </div>
                            <div className="card-footer">
                                    <button 
                                        className="btn btn-danger" 
                                        onClick={() => this.deleteNote(note._id)}
                                    >
                                        Delete
                                    </button>

                                   
                                   
                            </div>

                            <div className="card-footer">
                                    <h3>Tenga un gato diario</h3>
                                   
                                    <img src={lista[Math.floor(Math.random() * 10)]} width="350" height="150"></img>
                                    
                                   
                                   
                                   
                            </div>

                            
                               

                        </div>
                        
                    </div>                            
                ))
            }
        </div>

        
            
        )
    }
}
