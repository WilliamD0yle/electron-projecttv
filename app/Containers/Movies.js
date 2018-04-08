import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { moviesFetch } from '../Actions/MoviesActions';
import Poster from '../Components/Poster';
// Styles
import styles from './Styles/MoviesStyle';
const POSTER_URL = 'https://image.tmdb.org/t/p/w154';
let page = 1;

class Movies extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      choice:'sort_by=popularity.desc',
      page: 1,
      selectedValue: 'Most Popular',
      show: false
    };
    // on exiting the movie details
    {this.props.movies.length > 0 || this.props.moviesFetch(this.state.choice, this.state.page).then(() => this.loadMoreItems());}
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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

  render() {
    return (
      <div
        id="container"
        style={styles.container}
      >
        <Modal show={this.state.show} onHide={this.handleClose}>
          <h1>Hello</h1>
        </Modal>
        <div style={styles.listContent}>
          {
            this.props.movies.map((movie, index) => {
              return (
                <Poster key={index} movie={movie} onClick={this.handleShow} />
              );
            })
          }
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
