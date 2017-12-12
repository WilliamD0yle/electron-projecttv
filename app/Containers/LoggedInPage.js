import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Example extends Component {
  render() {
    return (
      <div style={styles.App}>
        <div style={styles.AppHeader}>
          <img
            src="https://www.shareicon.net/data/512x512/2016/07/08/117367_logo_512x512.png"
            style={styles.Applogo}
            alt="logo"
          />
          <h2>Welcome to React/Electron</h2>
        </div>
        <p styles={styles.AppIntro}>
          Example!
        </p>
        <Link to="/">back</Link>
      </div>
    );
  }
}

const styles = {
  App:{
    fontFamily: 'sans-serif',
    textAlign: 'center'
  },
  Applogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: 80,
  },
  AppHeader: {
    backgroundColor: '#222',
    height: 150,
    padding: 20,
    color: 'white',
  },
  AppIntro:{
    fontSize: 18,
  },
  AppMain: {
    paddingLeft: 15,
    paddingRight: 15,
    textAign: 'left',
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(Example);
