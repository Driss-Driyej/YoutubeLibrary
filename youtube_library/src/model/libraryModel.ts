import johnVideosData from '../json/John';
import markVideosData from '../json/Mark';


interface LibraryModelProps {
  username: string;
}

const libraryModel = (props: LibraryModelProps) => {
  const { username } = props;
  const johnVideos = johnVideosData.videos;
  const markVideos = markVideosData.videos;

  if (username === "john") {
    return johnVideos
  } 

  if (username === "mark") {
    return markVideos;
  }

  // Si le username ne correspond ni à "john" ni à "mark" on retourne un tableau vide
  return [];
}

export default libraryModel;
