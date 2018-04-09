import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';
// Styles
import styles from '../Containers/Styles/MovieDetailsStyle';

const MovieDetails = props => (
  <div style={styles.container}>
    {console.log(props)}
    {/* <YouTube
      videoId={this.props.videoID}
    /> */}
    <img
      style={styles.backgrondImage}
      src={`https://image.tmdb.org/t/p/w780${props.movie.backdrop_path}`}
    />
    <div
      style={styles.backgroundImageOverlay}
    >
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <img
            onClick={() => console.log('img clicked')}
            style={{
              display: 'flex', flex: 1,
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              width: undefined,
              height: undefined,
              borderRadius: 5,
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 1)'
            }}
            src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
          />
        </div>
        <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
          <div style={{display: 'flex', alignSelf: 'flex-end'}}>
            <FontAwesome.FaClose
              size={30}
              style={{margin: 30}}
              color='rgb(207, 65, 65)'
            />
          </div>
          <h1 style={styles.title}>{props.movie.title}</h1>
          <i><p style={styles.tagline}>{props.movie.tagline}</p></i>
          <p style={styles.date}>
            {props.movie.release_date} &bull;
            {props.movie.runtime}mins &bull;
            {props.movie.genres ? props.movie.genres.map(genre => `${genre.name}, `) : null}
          </p>
          <p style={styles.overview}>{props.movie.overview}</p>
        </div>
      </div>
    </div>
  </div>
);

export default MovieDetails;
