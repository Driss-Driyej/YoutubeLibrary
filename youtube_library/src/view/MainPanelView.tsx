import React from 'react';
import SearchFormView from './SearchFormView';
import VideoPlaybackView from './VideoPlaybackView';
import appModel from '../model/appModel';

interface MainPanelViewProps {
  username: string;
}

class MainPanelView extends React.Component<MainPanelViewProps> {
    render() {
        const { username } = this.props;
        const userVideos = appModel({username});
        const firstVideoId = userVideos.length > 0 ? userVideos[0].id : "";

        return (
            <>
                <SearchFormView />
                <VideoPlaybackView videoId={firstVideoId} />
            </>
        );
    }
}

export default MainPanelView;
