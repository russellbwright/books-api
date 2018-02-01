import React, { Component } from 'react';
import './List.css'
import axios from 'axios'



class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: [],
            planets: [],
            marvel: []
        }

        this.characters = true;
        this.planetss = true;


    }


    componentWillMount() {
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

        axios.get('https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=sp&apikey=a29d1639d4e0f5bc309318e2b68156cb')
            .then(res => {
                console.log(res.data.data.results)
                var marvel = res.data.data.results
                this.setState({ marvel })
            })
    }

    renderPeopleItems(item, index) {

        return (
            <div key={index}>
                <div> {item.name} </div>
            </div>
        )
    }

    renderPlanetItems(item, index) {

        return (
            <div key={index}>
                <div> {item.name} </div>
            </div>
        )
    }

    renderMarvelItems(hero, index) {

        return (
            <div key={index}>
            {/* thumbnails are forbidden on this server */}
                {/* <img src={hero.thumbnail.path} /> */}
                <div> {hero.name} </div>
            </div>
        )
    }

planetsOff = () => {
    this.setState= false;
}

    render() {



        return (
            //need to map over something here and make a list
            <div>
                <div className='main-title'> Title </div>
                <button onClick={this.planetsOff}> Planets Off</button>

                <div className='display-flex'>
                    <div className='character-div'>
                        <div className='sub-title'> Characters </div>
                        {this.state.people.map((x, i) => this.renderPeopleItems(x, i))}
                    </div>

                    <div className='planets-div'>
                        <div className='sub-title'> Planets </div>

                        {this.state.planets.map((x, i) => this.renderPlanetItems(x, i))}
                    </div>
                </div>

                <div>

                    <div className='sub-title'> Heroes </div>

                    {this.state.marvel.map((x, i) => this.renderMarvelItems(x, i))}

                </div>
            </div>
        )

    }
}

export default List;