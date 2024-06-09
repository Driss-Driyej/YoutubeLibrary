import React from 'react';
import SearchBarView from './SearchBarView';
import SearchResultsView from './SearchResultsView';
import YoutubeApiModel from '../model/YoutubeApiModel';
import '../css/searchForm.css';

// Type de la variable d'état
interface SearchFormViewState {
    value: string;
    results: any[];
    numResults: number | string;
}

// Composant qui affiche le formulaire de recherche
class SearchFormView extends React.Component<{}, SearchFormViewState> {
    constructor(props: {}) {
        super(props);
        this.state = { value: '', results: [], numResults: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNumResultsChange = this.handleNumResultsChange.bind(this);
    }

    // Met à jour la variable d'état pour la recherche
    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.target.value });
    }

    // Met à jour la variable d'état pour le nombre de résultats
    handleNumResultsChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ numResults: event.target.value });
    }

    // Applique la recherche de l'utilisateur en utilisant la fonction searchYouTube du model YoutubeApiModel
    async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const results = await YoutubeApiModel.searchYouTube(this.state.value); // donne en argument la valeur actuelle de la barre de recherche
        const numResults = this.state.numResults ? parseInt(this.state.numResults.toString(), 10) : 5; // Par défaut 5 si pas de valeur
        this.setState({ results: results.slice(0, numResults) }); // utilise la méthode slice pour prendre la partie du tableaux qu'on veut. Donc, de l'élément d'index 0 à numResults
    }

    render() {
        const { value, results, numResults} = this.state;
        return (
            <div className="search-form-container">
                {/* Affiche la barre de recherche avec son bouton rechercher */}
                <SearchBarView value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit} numResults={this.state.numResults} onNumResultsChange={this.handleNumResultsChange} />
                {/* Affiche les résultats de la recherche */}
                <SearchResultsView results={this.state.results} />
            </div>
        );
    }
}

export default SearchFormView;
