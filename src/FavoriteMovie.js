import React, { Component } from 'react';

class FavoriteMovie extends Component {
    render(){
        return (
            <li className='user-list-item'>
                <p>User: <b>{this.props.user.name}</b></p>
                <code>Favorite Movie: <b>{this.props.movie.name}</b></code>
            </li>
        );
    }
}

export default FavoriteMovie;