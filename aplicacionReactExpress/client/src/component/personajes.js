import {Component} from 'react';

class Personajes extends Component{

    constructor(props){
        super(props);
        this.state = {
            info:[]
        }
    }

    componentDidMount(){
        fetch('/rick_morty/info').then(res=>res.json()).then(infor => {
            this.setState({info: infor});
        });
    }

    render(){
        return (
        <div>
            <ul>
                {
                    this.state.users.map(infor => {
                        return <li>Nombre de usuario: {infor.name}, Edad del usuario: {infor.age}</li>
                    })
                }
            </ul>
        </div>
        );
    }
}

export default Personajes;