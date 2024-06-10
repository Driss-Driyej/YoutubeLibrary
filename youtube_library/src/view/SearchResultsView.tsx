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

interface SearchResultsViewState {
  titles: { [key: string]: string };
}

class SearchResultsView extends React.Component<SearchResultsViewProps, SearchResultsViewState> {
  constructor(props: SearchResultsViewProps) {
    super(props);
    this.state = {
      titles: {}
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
  }
  // Gère la modification du titre
  handleTitleChange(event: React.ChangeEvent<HTMLInputElement>, videoId: string) {
    this.setState({ titles: {...this.state.titles,[videoId]: event.target.value} });
  }

  render() {
    const { results, onAddVideo } = this.props;
    const { titles } = this.state;

    return (
      <div className="results-container">
        {results.map((result) => (
          <div key={result.id.videoId} className="result-item">
            <img src={result.snippet.thumbnails.default.url} alt={result.snippet.title} />
            <h3>{`${result.snippet.title}`}</h3>
            <input
              type="text"
              placeholder="Title :"
              value={titles[result.id.videoId] || ''}
              onChange={(event) => this.handleTitleChange(event, result.id.videoId)}
            />
            <button onClick={() => onAddVideo({ title: titles[result.id.videoId] || result.snippet.title, id: result.id.videoId })}>+</button>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResultsView;
