import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props); // ✅ 這行是關鍵，確保 this 被正確初始化
    this.state = {
      clicks: 0,
      totalRemaining: 100,
    };
  }

  clickMe() {
    console.log("don't click", this.props.name);
    this.setState({
      clicks: this.state.clicks + 1,
      totalRemaining: this.state.totalRemaining -1
    });
  }

  render() {
    return (
      <div>
        <h1 onClick={() => this.clickMe()}>
          Hi {this.props.name} <small>Click me</small>
        </h1>
        <span>{this.state.clicks} is the number of clicks. {this.state.totalRemaining}</span>
      </div>
    );
  }
}

export default Item;
