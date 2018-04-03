import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { moviesFetch } from '../Actions/MoviesActions';
import NavHeader from '../Components/NavHeader';
// Styles
import styles from './Styles/MoviesStyle';
const POSTER_URL = 'https://image.tmdb.org/t/p/w154';
let page = 1;

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice:'sort_by=popularity.desc',
      page: 1,
      selectedValue: 'Most Popular',
    };
    // on exiting the movie details
    {this.props.movies.length > 0 || this.props.moviesFetch(this.state.choice, this.state.page).then(() => this.loadMoreItems());}
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
    if(this.props.location.state) {
      const elmnt = document.getElementById(`${this.props.location.state.index}`);
      elmnt.scrollIntoView();
    }
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
          id={index}
          key={index}
          onClick={() => console.log(`clicked ${movie.original_title}`)}
        >
          <Link to={{pathname: '/moviedetails', state: { movie, index }}}>
            <img
              src={`${POSTER_URL}${movie.poster_path}`}
              style={{width: 135, height: 205, borderRadius: 5, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.9)'}}
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
        <NavHeader />
        <div style={styles.listContent}>
          {this.renderItems()}
          <div className="fixedDiv" style={{ display: 'flex', flex: 1 }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const movies = state.movies.data;

  return { movies };
};

export default connect(mapStateToProps, {moviesFetch})(Movies);
