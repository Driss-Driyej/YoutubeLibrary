import React from 'react';
import SearchFormView from './SearchFormView';
import VideoPlaybackView from './VideoPlaybackView';
import MainPanelController from '../controller/MainPanelController';

interface MainPanelViewProps {
  username: string;
}

class MainPanelView extends React.Component<MainPanelViewProps> {
    render() {
        const { username } = this.props;
        const userVideos = MainPanelController.getUserVideos(username);
        const firstVideoId = MainPanelController.getFirstVideoId(username);

        return (
            <>
                <SearchFormView />
                <VideoPlaybackView videoId={firstVideoId} />
            </>
        );
    }
}

export default MainPanelView;
