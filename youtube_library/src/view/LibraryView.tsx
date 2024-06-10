import React from 'react';
import MyVideoView from './MyVideoView';
import '../css/library.css';

// Types des éléments du tableau vidéos sélectionné (videoSelected) et des éléments du tableau vidéos (userVideos) de la base de données
interface Video {
  title: string;
  id: string;
}

interface LibraryViewProps {
  username: string;
  displayFormOnClick: (event: React.FormEvent<HTMLButtonElement>) => void; // Type de la fonction displayFormOnClick donnée en argument
  libraryItemOnClick: (event: React.FormEvent<HTMLButtonElement>, video: Video) => void; // Type de la fonction libraryItemOnClick donnée en argument
}

interface LibraryViewState {
  userVideos: Video[];
  isLoading: boolean;
}

// Composant qui affiche l'élément de gauche de la vue 
class LibraryView extends React.Component<LibraryViewProps, LibraryViewState> {
  constructor(props: LibraryViewProps) {
    super(props);
    this.state = { userVideos: [], isLoading: false };

    this.handleVideoDelete = this.handleVideoDelete.bind(this);
  }

  componentDidMount() {
    this.fetchUserVideos();
  }

  async fetchUserVideos() {
    const { username } = this.props;
    const response = await fetch(`http://localhost:3001/api/user/${username}/videos`);
    if (response.ok) {
      const userVideos = await response.json();
      this.setState({ userVideos });
    }
  }

  async handleVideoDelete(videoId: string) {
    const { username } = this.props;
    this.setState({ isLoading: true });

    const response = await fetch(`http://localhost:3001/api/library/${username}/videos/${videoId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      await this.fetchUserVideos(); // Rafraîchir la liste des vidéos après la suppression
    }

    this.setState({ isLoading: false });
  }

  render() {
    const { username, displayFormOnClick, libraryItemOnClick } = this.props;
    const { userVideos, isLoading } = this.state;

    return (
      <div className="library-container">
        <div className="library-header">
          <h1>Library {username}</h1>
        </div>
        <button className="display-form" onClick={displayFormOnClick}>[+]</button>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="library-items">
            {userVideos.map((video) => (
              <li key={video.id} className="library-item">
                <MyVideoView 
                  libraryItemOnClick={libraryItemOnClick} 
                  video={video} 
                  onDelete={() => this.handleVideoDelete(video.id)} 
                />
              </li>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default LibraryView;
