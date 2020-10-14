import React from 'react';
import './app.scss';

import data from './../data';
import Search from './search';
import Results from './results';

class App extends React.Component {
  state = {
    data: data,
    results: data,
  }

  sortResults = () => {
    console.log('sorting');
    let results = this.state.results;

    results.sort(function(a, b) {
      // var keyA = new Date(a.updated_at),
      //   keyB = new Date(b.updated_at);
      // Compare the 2 dates
      // if (keyA < keyB) return -1;
      // if (keyA > keyB) return 1;

      if (a.from < b.from) return -1;
      if (a.from > b.from) return 1;
      return 0;
    });

    this.setState({results: results});
  }

  render() {
    return (
      <div className="App">
        <Search />
        <Results results={this.state.results} sortResults={this.sortResults} />
      </div>
    );
  }
};

export default App;
