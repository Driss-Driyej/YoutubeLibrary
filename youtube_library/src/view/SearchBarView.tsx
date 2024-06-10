import React from 'react';
import '../css/mainPanel.css';
// Type du nom et des vidéos de l'utilisateur
interface SearchBarViewProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    numResults: number | string;
    onNumResultsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Composant qui affiche la barre de recherche ainsi que son bouton rechercher
class SearchBarView extends React.Component<SearchBarViewProps> {
    render() {
        return (
            <form className="search-bar-form" onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    {/* Barre de recherche */}
                    <label htmlFor="search-input">Search :</label>
                    <input id="search-input" type="text" placeholder="[ my text searched ]" value={this.props.value} onChange={this.props.onChange} aria-label="Search Video" />
                </div>
                <div className="form-group">
                    {/* Champ pour le nombre de résultats */}
                    <label htmlFor="num-results-input">Display n first results :</label>
                    <input id="num-results-input" type="number" placeholder="[n]" value={this.props.numResults} onChange={this.props.onNumResultsChange} min="1" max="5" aria-label="Number of results" />
                </div>
                {/* Bouton de soumission invisible */}
                <button type="submit" className="invisible-button"></button>
            </form>
        );
    }
}

export default SearchBarView;
