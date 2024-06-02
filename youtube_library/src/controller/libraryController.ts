import appModel from '../model/appModel';

class LibraryController {
static getUserVideos = (username: string) => {
  return appModel({ username });
};

}


export default LibraryController;