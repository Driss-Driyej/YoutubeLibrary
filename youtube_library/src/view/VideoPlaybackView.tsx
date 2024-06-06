import React from 'react';
import { checkVideoExists } from '../controller/videoPlaybackController';
import '../css/videoPlayback.css';

interface VideoPlaybackViewProps {
  videoId: string;
}

class VideoPlaybackView extends React.Component<VideoPlaybackViewProps> {
  componentDidMount() {
    this.fetchVideo();
  }

  componentDidUpdate(prevProps: VideoPlaybackViewProps) {
    if (this.props.videoId !== prevProps.videoId) {
      this.fetchVideo();
    }
  }

  fetchVideo = async () => {
    const { videoId } = this.props;
    const exists = await checkVideoExists(videoId);
    if (exists) {
      const videoIframe = document.getElementById('videoIframe') as HTMLIFrameElement;
      videoIframe.src = `https://www.youtube.com/embed/${videoId}`;
    } else {
      alert('Video not found');
    }
  };

  render() {
    return (
      <div>
        <div>

          <h1 className="video-title" >Titre de la video</h1>

        <iframe
          id="videoIframe"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        ></iframe>
        </div>
      </div>
    );
  }
}

export default VideoPlaybackView;
