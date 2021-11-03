import React, {
    Component

} from "react";
import "./VideoElement.css";
import HoverVideoPlayer from 'react-hover-video-player';
import videoProva from "../../assets/video/prova.mp4"
import fotoProva from "../../assets/image/nicolas.jpg"

class VideoElement extends Component {


    render() {
        return (
            <div className={this.props.classe}>
                <p>{this.props.title}</p>
                <HoverVideoPlayer
                    videoSrc={videoProva}
                    className="videoElement"
                    restartOnPaused
                    muted={true}
                    loop={true}
                    overlayTransitionDuration={500}
                    pausedOverlay={
                        <img
                            src={fotoProva}
                            alt=""
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    }
                />
            </div>
        );
    }
}

export default VideoElement;