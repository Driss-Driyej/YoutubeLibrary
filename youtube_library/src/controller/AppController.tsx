interface Video {
  title: string;
  id: string;
}

class AppController {
  username: string;
  setLoading: (isLoading: boolean) => void;
  setUserVideos: (videos: Video[]) => void;

  constructor(username: string, setLoading: (isLoading: boolean) => void, setUserVideos: (videos: Video[]) => void) {
    this.username = username;
    this.setLoading = setLoading;
    this.setUserVideos = setUserVideos;
  }

  async fetchUserVideos() {
    this.setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 80));
    const response = await fetch(`http://localhost:3001/api/user/${this.username}/videos`);
    if (response.ok) {
      const userVideos = await response.json();
      this.setUserVideos(userVideos);
    }
    this.setLoading(false);
  }

  async handleVideoAdd(video: Video) {
    this.setLoading(true);
    const response = await fetch(`http://localhost:3001/api/library/${this.username}/videos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    });

    if (response.ok) {
      await this.fetchUserVideos();
    }
    this.setLoading(false);
  }

  async handleVideoDelete(videoId: string) {
    this.setLoading(true);

    const response = await fetch(`http://localhost:3001/api/library/${this.username}/videos/${videoId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      await this.fetchUserVideos(); // Rafraîchir la liste des vidéos après la suppression
    }

    this.setLoading(false);
  }
}

export default AppController;
