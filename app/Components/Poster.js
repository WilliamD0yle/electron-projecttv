import React, { Component } from 'react';
import styles from '../Containers/Styles/MoviesStyle';
const POSTER_URL = 'https://image.tmdb.org/t/p/w154';

const Poster = props => (
  <div
    style={styles.row}
    id={props.index}
    key={props.index}
    onClick={props.onClick}
  >
    <img
      src={`${POSTER_URL}${props.movie.poster_path}`}
      style={{width: 135, height: 205, borderRadius: 5, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.9)'}}
    />
  </div>
);

export default Poster;
