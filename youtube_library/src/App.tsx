import React from 'react';
import LibraryView from './view/LibraryView';
import MainPanelView from './view/MainPanelView';
import './css/App.css';
import AppController from './controller/AppController';

// Types des éléments du tableau vidéos sélectionné (videoSelected)
interface Video {
  title: string;
  id: string;
}

// Type du nom de l'utilisateur
interface AppProps {
  username: string;
}

// Types des variables d'état
interface AppState {
  showSearchForm: boolean;
  videoSelected: Video | null;
  userVideos: Video[];
  isLoading: boolean;
}

class App extends React.Component<AppProps, AppState> {
  controller: AppController;

  constructor(props: AppProps) {
    super(props);
    this.state = { 
      showSearchForm: true, 
      videoSelected: null,
      userVideos: [],
      isLoading: false
    };

    this.controller = new AppController(
      props.username,
      this.setLoading.bind(this),
      this.setUserVideos.bind(this)
    );

    this.displaySearchForm = this.displaySearchForm.bind(this);
    this.displayVideo = this.displayVideo.bind(this);
  }

  componentDidMount() {
    this.controller.fetchUserVideos();
  }

  setLoading(isLoading: boolean) {
    this.setState({ isLoading });
  }

  setUserVideos(userVideos: Video[]) {
    this.setState({ userVideos });
  }

  displaySearchForm(event: React.FormEvent<HTMLButtonElement>) {
    this.setState({ showSearchForm: true, videoSelected: null });
  }

  displayVideo(event: React.FormEvent<HTMLButtonElement>, video: Video) {
    this.setState({ showSearchForm: false, videoSelected: video });
  }

  render() {
    const { showSearchForm, videoSelected, userVideos, isLoading } = this.state;
    const { username } = this.props;

    return (
      <div className="app-container">
        <LibraryView 
          username={username} 
          userVideos={userVideos}
          isLoading={isLoading}
          displayFormOnClick={this.displaySearchForm} 
          libraryItemOnClick={this.displayVideo} 
          onDeleteVideo={this.controller.handleVideoDelete.bind(this.controller)} 
        />
        <MainPanelView 
          showSearchForm={showSearchForm} 
          videoSelected={videoSelected} 
          onAddVideo={this.controller.handleVideoAdd.bind(this.controller)}
        />
      </div>
    );
  }
}

export default App;
