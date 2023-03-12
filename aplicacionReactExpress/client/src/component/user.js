import {Component} from 'react';

class Users extends Component{

    constructor(props){
        super(props);
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        fetch('/api/user').then(res=>res.json()).then(users => {
            this.setState({users: users});
        });
    }

    render(){
        return (
        <div>
            <ul>
                {
                    this.state.users.map(user => {
                        return <li>Nombre de usuario: {user.username}, Edad del usuario: {user.age}</li>
                    })
                }
            </ul>
        </div>
        );
    }
}

export default Users;