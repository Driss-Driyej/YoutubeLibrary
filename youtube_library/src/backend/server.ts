import express, { Request, Response, NextFunction } from 'express';
import LibraryModel from './model/LibraryModel';
import UserModel from './model/UserModel';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware pour configurer CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Remplacez par l'origine de votre client
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // Répondre aux requêtes OPTIONS rapidement
  if (req.method === 'OPTIONS') {
    return res.send('');
  }
  next();
});

app.use(express.json());

// Route pour obtenir les vidéos d'un utilisateur
app.get('/api/user/:userName/videos', (req: Request, res: Response) => {
  const { userName } = req.params;
  const userVideos = UserModel.getUserVideos({ username: userName });
  res.json(userVideos);
});

// Route pour ajouter une vidéo à la bibliothèque d'un utilisateur
app.post('/api/library/:userName/videos', (req: Request, res: Response) => {
  const { userName } = req.params;
  const { title, id }: { title: string; id: string } = req.body;
  try {
    LibraryModel.addVideo(userName, { title, id });
    res.json({ message: 'Video added successfully' });
  } catch (error) {
    const err = error as Error;
    res.json({ message: `Error adding video for user ${userName}`, error: err.message });
  }
});

// Route pour supprimer une vidéo de la bibliothèque d'un utilisateur
app.delete('/api/library/:userName/videos/:videoId', (req: Request, res: Response) => {
  const { userName, videoId } = req.params;
  try {
    LibraryModel.removeVideo(userName, videoId);
    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    const err = error as Error;
    res.json({ message: `Error removing video for user ${userName}`, error: err.message });
  }
});

// Middleware pour gérer les routes non trouvées
app.use((req: Request, res: Response) => {
  res.json({ message: 'Not Found' });
});

// Middleware pour gérer les erreurs
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
