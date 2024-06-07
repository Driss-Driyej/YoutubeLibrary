import React from 'react';
import SearchBarView from './SearchBarView';


// type de la variable d'état
interface SearchFormViewState {
    value: string;
}

// Composant qui affiche le formulaire de recherche
class SearchFormView extends React.Component<{}, SearchFormViewState> {
    constructor(props: {}) {
        super(props);
        this.state = {value: ''}; // variable qui contient le texte tapé par l'utilisateur dans la barre de recherche (SearchBarView)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Met à jour la variable d'état. Appelée lorsque l'utisateur tape sur une touche dans la barre de recherche
    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({value: event.target.value});
    }

    // Applique la recherche de l'utilisateur. Appelé lorsque l'utilisateur clique sur le bouton [Search]
    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        alert('La recherche a été soumise : ' + this.state.value);
        event.preventDefault();
    }

    render() {

        return (
            // Affiche la barre de recherche avec son bouton rechercher
            <SearchBarView value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit} />
            // Affiche les résultats de la recherche
            // <SearchResultsView />
        );
    }
}

export default SearchFormView;
