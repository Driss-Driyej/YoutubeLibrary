import React from 'react';

// types des éléments du tableau video donné en props
interface video {
    title: string;
    id: string;
}

interface MyVideoViewProps {
  libraryItemOnClick: (event: React.FormEvent<HTMLButtonElement>, video: video) => void;
  video: video; // type du tableau video
}

// Composant qui affiche un bouton supprimer et un bouton pour selectionné la vidéo donnée en props
class MyVideoView extends React.Component<MyVideoViewProps> {
  render() {
    const { video } = this.props;

    return (
      <div>
        {/*Bouton qui permet de supprimer la vidéo*/}
        <button>X</button>
        {/*Bonton qui permet d'afficher la vidéo dans la partie droite de l'application à l'aide de la méthode displayVideo(event, video) de la class App*/}
        <button onClick={(event) => this.props.libraryItemOnClick(event, video)}>{video.title}</button>
      </div>
    );
  }
}

export default MyVideoView;
