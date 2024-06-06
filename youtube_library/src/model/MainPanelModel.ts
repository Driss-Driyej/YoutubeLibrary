import appModel from '../model/AppModel';

interface videos {
    title: string;
    id: string;
}

class MainPanelModel {
  // méthode temporaire qui sert à récupérer la première videos dans la librarie de l'utilisateur
  static getFirstVideoId = (userVideos: videos[]) => {
    const userVideosModel = userVideos;
    return userVideosModel.length > 0 ? userVideosModel[0].id : "";
  };
}

export default MainPanelModel;