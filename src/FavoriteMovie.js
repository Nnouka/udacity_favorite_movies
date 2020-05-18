import React, { Component } from 'react';

class FavoriteMovie extends Component {
    render(){
        return (
            <li className='user-list-item'>
                <p>{this.props.user.name +'\'s'} favorite movie is {this.props.movie.name}</p>
            </li>
        );
    }
}

export default FavoriteMovie;