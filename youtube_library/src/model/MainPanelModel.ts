import appModel from '../model/AppModel';

// types des éléments du tableau vidéos de la base de données
interface Video {
    title: string;
    id: string;
}

class MainPanelModel {
  // méthode temporaire qui sert à récupérer la première vidéo dans la librairie de l'utilisateur
  static getFirstVideo = (userVideos: Video[]): { id: string; title: string } | null => {
    if (userVideos.length > 0) {
      const firstVideo = userVideos[0];
      return { id: firstVideo.id, title: firstVideo.title };
    } else {
      return null;
    }
  };
}

export default MainPanelModel;
