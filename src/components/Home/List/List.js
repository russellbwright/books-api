import React, { Component } from 'react';
import axios from 'axios'
class List extends Component {
constructor(props){
    super(props)

    this.state = {
        planets: [],
    }
    
}


componentWillMount(){
    axios.get('https://swapi.co/api/planets/').then(res => {
        
        let planets = res.data.results
        
        this.setState({ planets })
        
    })
}

    render() {
       
        return(
            <div> 
              <div className=''> </div>      
            </div>
        )
    }
}

export default List;