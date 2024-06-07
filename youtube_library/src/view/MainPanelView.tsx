import React from 'react';
import SearchFormView from './SearchFormView';
import VideoPlaybackView from './VideoPlaybackView';
import MainPanelModel from '../model/MainPanelModel';
import '../css/mainPanel.css';

// types des éléments du tableaux vidéos de la base de données
interface videos {
    title: string;
    id: string;
}

// type du nom et des videos de l'utilisateur
interface MainPanelViewProps {
  username: string;
  userVideos: videos[];
  showSearchForm: boolean;
}

class MainPanelView extends React.Component<MainPanelViewProps> {
    render() {
        const { username, userVideos, showSearchForm } = this.props;
        // première vidéo qui apparaît dans la librarie de l'utilisateur
        const getFirstVideo = MainPanelModel.getFirstVideo(userVideos);

        return (
            <div className="main-panel-container">
                {showSearchForm ? (
                    <div className="main-panel-view">
                        <SearchFormView />
                    </div>
                ) : (
                    <div className="main-panel-view">
                        {getFirstVideo ? (
                            // Affiche la vidéo que l'utilisateur veut visionner si getFirstVideo n'est pas null
                            <VideoPlaybackView videoId={getFirstVideo.id} videoTitle={getFirstVideo.title}/>
                        ) : (
                            // Affiche un message d'erreur si getFirstVideo est null
                            <div>Aucune vidéo trouvée</div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default MainPanelView;
