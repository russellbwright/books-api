import React, { Component } from 'react';
import './List.css'
import axios from 'axios'
import curl from 'curl'


class List extends Component {
constructor(props){
    super(props)

    this.state = {
        people: [],
        planets: [],
        marvel: []
    }
    
}


componentWillMount(){
    axios.get('https://swapi.co/api/people').then((res) => { 
        console.log(res.data.results)
       let people = res.data.results
        this.setState({ people })
    })


    axios.get('https://swapi.co/api/planets/').then(res => {
        console.log(res.data.results)
        let planets = res.data.results
        
        this.setState({ planets })
        
    })

    axios.get('https://gateway.marvel.com:443/v1/public/characters?name=hulk&apikey=a29d1639d4e0f5bc309318e2b68156cb')
    .then(res => {
        console.log(res.data.data.results[0])
        var marvel = res.data.data.results[0]
        this.setState({ marvel })
    })
}

renderPeopleItems(item, index){

    return(
        <div key={index}> 
            <div> {item.name} </div>
        </div>
    )
}

renderPlanetItems(item, index){

    return(
        <div key={index}>
            <div> {item.name} </div>
        </div>
    )
}



    render() {
        
        

        return(
            //need to map over something here and make a list
            <div> 
                <div className='main-title'> Title </div> 

                    <div className='display-flex'>
                        <div>
                            <div className='sub-title'> Characters </div>
                            {this.state.people.map( (x, i) => this.renderPeopleItems(x,i)) }
                        </div>

                        <div>
                            <div className='sub-title'> Planets </div>
                            
                            {this.state.planets.map( (x,i) => this.renderPlanetItems(x,i)) }
                        </div>
                    </div>

                    <div>
                        
                        <div>{this.state.marvel.name}</div>
                        
                    </div>                
            </div>
            )
       
    }
}

export default List;