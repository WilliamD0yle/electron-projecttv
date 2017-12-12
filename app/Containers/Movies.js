import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { moviesFetch } from '../Actions/MoviesActions';
// Styles
import styles from './Styles/MoviesStyle';
const POSTER_URL = 'https://image.tmdb.org/t/p/w320';
let page = 1;

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice:'sort_by=popularity.desc',
      page: 1,
      selectedValue: 'Most Popular',
      message: 'not at bottom',
    };
    this.props.moviesFetch(this.state.choice, this.state.page).then(() => this.loadMoreItems());
    this.handleScroll = this.handleScroll.bind(this);
  }


  handleScroll() {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.loadMoreItems();
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  loadMoreItems() {
    page++;
    this.props.moviesFetch(this.state.choice, page);
  }

  renderItems() {
    return this.props.movies.map((movie, index) => {
      return (
        <div
          style={styles.row}
          key={index}
          onClick={() => console.log(`clicked ${movie.original_title}`)}
        >
          <Link to={{pathname: '/moviedetails', state: { movie: movie }}}>
            <img
              src={`${POSTER_URL}${movie.poster_path}`}
              style={{width: 135, height: 205, borderRadius: 5}}
            />
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div
        id="container"
        style={styles.container}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          height: 75,
          backgroundColor: 'rgba(44, 46, 52, 0.5)',
          boxShadow: '10px rgb(0, 0, 0)',
          marginBottom: 20,
        }}
        >
          <h1 style={{color: 'rgb(255, 255, 255)', fontSize: 20, fontWeight: '100', alignSelf: 'flex-end', paddingLeft: 10}}>
            Movies
          </h1>
        </div>
        <div style={styles.listContent}>
          {this.renderItems()}
          <div className="fixedDiv" style={{ display: 'flex', flex: 1 }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let movies = state.movies.data;

  return { movies };
};

export default connect(mapStateToProps, {moviesFetch})(Movies);
