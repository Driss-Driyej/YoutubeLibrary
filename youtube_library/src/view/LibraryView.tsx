import React from 'react';
import MyVideoView from './MyVideoView';
import '../css/library.css';

// types des éléments du tableaux vidéos de la base de données
interface videos {
    title: string;
    id: string;
}

// type du nom et des videos de l'utilisateur
interface LibraryViewProps {
  username: string;
  userVideos: videos[];
}

// Composant qui affiche l'élément de gauche de la vue 
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
          {/*affiche un bouton pour chaque vidéo de l'utilisateur*/}
          {userVideos.map((video, index) => (
            <div className="library-item">
              {/*affiche bouton pour un titre de vidéo donné*/}
              <MyVideoView title={video.title} />
            </div>
          ))}

        </div>

      </div>
    );
  }
}

export default LibraryView;
