import * as fs from 'fs/promises';
import * as path from 'path';

interface Video {
  title: string;
  id: string;
}

interface UserLibrary {
  name: string;
  videos: Video[];
}

class LibraryModel {
  // Méthode pour obtenir le chemin du fichier JSON de la bibliothèque d'un utilisateur
  private static getLibraryPath(userName: string): string {
    return path.join(__dirname, '../data', `${userName}.lib.json`);
  }

  // Méthode pour lire le fichier JSON de la bibliothèque d'un utilisateur et le convertir en objet UserLibrary
  private static async readLibrary(userName: string): Promise<UserLibrary> {
    const libraryPath = LibraryModel.getLibraryPath(userName);
    const data = await fs.readFile(libraryPath, 'utf-8');
    return JSON.parse(data) as UserLibrary;
  }

  // Méthode pour écrire l'objet UserLibrary dans le fichier JSON de la bibliothèque d'un utilisateur
  private static async writeLibrary(userName: string, library: UserLibrary): Promise<void> {
    const libraryPath = LibraryModel.getLibraryPath(userName);
    await fs.writeFile(libraryPath, JSON.stringify(library, null, 2), 'utf-8');
  }

  // Méthode pour ajouter une vidéo à la bibliothèque d'un utilisateur
  public static async addVideo(userName: string, video: Video): Promise<void> {
    const library = await LibraryModel.readLibrary(userName);
    library.videos.push(video);
    await LibraryModel.writeLibrary(userName, library);
    console.log(`Video with ID: ${video.id} added to the library of user: ${library.name}`);
  }

  // Méthode pour supprimer une vidéo de la bibliothèque d'un utilisateur
  public static async removeVideo(userName: string, videoId: string): Promise<void> {
    const library = await LibraryModel.readLibrary(userName);
    const videoIndex = library.videos.findIndex(video => video.id === videoId);

    if (videoIndex !== -1) {
      console.log(`Removing video with ID: ${videoId} from user: ${userName}`);
      library.videos.splice(videoIndex, 1);
      await LibraryModel.writeLibrary(userName, library);
      console.log(`Video with ID: ${videoId} removed from the library of user: ${library.name}`);
    } else {
      console.log(`Video with ID: ${videoId} not found in the library of user: ${library.name}`);
    }
  }
}

export default LibraryModel;
