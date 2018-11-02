import React, { Component } from "react";
import { Badge, Button } from "reactstrap";

class Counter extends Component {
  state = {
    count: 1
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <div>
        <span>
          <Badge color="danger">{this.formatCount()}</Badge>
        </span>
        <Button>Increment +</Button>
      </div>
    );
  }
}

export default Counter;
