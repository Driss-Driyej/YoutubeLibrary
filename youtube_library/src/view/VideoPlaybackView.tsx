import React from 'react';
import YoutubeApiModel from '../model/YoutubeApiModel';
import '../css/mainPanel.css';

interface VideoPlaybackViewProps {
  videoId: string; // type de l'id de la video à visionner
  videoTitle: string; // type du titre de la vidéo à visionner
}

// type de la variable d'état
interface VideoPlaybackViewState {
  videoExists: boolean;
}

// Composant qui affiche la vidéo que l'utilisateur a selectionné
class VideoPlaybackView extends React.Component<VideoPlaybackViewProps, VideoPlaybackViewState> {
  constructor(props: VideoPlaybackViewProps) {
    super(props);
    this.state = {videoExists: false}; // variable qui permet de vérifier si la vidéo existe. Pour éviter tout problème on part du principe qu'elle n'existe pas tant que le contraire n'a pas été vérifié
  }

  // Méthode appelée immédiatement à la création du composant, permettant de vérifier si la vidéo existe à l'aide de la méthode updateVideoExists.
  componentDidMount() {
    this.updateVideoExists();
  }
  
  // Méthode appelée après lorsque le composant a été mis à jour, vérifie si videoId est différent de l'ancien. Si oui, vérifie si la vidéo existe à l'aide de la méthode updateVideoExists.
  componentDidUpdate(prevProps: VideoPlaybackViewProps) {
    if (this.props.videoId !== prevProps.videoId) {
      this.updateVideoExists();
    }
  }

  // utilise la méthode checkVideoExists du model pour donner sa valeur de retour (true : vidéo existe, false : vidéo n'existe pas) à la variable videoExists
  updateVideoExists = async () => {
    const exists = await YoutubeApiModel.checkVideoExists(this.props.videoId);
    this.setState({ videoExists: exists });
  };

  render() {
    const { videoExists } = this.state;

    return (
      <div>
        {/*Si la vidéo existe, on affiche le titre de la vidéo avec le props videoTitle donné*/}
        {videoExists && <h1 className="video-title">{this.props.videoTitle}</h1>}
        {videoExists ? (
          // Si la vidéo existe, alors on affiche la vidéo
          <iframe
            id="video-iframe" // Identifiant de l'iframe
            frameBorder="0" // Supprime la bordure de l'iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Autorise certaines fonctionnalités pour la vidéo
            allowFullScreen // Autorise le mode plein écran
            title="YouTube video" // Titre de l'iframe
            src={`https://www.youtube.com/embed/${this.props.videoId}`} // URL de la vidéo YouTube à intégrer en utilisant l'id de la video passé en props (videoId)
         ></iframe>

        ) : (
          // Si ma vidéo n'existe pas, alors on affiche le message d'erreur suivant
          <p>This video does not exist.</p>
        )}
      </div>
    );
  }
}

export default VideoPlaybackView;
