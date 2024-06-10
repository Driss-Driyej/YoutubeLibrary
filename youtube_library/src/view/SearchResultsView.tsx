import React from 'react';
import '../css/mainPanel.css';

interface Video {
  title: string;
  id: string;
}

interface SearchResultsViewProps {
  results: any[];
  onAddVideo: (video: Video) => void;
}

class SearchResultsView extends React.Component<SearchResultsViewProps> {
  render() {
    const { results, onAddVideo } = this.props;
    return (
      <div className="results-container">
        {results.map((result, index) => (
          <div key={result.id.videoId} className="result-item">
            <img src={result.snippet.thumbnails.default.url} alt={result.snippet.title} />
            <h3>{`${index + 1}: ${result.snippet.title}`}</h3>
            <button onClick={() => onAddVideo({ title: result.snippet.title, id: result.id.videoId })}>+</button>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResultsView;
