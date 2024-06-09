import React from 'react';
import SearchFormView from './SearchFormView';
import VideoPlaybackView from './VideoPlaybackView';
import '../css/mainPanel.css';

// types des éléments du tableaux vidéos (userVideos) de la base de données
interface video {
    title: string;
    id: string;
}

interface MainPanelViewProps {
  showSearchForm: boolean; // type de la variable qui permet (ou non) d'afficher le formulaire de recherche
  videoSelected: video | null; // type de la variable qui contient la vidéo selectionné par l'utilisateur
}

// Composant qui affiche l'élément de droite de la vue 
class MainPanelView extends React.Component<MainPanelViewProps> {
    render() {
        const {showSearchForm, videoSelected } = this.props;

        return (
            <div className="main-panel-container">
                {showSearchForm ? (
                    // Si la variable showSearchForm est à true, alors on affiche le formulaire de recherche
                    <div className="main-panel-search-view">
                        <SearchFormView />
                    </div>
                ) : (
                    // Si la variable showSearchForm est à false, alors on affiche la vidéo selectionné par l'utilisateur
                    <div className="main-panel-video">
                        {videoSelected && (
                            // Si la variable videoSelected n'est pas null, alors on affiche la vidéo que l'utilisateur veut visionner en donnant l'id et le titre de la vidéo selectionné en props 
                            <VideoPlaybackView videoId={videoSelected.id} videoTitle={videoSelected.title}/>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default MainPanelView;
