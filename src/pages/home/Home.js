import React, {
    Component

} from "react";
import "./Home.css";
import VideoElement from "../../components/video-element/VideoElement";
import IndexHeader from "../../components/index-header/IndexHeader";
import Footer from "../../components/footer/Footer";

class Home extends Component {


    render() {
        return (
            <div className="cuerpo">
                <div className="navBar">

                </div>
                <IndexHeader/>

                <div className="grid2x1">
                    <div className="singular">
                        <VideoElement
                            title="video 1"
                            classe="mainVideoBackground large"
                        />
                    </div>
                    <div className="grid2x2">
                        <VideoElement
                            title="video 2"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="video 3"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="video 4"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="video 5"
                            classe="mainVideoBackground large"
                        />
                    </div>
                </div>
                <div className="grid2x1">
                    <div className="grid2x2">
                        <VideoElement
                            title="video 6"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="video 7"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="video 8"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="video 9"
                            classe="mainVideoBackground large"
                        />
                    </div>
                    <div className="singular">
                        <VideoElement
                            title="video 10"
                            classe="mainVideoBackground large"
                        />
                    </div>
                </div>
                <div className="grid3x1">
                    <div className="grid1x2">
                        <VideoElement
                            title="video 11"
                            classe="mainVideoBackground large"
                        />
                        <VideoElement
                            title="video 12"
                            classe="mainVideoBackground large"
                        />
                    </div>
                    <div>
                        <VideoElement
                            title="video 12"
                            classe="mainVideoBackground large"
                        />
                    </div>
                    <div className="grid1x2">
                        <VideoElement
                            title="video 13"
                            classe="mainVideoBackground"
                        />
                        <VideoElement
                            title="video 14"
                            classe="mainVideoBackground"
                        />
                    </div>
                </div>
                <div className="grid2x1LargeLeft">
                    <div className="singular">
                        <VideoElement
                            title="video 15"
                            classe="mainVideoBackground"
                        />
                    </div>
                    <div className="grid1x2">
                        <VideoElement
                            title="video 16"
                            classe="mainVideoBackground"
                        />
                        <VideoElement
                            title="video 16"
                            classe="mainVideoBackground"
                        />
                    </div>
                </div>
                <div className="grid3x1">
                    <div className="grid1x2">
                        <VideoElement
                            title="video 17"
                            classe="mainVideoBackground"
                        />
                        <VideoElement
                            title="video 18"
                            classe="mainVideoBackground"
                        />
                    </div>
                    <div>
                        <VideoElement
                            title="video 19"
                            classe="mainVideoBackground"
                        />
                    </div>
                    <div className="grid1x2">
                        <VideoElement
                            title="video 20"
                            classe="mainVideoBackground"
                        />
                        <VideoElement
                            title="video 21"
                            classe="mainVideoBackground"
                        />
                    </div>
                </div>
                <div className="grid2x1">
                    <div className="grid2x2">
                        <VideoElement
                            title="video 22"
                            classe="mainVideoBackground"
                        />
                        <VideoElement
                            title="video 23"
                            classe="mainVideoBackground"
                        />
                        <VideoElement
                            title="video 24"
                            classe="mainVideoBackground"
                        />
                        <VideoElement
                            title="video 25"
                            classe="mainVideoBackground"
                        />
                    </div>
                    <div className="grid2x2">
                        <VideoElement
                            title="video 26"
                            classe="mainVideoBackground"
                        />
                        <VideoElement
                            title="video 27"
                            classe="mainVideoBackground"
                        />
                        <VideoElement
                            title="video 28"
                            classe="mainVideoBackground"
                        />
                        <VideoElement
                            title="video 29"
                            classe="mainVideoBackground"
                        />
                    </div>
                </div>
                <div className="grid2x1LargeRight">
                    <div className="grid1x2">
                        <VideoElement
                            title="video 30"
                            classe="mainVideoBackground"
                        />
                        <VideoElement
                            title="video 31"
                            classe="mainVideoBackground"
                        />
                    </div>
                    <div className="singular">
                        <VideoElement
                            title="video 32"
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