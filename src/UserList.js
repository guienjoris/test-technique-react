import React, {Component} from  'react';
import users from './data/users.json';

class Table extends Component {
    constructor ( props ) {
        super(props)
        this.state = {
            users
        }
    }
    renderTableData() {
        var date = new Date()
        return this.state.users.map((user, index) => {
           const { id, firstname,lastname, birthdate, email, city } = user //destructuring
        return (
            <tr key={id}>
                <td>{lastname},{firstname}</td>
                <td>{email}</td>
                <td>{-(birthdate -date.getFullYear())}</td>
                <td>{city}</td>
            </tr>
        )
        })
    }
    render(){
        return <div>
            <div>
        <table id='users'>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Ville</th>
            </thead>
            <tbody>
                {this.renderTableData()}
            </tbody>
        </table>
    </div>
        </div>
        
    }
}

export default Table