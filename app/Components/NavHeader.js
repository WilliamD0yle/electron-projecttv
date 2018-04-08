import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Styles
import styles from '../Containers/Styles/MoviesStyle';

export default class Movies extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        height: 75,
        backgroundColor: 'rgb(31, 32, 33)',
        boxShadow: '10px rgb(0, 0, 0)',
        marginBottom: 20,
      }}
      >
        <h1>
          <Link
            style={{color: 'rgb(255, 255, 255)', fontSize: 20, fontWeight: '400', alignSelf: 'flex-end', paddingLeft: 10, textDecoration: 'none'}}
            to={{pathname: '/', state: { movie: 'movie' }}}
          >
            Movies
          </Link>
        </h1>
        <h1>
          <Link
            style={{color: 'rgb(255, 255, 255)', fontSize: 20, fontWeight: '400', alignSelf: 'flex-end', paddingLeft: 10, textDecoration: 'none'}}
            to={{pathname: '/', state: { movie: 'tv' }}}
          >
            TV Shows
          </Link>
        </h1>
        {/* <h1>
          <Link
            style={{color: 'rgb(255, 255, 255)', fontSize: 20, fontWeight: '400', alignSelf: 'flex-end', paddingLeft: 10, textDecoration: 'none'}}
            to={{pathname: '/', state: { movie: 'tv' }}}
          >
            Genre
          </Link>
        </h1>
        <DropdownButton
          id="gere-dropdown"
          title="Dropdownxs"
        >
          <MenuItem href="#books">Books</MenuItem>
          <MenuItem href="#podcasts">Podcasts</MenuItem>
          <MenuItem href="#">Tech I Like</MenuItem>
          <MenuItem href="#">About me</MenuItem>
          <MenuItem href="#addBlog">Add a Blog</MenuItem>
        </DropdownButton> */}
      </div>
    );
  }
}
