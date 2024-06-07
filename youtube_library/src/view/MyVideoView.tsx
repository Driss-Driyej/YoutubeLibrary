import React from 'react';

interface MyVideoViewProps {
  title: string;
}

class MyVideoView extends React.Component<MyVideoViewProps> {
  render() {
    const { title } = this.props;
    return (
      <div>
        <button>X</button>
        <button>{title}</button>
      </div>
    );
  }
}

export default MyVideoView;
