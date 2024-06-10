import React from 'react';
import '../css/library.css';

// Types des éléments du tableau video donné en props
interface Video {
  title: string;
  id: string;
}

interface MyVideoViewProps {
  libraryItemOnClick: (event: React.FormEvent<HTMLButtonElement>, video: Video) => void;
  video: Video; // Type du tableau video
  onDelete: () => void;
}

// Composant qui affiche un bouton supprimer et un bouton pour sélectionner la vidéo donnée en props
class MyVideoView extends React.Component<MyVideoViewProps> {
  render() {
    const { video, onDelete, libraryItemOnClick } = this.props;

    return (
      <div className="my-video-container">
        {/* Bouton qui permet de supprimer la vidéo */}
        <button className="my-video-button-supp" onClick={onDelete}>X</button>
        {/* Bouton qui permet d'afficher la vidéo dans la partie droite de l'application à l'aide de la méthode displayVideo(event, video) de la classe App */}
        <button className="my-video-button" onClick={(event) => libraryItemOnClick(event, video)}>{video.title}</button>
      </div>
    );
  }
}

export default MyVideoView;
