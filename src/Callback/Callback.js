import React, { Component } from 'react';


class Callback extends Component {
  render() {
    const style = {"width":200}

    return (
      <div style={style}>
        <img src="./loading.svg" alt="loading"/>
      </div>
    );
  }
}

export default Callback;
