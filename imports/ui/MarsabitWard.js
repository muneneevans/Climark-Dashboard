import React from 'react';
import Select from 'react-select';

export default class MarsabitWard extends React.Component {
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
  }

  handleSubmit(event) {
    alert('Your Ward is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (<div className='item__searchbox'>
      <div>
        <h1>
          Select Ward:</h1>
      </div>
      <div>
        <form onSubmit={this.handleSubmit}>
          <select className='item__input' value={this.state.value} onChange={this.handleChange}>
            <option value="Laisamis">Laisamis</option>
            <option value="Sakuu">Sakuu</option>
          </select>
        </form>
      </div>
    </div>)
  }
}
