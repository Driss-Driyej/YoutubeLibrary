import express, { Request, Response, NextFunction } from 'express';
import LibraryModel from './model/LibraryModel';
import UserModel from './model/UserModel';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware pour configurer CORS
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // Répondre aux requêtes OPTIONS rapidement
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

// Route pour obtenir les vidéos d'un utilisateur
app.get('/api/user/:userName/videos', async (req: Request, res: Response) => {
  const { userName } = req.params;
  const userVideos = UserModel.getUserVideos({ username: userName });
  res.json(userVideos);
});

// Route pour ajouter une vidéo à la bibliothèque d'un utilisateur
app.post('/api/library/:userName/videos', async (req: Request, res: Response) => {
  const { userName } = req.params;
  const { title, id }: { title: string; id: string } = req.body;
  await LibraryModel.addVideo(userName, { title, id });
  res.status(201).json({ message: 'Video added successfully' });
});

// Route pour supprimer une vidéo de la bibliothèque d'un utilisateur
app.delete('/api/library/:userName/videos/:videoId', async (req: Request, res: Response) => {
  const { userName, videoId } = req.params;
  await LibraryModel.removeVideo(userName, videoId);
  const userVideos = UserModel.getUserVideos({ username: userName });
  res.status(200).json(userVideos);
});

// Middleware pour gérer les routes non trouvées
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' });
});

// Middleware pour gérer les erreurs
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
