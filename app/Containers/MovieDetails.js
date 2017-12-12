import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import { trailerFetch, moviesDetails } from '../Actions/MoviesActions';
// Styles
import styles from './Styles/MovieDetailsStyle';

class MovieDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisibility: false
    };
    this.props.trailerFetch(this.props.location.state.movie.title);
    this.props.moviesDetails(this.props.location.state.movie.id);
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisibility });
  }

  render () {
    const { backdrop_path, overview, poster_path, title, vote_average, genre_ids, release_date } = this.props.location.state.movie;
    const { genres, runtime, tagline } = this.props;

    return (
      <div style={styles.container}>
        <img
          style={styles.backgrondImage}
          src={`https://image.tmdb.org/t/p/w1000${backdrop_path}`}
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
                }}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              />
            </div>
            <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-end', paddingTop: 100}}>
              <h1 style={styles.title}>{title}</h1>
              <p style={styles.tagline}>{tagline}</p>
              <p style={styles.date}>{release_date}  {runtime}mins </p>
              <p style={styles.overview}>{overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const genres = state.details.genres;
  const runtime = state.details.runtime;
  const tagline = state.details.tagline;
  const videoID = state.trailer.id;
  return {videoID, genres, runtime, tagline};
};

export default connect(mapStateToProps, {trailerFetch, moviesDetails})(MovieDetailsScreen);
