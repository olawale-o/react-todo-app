import React from 'react';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  render() {

  }
}
export default TodoContainer;
