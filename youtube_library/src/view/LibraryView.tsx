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
  userVideos: Video[];
  isLoading: boolean;
  displayFormOnClick: (event: React.FormEvent<HTMLButtonElement>) => void; // Type de la fonction displayFormOnClick donnée en argument
  libraryItemOnClick: (event: React.FormEvent<HTMLButtonElement>, video: Video) => void; // Type de la fonction libraryItemOnClick donnée en argument
  onDeleteVideo: (videoId: string) => void; // Type de la fonction de suppression de vidéo
}

// Composant qui affiche l'élément de gauche de la vue 
class LibraryView extends React.Component<LibraryViewProps> {
  render() {
    const { username, userVideos, isLoading, displayFormOnClick, libraryItemOnClick, onDeleteVideo } = this.props;

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
                  onDelete={() => onDeleteVideo(video.id)} 
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
