import React, { Component } from 'react';
import { Search } from '../presentation';

class Playlist extends Component { 

    render() {
        return (
            <div>
                <div className="hero-header bg-shop animated fadeindown">
                    <h1 className="hero-title">Playlist</h1>
                </div>      
                
                <Search />
            </div>      
            );
    }
}

export default Playlist;