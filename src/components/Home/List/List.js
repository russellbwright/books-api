import React, { Component } from 'react';
import axios from 'axios'



class List extends Component {
constructor(props){
    super(props)

    this.state = {
        people: [],
        planets: []
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
}

renderStateItems(item, index){

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
                <div> Hey </div> 

                <div>
                    {this.state.people.map( (x, i) => this.renderStateItems(x,i)) }
                </div>    
            </div>
            )
       
    }
}

export default List;