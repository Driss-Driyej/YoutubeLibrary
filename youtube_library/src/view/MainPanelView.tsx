import React from 'react';
import SearchFormView from './SearchFormView';
import VideoPlaybackView from './VideoPlaybackView';
import '../css/mainPanel.css';

interface Video {
  title: string;
  id: string;
}

interface MainPanelViewProps {
  showSearchForm: boolean;
  videoSelected: Video | null;
  onAddVideo: (video: Video) => void;  
}

// Composant qui affiche l'élément de droite de la vue 
class MainPanelView extends React.Component<MainPanelViewProps> {
  render() {
    const { showSearchForm, videoSelected, onAddVideo } = this.props;

    return (
      <div className="main-panel-container">
        {showSearchForm ? (
          <div className="main-panel-search-view">
            <SearchFormView onAddVideo={onAddVideo} />
          </div>
        ) : (
          <div className="main-panel-video">
            {videoSelected && (
              //Si une vidéo est selectionné on affiche la vidéo que l'utilisateur a selectionné
              <VideoPlaybackView videoId={videoSelected.id} videoTitle={videoSelected.title} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default MainPanelView;
