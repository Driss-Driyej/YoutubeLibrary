const API_KEY = 'AIzaSyCZw3WaVC2dETs93HWc9pAg1wu316tNnzg'; // clé API youtube
const BASE_URL = 'https://www.googleapis.com/youtube/v3'; // base de l'url pour accéder à l'API youtube

// type des élément du tableaux reçu en réponse de l'API youtube
interface VideoResponse {
  items: Array<{
    id: string;
  }>;
}

// Regroupe les méthodes qui envoient une requête à l'API YouTube 
class YoutubeApiModel {
  //vérifie si une vidéo existe, et retourne un booléen en conséquence
  static checkVideoExists = async (videoId: string): Promise<boolean> => {
    try {
      const response = await fetch(`${BASE_URL}/videos?part=id&id=${videoId}&key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: VideoResponse = await response.json();
      return data.items.length > 0;
    } catch (error) {
      console.error('Error checking video availability:', error);
      return false;
    }
  };

  // effectue une recherche sur YouTube en retournant les résultats de la recherche sous forme d'un tableau d'objets
  static searchYouTube = async (query: string): Promise<any[]> => {
    const response = await fetch(`${BASE_URL}/search?part=snippet&type=video&q=${query}&key=${API_KEY}`);
    const data = await response.json();
    return data.items;
  };

}

export default YoutubeApiModel;
