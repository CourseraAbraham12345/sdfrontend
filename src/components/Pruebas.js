import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    cats: []
  }

  componentDidMount() {
    axios.get(`https://api.thecatapi.com/v1/images/search?limit=10`)
      .then(res => {
        const cats = res.data;

        this.setState({ cats});

        //console.log(cats)
        
      })
  }


  
  render() {
    const lista = this.state.cats.map((cat) => cat.url)
    console.log(lista)
    
    return (
      <ul>
        {
            <img src={lista[Math.floor(Math.random() * 10)]}></img>
        }
        {
            <img src={lista[Math.floor(Math.random() * 10)]}></img>
        }
      </ul>
    )
  }
}


