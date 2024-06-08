import React from 'react';
import LibraryView from './view/LibraryView';
import MainPanelView from './view/MainPanelView';
import UserModel from './model/UserModel';
import './css/App.css';

// types des éléments du tableau vidéos selectionné (videoSelected)
interface video {
  title: string;
  id: string;
}

// type du nom de l'utilisateur
interface AppProps {
  username: string;
}

// types des variables d'état
interface AppState {
  showSearchForm: boolean;
  videoSelected: video | null;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    // L'etat de showSearchForm permet de savoir si on affiche le formulaire de recherche, si il est sur false on affiche la vidéo selectionné (videoSelected).
    this.state = { showSearchForm: true, videoSelected: null};
    
    this.displaySearchForm = this.displaySearchForm.bind(this);
    this.displayVideo = this.displayVideo.bind(this);
  }

  // Affiche le formulaire de recherche. Appelée lorque l'utilisateur clique sur le bouton d'affichage du formulaire de recherche ([+]).
  displaySearchForm(event: React.FormEvent<HTMLButtonElement>) {
    this.setState({ showSearchForm: true, videoSelected: null });
  }

  // Affiche la vidéo que l'utilisateur a séléctionné dans sa librairie. Appelé lorsque l'utilisateur clique sur une des vidéo qu'il a dans sa librairie
  displayVideo(event: React.FormEvent<HTMLButtonElement>, video: video) {
    this.setState({ showSearchForm: false, videoSelected: video });
  }

  render() {
    const { showSearchForm, videoSelected } = this.state;
    const { username } = this.props;
    // Contient les vidéos que l'utilisateur a dans sa librairie
    const userVideos = UserModel.getUserVideos({ username });

    return (
      <div className="app-container">
        {/*Composant gauche de l'application. Il affiche : le nom de la librairie, le bouton d'affichage du formulaire, et les vidéos que l'utilisateur a dans sa librairie*/}
        <LibraryView username={username} userVideos={userVideos} displayFormOnClick={this.displaySearchForm} libraryItemOnClick={this.displayVideo}/>
        {/*Composant droit  de l'application. Il affiche (selon la valeur de la variable showSearchForm) : le formulaire de recherche ou la vidéo que l'utilisateur à selectionné (selon la variable videoSelected)*/}
        <MainPanelView showSearchForm={showSearchForm} videoSelected={videoSelected} />
      </div>
    );
  }
}

export default App;

/*1 - Tu dois encore gérer l'état pour : les résultats de cette recherche, bibliothèsque de vidéo(en gros si j'enlève une vidéo de la bd de l'utilisateur, pas besoins de rafraîchir pour qu'elle n'apparaisse plus ).*/
/*2 - Gère l'évènement de la barre de recherche et des boutons supprimer et ajouter un video*/