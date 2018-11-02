import React, { Component } from "react";
import { Badge, Button } from "reactstrap";

class Counter extends Component {
  state = {
    count: 1,
    tags: []
  };

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
        <Button>Increment +</Button>
        <ul>{this.renderList()}</ul>


      </div>
    );
  }
}

export default Counter;
