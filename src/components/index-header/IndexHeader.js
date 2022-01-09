import React, {
  Component

} from "react";
import "./IndexHeader.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

class IndexHeader extends Component{
  render() {

    return (
        <header className="showcase">
          <p>Foto/Video Gran</p>
            <div id="section05" className="scrollButton">
                <AnchorLink href='#iniciFotos'><span></span>Scroll</AnchorLink>
            </div>
        </header>
    );
  }
}

export default IndexHeader;
