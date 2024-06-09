import React from 'react';
import '../css/searchResults.css';

interface SearchResultsViewProps {
    results: any[];
}

class SearchResultsView extends React.Component<SearchResultsViewProps> {
    render() {
        const { results } = this.props;
        return (
            <div className="results-container">
                {results.map((result, index) => (
                    <div key={result.id.videoId} className="result-item">
                        <img src={result.snippet.thumbnails.default.url} alt={result.snippet.title} />
                        <h3>{`${index + 1}: ${result.snippet.title}`}</h3>
                        <button>+</button>
                    </div>
                ))}
            </div>
        );
    }
}

export default SearchResultsView;
