import React from 'react';

interface MyVideoProps {
    title: string;
}

class MyVideoView extends React.Component<MyVideoProps> {
    render() {
        const { title } = this.props;

        return (
            <button>[x] {title}</button>
        );
    }
}

export default MyVideoView;
