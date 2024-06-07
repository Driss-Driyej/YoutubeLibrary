import React from 'react';
import MyVideoView from './MyVideoView';
import '../css/library.css';

// types des éléments du tableau vidéos selectionné (videoSelected) et des éléments du tableaux vidéos (userVideos) de la base de données
interface video {
    title: string;
    id: string;
}

interface LibraryViewProps {
  username: string;
  userVideos: video[]; // type du tableau vidéos (userVideos) de la base de données
  displayFormOnClick: (event: React.FormEvent<HTMLButtonElement>) => void; // type de la fonction displayFormOnClick donnée en argument
  libraryItemOnClick: (event: React.FormEvent<HTMLButtonElement>, video: video) => void; // type de la fonction libraryItemOnClick donnée en argument
}

// Composant qui affiche l'élément de gauche de la vue 
class LibraryView extends React.Component<LibraryViewProps> {
  render() {
    const { username, userVideos} = this.props;
    
    return (
      <div className="library-container">
      <div className="library-header">
        {/*Titre qui affiche le nom de la librarie*/}      
        <h1>Library {username}</h1>
      </div>
        {/*Bouton qui permet d'afficher le formulaire de recherche à l'aide de la fonction donnée en props*/}
        <button className="display-form" onClick={this.props.displayFormOnClick}>[+]</button>
        <div className="library-items">
          {/*Affiche une liste de boutons pour chaque vidéo de l'utilisateur*/}
          {userVideos.map((video, index) => (
            <li key={video.id} className="library-item">
              {/*affiche un bouton supprimer et un bouton pour selectionné la vidéo donnée en props*/}
              <MyVideoView libraryItemOnClick={this.props.libraryItemOnClick} video={video} />
            </li>
          ))}

        </div>

      </div>
    );
  }
}

export default LibraryView;
