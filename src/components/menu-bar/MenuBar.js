import React, {
  Component

} from "react";
import "./MenuBar.css";


class MenuBar extends Component{
  render() {
    return (
        <div className="menuBar">
            <p>Bruno Xirau Guardans</p>
            <div className="urls">
                <a href="#test">Home</a>
                <a href="#test">About Me</a>
                <a href="#test">Experience</a>
                <a href="#test">Contact</a>
            </div>
        </div>
    );
  }
}

export default MenuBar;
