import React, {Component} from 'react';

class Gif extends Component {

    constructor(props){
        super(props);
        this.state={
            gif: ""
        }
    }

    apiCall(url, consecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => consecuencia(data))
        .catch(error => console.log(error))
    }

    componentDidMount(){
        console.log("Me monté!!!");
        this.nuevoGif();
    }

    mostrarGif = (data) => {
        console.log(data);
        this.setState(
            {
                gif: data.data.image_url
            }
        )
    }

    componentDidUpdate(){
        console.log('Me actualicé!!!');
        //alert('GIF NUEVO!!!')
    }

    nuevoGif(){
        this.apiCall('https://api.giphy.com/v1/gifs/random?api_key=iuLS4QlzOvBwAlK6NnqkRX8Gg87hWpkG&tag=&rating=g', this.mostrarGif);
    }

    render(){

        let contenido;

        if(this.state.gif===""){
            contenido=<p>Cargando...</p>
        } else {
            contenido = <img src={this.state.gif} alt=""></img>

        }

        return (
            <div>
                {contenido}
                <button onClick={ () => this.nuevoGif()}>Random Gif!!!</button>
            </div>
        );
    }
}

export default Gif;