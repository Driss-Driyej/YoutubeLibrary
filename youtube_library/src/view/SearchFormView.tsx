import React from 'react';
import SearchBarView from './SearchBarView';
import SearchResultsView from './SearchResultsView';
import YoutubeApiModel from '../model/YoutubeApiModel';
import '../css/mainPanel.css';

interface Video {
  title: string;
  id: string;
}

interface SearchFormViewProps {
  onAddVideo: (video: Video) => void;
}

interface SearchFormViewState {
  value: string;
  results: any[];
  numResults: number | string;
}

// Composant qui affiche le formulaire de recherche
class SearchFormView extends React.Component<SearchFormViewProps, SearchFormViewState> {
  constructor(props: SearchFormViewProps) {
    super(props);
    this.state = { value: '', results: [], numResults: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNumResultsChange = this.handleNumResultsChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }
  // gère le nombre de résultat [1-5]
  handleNumResultsChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ numResults: event.target.value });
  }

  async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const results = await YoutubeApiModel.searchYouTube(this.state.value);
    const numResults = this.state.numResults ? parseInt(this.state.numResults.toString(), 10) : 5;
    this.setState({ results: results.slice(0, numResults) });
  }

  render() {
    const { value, results, numResults } = this.state;
    const { onAddVideo } = this.props;
    return (
      <div className="search-form-container">
        <SearchBarView 
          value={value} 
          onChange={this.handleChange} 
          onSubmit={this.handleSubmit} 
          numResults={numResults} 
          onNumResultsChange={this.handleNumResultsChange} 
        />
          <SearchResultsView results={results} onAddVideo={onAddVideo} />
      </div>
    );
  }
}

export default SearchFormView;
