import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProps } = this.props;
    addTodoProps(title);
    this.setState({
      title: '',
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." name="title" value={title} onChange={this.onChange} />
        <button type="button">Submit</button>
      </form>
    );
  }
}

export default InputTodo;

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
