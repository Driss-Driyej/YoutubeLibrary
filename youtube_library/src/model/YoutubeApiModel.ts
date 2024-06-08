const API_KEY = 'AIzaSyBeCHn2Ewkv7K2-AomWOHFhXSkWadbR5O0'; // clé API youtube
const BASE_URL = 'https://www.googleapis.com/youtube/v3'; // base de l'url pour accéder à l'API youtube

// type des élément du tableaux reçu en réponse de l'API youtube
interface VideoResponse {
  items: Array<{
    id: string;
  }>;
}

class YoutubeApiModel {
  // envoie une requête à l'API YouTube pour vérifier si une vidéo existe, et retourne un booléen en conséquence
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
}

export default YoutubeApiModel;
