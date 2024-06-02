import React from 'react';
import MyVideoView from './MyVideoView';
import LibraryController from '../controller/LibraryController';
import '../css/style.css';

interface LibraryViewProps {
  username: string;
}

class LibraryView extends React.Component<LibraryViewProps> {
  render() {
    const { username } = this.props;
    const userVideos = LibraryController.getUserVideos(username);
    return (
      <div className="Library">

        <h1>Library {username}</h1>

        <button className="DisplayForm">[+]</button>
        <div className="library-view-container">

          {userVideos.map((video, index) => (
            <div className="library-view-item">
              <MyVideoView title={video.title} />
            </div>
          ))}

        </div>

      </div>
    );
  }
}

export default LibraryView;
