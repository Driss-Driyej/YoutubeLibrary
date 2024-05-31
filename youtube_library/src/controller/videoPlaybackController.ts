import { fetchVideoDetails } from '../model/videoPlaybackModel';

const checkVideoExists = async (videoId: string): Promise<boolean> => {
  try {
    return await fetchVideoDetails(videoId);
  } catch (error) {
    console.error('Error fetching video details:', error);
    return false;
  }
};

export { checkVideoExists };
