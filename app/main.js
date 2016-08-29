import './assets/styles/bootstrap.min.css!';
import React, {Component} from "react";
import { Button } from "react-bootstrap";
import ReactDOM from "react-dom";

const styles = {
    container: {
      textAlign: "center"
    },
    button: {
      marginTop: "100px"
    }
};

class App extends Component {
    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        alert("The unconventional Hello World!");
    }
    render () {
      return (
      <div style = {styles.container}>
        <Button bsStyle="primary" style={styles.button} onClick={() => this.handleClick()}>Surprise Me</Button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
