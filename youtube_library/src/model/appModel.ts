import johnVideosData from '../json/John.json';
import markVideosData from '../json/Mark.json';

// type du nom de l'utilisateur
interface appModelProps {
    username: string;
}

class AppModel {
// fonction qui permet de récupérer les vidéos (avec leurs titre et leurs id) qui sont dans la librarie de l'utilisateur
static getUserVideos = (props: appModelProps) => {
    const { username } = props;
    const johnVideos = johnVideosData.videos;
    const markVideos = markVideosData.videos;

    if (username === "john") {
        return johnVideos;
    } 

    if (username === "mark") {
        return markVideos;
    }

    // Si le username ne correspond ni à "john" ni à "mark" on retourne un tableau vide
    return [];
}

}
export default AppModel;
