import React from 'react';
import SearchFormView from './SearchFormView';
import VideoPlaybackView from './VideoPlaybackView';
import MainPanelModel from '../model/MainPanelModel';
import '../css/mainPanel.css';

interface videos {
    title: string;
    id: string;
}

interface MainPanelViewProps {
  username: string;
  userVideos: videos[];
}

class MainPanelView extends React.Component<MainPanelViewProps> {
    render() {
        const { username } = this.props;
        const { userVideos } = this.props;
        const firstVideoId = MainPanelModel.getFirstVideoId(userVideos);

        return (
            <div className="main-panel-container">
               {/*<SearchFormView />*/}
            <div className="video-playback">
                <VideoPlaybackView videoId={firstVideoId} />
            </div>
            </div>
        );
    }
}

export default MainPanelView;
