import johnVideosData from '../json/John.json';
import markVideosData from '../json/Mark.json';

// type du nom de l'utilisateur
interface appModelProps {
    username: string;
}

class AppModel {
// fonction qui permet de récupérer les vidéos (avec leurs titre et leurs id) qui sont dans la librairie de l'utilisateur
static getUserVideos = (props: appModelProps) => {
    const { username } = props;
    const johnVideos = johnVideosData.videos; // contient les videos de john
    const markVideos = markVideosData.videos; // contient les videos de mark

    if (username === "john") {
        // Si c'est john qui est connecté, alors on retourne ses videos
        return johnVideos;
    } 

    if (username === "mark") {
        // Si c'est mark qui est connecté, alors on retourne ses videos
        return markVideos;
    }

    // Si le username ne correspond ni à "john" ni à "mark" on retourne un tableau vide
    return [];
}

}
export default AppModel;
