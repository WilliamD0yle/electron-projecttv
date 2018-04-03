import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import YouTube from 'react-youtube';
import * as FontAwesome from 'react-icons/lib/fa';
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
    const { backdrop_path, overview, poster_path, title, genre_ids, release_date } = this.props.location.state.movie;
    const { genres, runtime, tagline } = this.props;
    return (
      <div style={styles.container}>
        {/* <YouTube
          videoId={this.props.videoID}
        /> */}
        <img
          style={styles.backgrondImage}
          src={`https://image.tmdb.org/t/p/w780${backdrop_path}`}
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
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              />
            </div>
            <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
              <Link
                style={{display: 'flex', alignSelf: 'flex-end'}}
                to={{pathname: '/', state: { index: this.props.location.state.index }}}
              >
                <FontAwesome.FaClose
                  size={30}
                  style={{margin: 30}}
                  color='rgb(207, 65, 65)'
                />
              </Link>
              <h1 style={styles.title}>{title}</h1>
              <i><p style={styles.tagline}>{tagline}</p></i>
              <p style={styles.date}>{release_date} &bull; {runtime}mins &bull; {genres ? genres.map(genre => `${genre.name}, `) : null}</p>
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
