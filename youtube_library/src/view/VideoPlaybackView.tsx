import React from 'react';
import videoPlaybackModel from '../model/videoPlaybackModel';
import '../css/videoPlayback.css';

// type de l'id de la video à visionner
interface VideoPlaybackViewProps {
  videoId: string;
  videoTitle: string;
}

interface VideoPlaybackViewState {
  videoExists: boolean;
}

class VideoPlaybackView extends React.Component<VideoPlaybackViewProps, VideoPlaybackViewState> {
  constructor(props: VideoPlaybackViewProps) {
    super(props);
    this.state = {
      videoExists: false,
    };
  }

  componentDidMount() {
    this.updateVideoExists();
  }

  componentDidUpdate(prevProps: VideoPlaybackViewProps) {
    if (this.props.videoId !== prevProps.videoId) {
      this.updateVideoExists();
    }
  }

  // utilise checkVideoExists pour donner sa valeur renvoyé (true : vidéo existe, false : vidéo n'existe pas) à la variable videoExists
  updateVideoExists = async () => {
    const exists = await videoPlaybackModel.checkVideoExists(this.props.videoId);
    this.setState({ videoExists: exists });
  };

  render() {
    const { videoExists } = this.state;
    return (
      <div>

        {videoExists && <h1 className="video-title">{this.props.videoTitle}</h1>}
        {videoExists ? (
          <iframe
            id="video-iframe"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
            src={`https://www.youtube.com/embed/${this.props.videoId}`}
          ></iframe>
        ) : (
          <p>Vidéo non trouvée</p>
        )}
      </div>
    );
  }
}

export default VideoPlaybackView;
