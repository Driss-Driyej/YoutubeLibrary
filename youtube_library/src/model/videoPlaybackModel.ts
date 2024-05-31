const API_KEY = 'AIzaSyBeCHn2Ewkv7K2-AomWOHFhXSkWadbR5O0';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

interface VideoDetailsResponse {
  items: Array<{
    id: string;
  }>;
}

const fetchVideoDetails = async (videoId: string): Promise<boolean> => {
  const response = await fetch(`${BASE_URL}/videos?part=id&id=${videoId}&key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: VideoDetailsResponse = await response.json();
  return data.items.length > 0;
};

export { fetchVideoDetails };
