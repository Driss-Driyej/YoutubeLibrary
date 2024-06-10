import johnVideosData from '../data/John.lib.json';
import markVideosData from '../data/Mark.lib.json';

// Type pour les vidéos
interface Video {
  title: string;
  id: string;
}

// Type des propriétés de l'utilisateur
interface UserModelProps {
  username: string;
}

class UserModel {
  // Méthode qui permet de récupérer les vidéos (avec leurs titre et leurs id) qui sont dans la librairie de l'utilisateur
  public static getUserVideos = (props: UserModelProps): Video[] => {
    const { username } = props;
    const johnVideos = johnVideosData.videos; // contient les vidéos de John
    const markVideos = markVideosData.videos; // contient les vidéos de Mark

    if (username === "john") {
      // Si c'est John qui est connecté, alors on retourne ses vidéos
      return johnVideos;
    }

    if (username === "mark") {
      // Si c'est Mark qui est connecté, alors on retourne ses vidéos
      return markVideos;
    }

    // Si le username ne correspond ni à "john" ni à "mark" on retourne un tableau vide
    return [];
  }
}

export default UserModel;
