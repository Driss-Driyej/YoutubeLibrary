import React from 'react';
import MyVideoView from './MyVideoView';
import '../css/library.css';

interface videos {
    title: string;
    id: string;
}

interface LibraryViewProps {
  username: string;
  userVideos: videos[];
}

class LibraryView extends React.Component<LibraryViewProps> {
  render() {
    const { username } = this.props;
    const { userVideos } = this.props;
    return (
      <div className="library-container">
      <div className="library-header">
        <h1>Library {username}</h1>
      </div>
        <button className="display-form">[+]</button>
        <div className="library-items">

          {userVideos.map((video, index) => (
            <div className="library-item">
              <MyVideoView title={video.title} />
            </div>
          ))}

        </div>

      </div>
    );
  }
}

export default LibraryView;
