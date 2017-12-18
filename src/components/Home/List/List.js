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
        
        let planets = res.data.results
        
        this.setState({ planets })
        
    })
}

    render() {
        
        return(
            //need to map over something here and make a list
            <div> Hey </div>
            <div>
                <ul>
                    {
                    this.state.people.map(function(item, i){
                    return <li key={i}>Test</li>
                    })
                    }           
                </ul>
            </div>    
            )
       
    }
}

export default List;