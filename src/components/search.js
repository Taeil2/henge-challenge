import React from 'react';
import './search.scss';

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import iconCalender from './../images/icon_calender.svg'
import iconSearch from './../images/icon_search.svg';

class Search extends React.Component {
  state = {
    startDate: '',
    endDate: ''
  }

  render() {
    return (
      <header>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        <button><img src={iconSearch} alt="Search" /></button>
        {/* <img src={iconCalender} /> */}
      </header>
    );
  }
}

export default Search;
