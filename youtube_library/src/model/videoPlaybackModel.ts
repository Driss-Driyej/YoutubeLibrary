const API_KEY = 'AIzaSyBeCHn2Ewkv7K2-AomWOHFhXSkWadbR5O0';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

interface VideoDetailsResponse {
  items: Array<{
    id: string;
  }>;
}

class videoPlaybackModel {
  // envoie une requête à l'API YouTube pour vérifier si une vidéo existe, et retourne un booléen en conséquence
  static checkVideoExists = async (videoId: string): Promise<boolean> => {
    try {
      const response = await fetch(`${BASE_URL}/videos?part=id&id=${videoId}&key=${API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: VideoDetailsResponse = await response.json();
      return data.items.length > 0;
    } catch (error) {
      console.error('Error checking video availability:', error);
      return false;
    }
  };
}

export default videoPlaybackModel;
