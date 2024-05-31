import React from 'react';
import LibraryView from './view/LibraryView';
import MainPanelView from './view/MainPanelView';

interface AppProps {
  username: string;
}

class App extends React.Component<AppProps> {
  render() {
    const { username } = this.props;

    return (
      <div>
        <LibraryView username={username} />
        <MainPanelView username={username}/>
      </div>
    );
  }
}

export default App;
