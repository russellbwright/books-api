import React, { Component } from 'react'
import axios from 'axios'

class Single extends Component {
    constructor(props){
        super(props)

            this.state={
                person: []
            }
    }

    getPerson(){
        const person_name = this.props.match.params.name

        axios.get('https://swapi.co/api/people').then((res) => {
            console.log(res.data.results)
            let people = res.data.results
            this.setState({ people })
        })
    }

    render() {
        return(
            <div>
                Hey
            </div>    
        )
    }
}

export default Single