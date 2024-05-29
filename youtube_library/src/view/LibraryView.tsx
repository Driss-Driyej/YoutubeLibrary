import React from 'react';
import MyVideo from './MyVideo';
import libraryModel from '../model/libraryModel';

interface LibraryViewProps {
  username: string;
}

class LibraryView extends React.Component<LibraryViewProps> {
  render() {
    const {username} = this.props;
    const userVideos = libraryModel({username});
    return (
    <div className="Library">

    <h1>Library {username}</h1>
    <button className="DisplayForm">[+]</button>
{/*

        <ul>
          {userVideos.videos.map((video, index) => (
            <li key={index}>{video.title}</li>
          ))}
        </ul>
      */}

    </div>
      )
  }

}

export default LibraryView;