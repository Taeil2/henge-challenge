import React from 'react';
import './app.scss';

import data from './../data';
import Search from './search';
import Results from './results';

class App extends React.Component {
  state = {
    data: data,
    results: data,
    sortBy: ''
  }

  sortResults = (sortBy) => {
    console.log('sorting');
    let results = this.state.results;

    switch(sortBy) {
      case 'from':
        if (this.state.sortBy === 'from') {
          results.sort(function(a, b) {
            if (a.from < b.from) return 1;
            if (a.from > b.from) return -1;
            return 0;
          });
          this.setState({
            results: results,
            sortBy: 'from-reverse'
          });
        } else if (this.state.sortBy === 'from-reverse') {
          this.setState({
            results: this.state.data,
            sortBy: ''
          });
        } else {
          results.sort(function(a, b) {
            if (a.from < b.from) return -1;
            if (a.from > b.from) return 1;
            return 0;
          });
          this.setState({
            results: results,
            sortBy: 'from'
          });
        }
        break;
      case 'to':
        if (this.state.sortBy === 'to') {
          results.sort(function(a, b) {
            if (a.to < b.to) return 1;
            if (a.to > b.to) return -1;
            return 0;
          });
          this.setState({
            results: results,
            sortBy: 'to-reverse'
          });
        } else if (this.state.sortBy === 'to-reverse') {
          this.setState({
            results: this.state.data,
            sortBy: ''
          });
        } else {
          results.sort(function(a, b) {
            if (a.to < b.to) return -1;
            if (a.to > b.to) return 1;
            return 0;
          });
          this.setState({
            results: results,
            sortBy: 'to'
          });
        }
        break;
      case 'subject':
        if (this.state.sortBy === 'subject') {
          results.sort(function(a, b) {
            if (a.subject < b.subject) return 1;
            if (a.subject > b.subject) return -1;
            return 0;
          });
          this.setState({
            results: results,
            sortBy: 'subject-reverse'
          });
        } else if (this.state.sortBy === 'subject-reverse') {
          this.setState({
            results: this.state.data,
            sortBy: ''
          });
        } else {
          results.sort(function(a, b) {
            if (a.subject < b.subject) return -1;
            if (a.subject > b.subject) return 1;
            return 0;
          });
          this.setState({
            results: results,
            sortBy: 'subject'
          });
        }
        break;
      case 'date':
        if (this.state.sortBy === 'date') {
          results.sort(function(a, b) {
            if (a.date < b.date) return 1;
            if (a.date > b.date) return -1;
            return 0;
          });
          this.setState({
            results: results,
            sortBy: 'date-reverse'
          });
        } else if (this.state.sortBy === 'date-reverse') {
          this.setState({
            results: this.state.data,
            sortBy: ''
          });
        } else {
          results.sort(function(a, b) {
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;
            return 0;
          });
          this.setState({
            results: results,
            sortBy: 'date'
          });
        }
        break;
      default:
        // do nothing
    }

    // results.sort(function(a, b) {
      // var keyA = new Date(a.updated_at),
      //   keyB = new Date(b.updated_at);
      // Compare the 2 dates
      // if (keyA < keyB) return -1;
      // if (keyA > keyB) return 1;
    // });
  }

  render() {
    console.log('data', this.state.data);
    console.log('results', this.state.results);

    return (
      <div className="App">
        <Search />
        <Results results={this.state.results} sortResults={this.sortResults} />
      </div>
    );
  }
};

export default App;
