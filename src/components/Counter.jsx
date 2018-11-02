import React, { Component } from "react";
import { Badge, Button } from "reactstrap";

class Counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 1,
      tags: []
    };

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)

  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeColors() {
    let badgeColor = "badge m-2 badge-";
    badgeColor += this.state.count === 0 ? "warning" : "success";
    return badgeColor;
  }

  renderList() {
    if(this.state.tags.length === 0) return <p>"insert some stuff bro"</p>

    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
  }

  render() {
    return (
      <div>
        <span>
          <Badge className={this.getBadgeColors()}>{this.formatCount()}</Badge>
        </span>
        <Button onClick={this.handleIncrement}>Increment +</Button>
        <Button onClick={this.handleDecrement}>Decrement +</Button>
        <ul>{this.renderList()}</ul>


      </div>
    );
  }
}

export default Counter;
