import React from 'react';
import Select from 'react-select';
import {Router, Route, browserHistory} from 'react-router';

export default class CountySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log('Component did mount Link List');

  }

  //component will unmount is called when the component is unmounted
  componentWillUnmount() {
    console.log('Component will unmount linklist');

  }

  handleChange(event) {
    this.setState({value: event.target.value});
    if (this.state.value === 'Marsabit') {
      browserHistory.push('/wardmarsabit');
    } else if (this.state.value === 'Isiolo') {
      browserHistory.push('/wardisiolo');
    }
  }

  handleSubmit(event) {
    alert('Your favorite county is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (<div className='item__searchbox'>
      <h1>
        Select County:
      </h1>
      <form onSubmit={this.handleSubmit}>
        <select className='item__input' value={this.state.value} onChange={this.handleChange}>
          <option value="Marsabit">Marsabit</option>
          <option value="Isiolo">Isiolo</option>
        </select>
      </form>
    </div>)
  }
}
