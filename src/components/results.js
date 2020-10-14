import React from 'react';
import './results.scss';

import logoImage from './../images/logo.png';

class Results extends React.Component {
  render() {
    let results = [];
    let logo;
    this.props.results.forEach((result) => {
      results.push(
        <div className="table-row">
          <div>{result.from}</div>
          <div>{result.to}</div>
          <div>{result.subject}</div>
          <div>{result.date}</div>
        </div>
      )
    });

    if (this.props.results.length === 0) {
      logo = <div><img src={logoImage} alt="Mail Archiver"/></div>
    }



    return (
      <>
        <div className="results">Results: {this.props.results.length} mail(s)</div>
        <div className="table">
          <div className="table-header">
            <div onClick={this.props.sortResults}>From</div>
            <div>To</div>
            <div>Subject</div>
            <div>Date</div>
          </div>
          {results}
          {logo}
        </div>
      </>
    );
  }
};

export default Results;
