import React, { Component } from "react";

import FieldBanner from "./FieldBanner"
class FieldPage extends Component {
  render() {
    let {match } = this.props
    let title = match.params.ward
    return (
      <div>
        <FieldBanner title={title}/>
      </div>
    );
  }
}

export default FieldPage;
