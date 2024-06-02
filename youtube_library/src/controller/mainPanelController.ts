import appModel from '../model/appModel';

class MainPanelController {
  static getUserVideos = (username: string) => {
    return appModel({ username });
  };

  static getFirstVideoId = (username: string) => {
    const userVideos = appModel({ username });
    return userVideos.length > 0 ? userVideos[0].id : "";
  };
}

export default MainPanelController;
