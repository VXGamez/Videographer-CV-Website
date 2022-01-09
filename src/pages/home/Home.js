import React, {
    Component

} from "react";
import "./Home.css";
import VideoElement from "../../components/video-element/VideoElement";
import IndexHeader from "../../components/index-header/IndexHeader";
import Footer from "../../components/footer/Footer";
import MenuBar from "../../components/menu-bar/MenuBar";


class Home extends Component {



    render() {
        return (
            <div className="cuerpo">
                <MenuBar />
                <IndexHeader/>

                <div id="iniciFotos" className="grid2x1">
                    <div className="singular">
                        <VideoElement
                            title="#1"
                            classe="mainVideoBackground large"
                        />
                    </div>
                    <div className="grid2x2">
                        <VideoElement
                            title="#2"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="#3"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="#4"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="#5"
                            classe="mainVideoBackground large"
                        />
                    </div>
                </div>
                <div className="grid2x1">
                    <div className="grid2x2">
                        <VideoElement
                            title="#6"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="#7"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="#8"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="#9"
                            classe="mainVideoBackground large"
                        />
                    </div>
                    <div className="singular">
                        <VideoElement
                            title="#10"
                            classe="mainVideoBackground large"
                        />
                    </div>
                </div>
                <div className="grid3x1">
                    <div className="grid1x2">
                        <VideoElement
                            title="#11"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="#12"
                            classe="mainVideoBackground large"
                        />
                    </div>
                    <div>
                        <VideoElement
                            title="#12"
                            classe="mainVideoBackground large"
                        />
                    </div>
                    <div className="grid1x2">
                        <VideoElement
                            title="#13"
                            classe="mainVideoBackground"
                        />
                        <VideoElement
                            title="#14"
                            classe="mainVideoBackground"
                        />
                    </div>
                </div>


                <Footer/>
            </div>
        );
    }
}

export default Home;