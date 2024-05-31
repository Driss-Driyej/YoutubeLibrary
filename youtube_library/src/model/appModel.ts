import johnVideosData from '../json/John.json';
import markVideosData from '../json/Mark.json';

interface appModelProps {
    username: string;
}

const appModel = (props: appModelProps) => {
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

export default appModel;
