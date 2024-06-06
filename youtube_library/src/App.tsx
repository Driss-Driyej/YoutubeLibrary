import React from 'react';
import LibraryView from './view/LibraryView';
import MainPanelView from './view/MainPanelView';
import AppModel from './model/AppModel';
import './css/App.css';

interface AppProps {
  username: string;
}

class App extends React.Component<AppProps> {
  render() {
    const { username } = this.props;
    const userVideos = AppModel.getUserVideos({username});
    return (
      <div className="app-container">
        <LibraryView username={username} userVideos={userVideos} />
        <MainPanelView username={username} userVideos={userVideos} />
      </div>
    );
  }
}

export default App;
