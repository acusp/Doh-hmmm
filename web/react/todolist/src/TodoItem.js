import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handItemClick = this.handItemClick.bind(this);
  }
  render() {
    return (
      <div onClick={this.handItemClick}>
        {this.props.content}
      </div>
    )
  }

  handItemClick() {
    const { deleteItem } = this.props;
    deleteItem(this.props.index);
  } 
}

export default TodoItem;