import React from 'react';
import LibraryView from './view/LibraryView';

interface AppProps {
  username: string;
}

class App extends React.Component<AppProps> {
render() {
  const { username } = this.props;
  return (
    <div>
      <LibraryView username={username}/>
    </div>
    )
}

}

export default App;