import React from 'react';

// type du nom et des videos de l'utilisateur
interface SearchBarViewProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

// Composant qui affiche la barre de recherche ainsi que son bouton rechercher
class SearchBarView extends React.Component<SearchBarViewProps> {
    render() {

        return (
            <form onSubmit={this.props.onSubmit}>
                {/*Barre de recherche*/}
                <input className="search-bar" type="text" placeholder="Search Video" value={this.props.value} onChange={this.props.onChange}/>
                {/*Bouton pour appliquer la recherche*/}
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchBarView;
