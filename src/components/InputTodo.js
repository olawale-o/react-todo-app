import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { title } = this.state;
    e.preventDefault();
    console.log(title);
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." value={title} onChange={this.onChange} />
        <button type="button">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
