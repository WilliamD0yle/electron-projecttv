import React from 'react';
import { Link } from 'react-router-dom';
// Styles

const App = (props) => (
  <div>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      height: 75,
      backgroundColor: 'rgb(44, 46, 52)',
      boxShadow: '10px rgb(0, 0, 0)',
    }}
    >
      <h1>
        <Link
          style={{color: 'rgb(255, 255, 255)', fontSize: 20, fontWeight: '400', alignSelf: 'flex-end', paddingLeft: 10, textDecoration: 'none'}}
          to={{pathname: '/movies'}}
        >
          Movies
        </Link>
      </h1>
      <h1>
        <Link
          style={{color: 'rgb(255, 255, 255)', fontSize: 20, fontWeight: '400', alignSelf: 'flex-end', paddingLeft: 10, textDecoration: 'none'}}
          to={{pathname: '/'}}
        >
          TV Shows
        </Link>
      </h1>
    </div>
    { props.children }
  </div>
);

export default App;
