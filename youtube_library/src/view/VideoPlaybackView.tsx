import React from 'react';
import { checkVideoExists } from '../controller/videoPlaybackController';

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
          <iframe
            id="videoIframe"
            width="560"
            height="315"
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
