import React from 'react';
import LibraryView from './view/LibraryView';
import MainPanelView from './view/MainPanelView';
import AppModel from './model/AppModel';
import './css/App.css';

interface AppProps {
  username: string;
}

interface AppState {
  showSearchForm : boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { showSearchForm: false };
    this.handleMainPanelChange = this.handleMainPanelChange.bind(this);
  }

  // gère l'état de MainPanel. Si c'est true sa affiche le formulaire de recherche, si non, sa affiche un vidéo
  handleMainPanelChange(showSearchForm : boolean) {
    this.setState({ showSearchForm : false });
  }

  render() {
    const { showSearchForm } = this.state;
    const { username } = this.props;
    const userVideos = AppModel.getUserVideos({ username });

    return (
      <div className="app-container">
        <LibraryView username={username} userVideos={userVideos} />
        <MainPanelView username={username} userVideos={userVideos} showSearchForm={showSearchForm } />
      </div>
    );
  }
}

export default App;

/*1 - Tu dois encore gérer l'état pour : le texte tapé sur la barre de recherche, les résultats de cette recherche, bibliothèsque de vidéo(en gros si j'enlève une vidéo de la bd de l'utilisateur, pas besoins de rafraîchir pour qu'elle n'apparaisse plus ).*/
/*2 - Gère l'évènement du bouton [+] pour que sa change la variable showSearchForm en false et que sa mette la video à afficher dans l'état aussi*/
/*3 - Gère l'évènement de la barre de recherche et des boutons supprimer et ajouter un video*/