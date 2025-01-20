const API_URL = 'https://678c27e91a6b89b27a2c78e2.mockapi.io/videos'; 

export const getVideos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Erro ao buscar vídeos');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const saveVideo = async (video) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    });
    if (!response.ok) throw new Error('Erro ao salvar o vídeo');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteVideo = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Erro ao excluir o vídeo');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const updateVideo = async (id, updatedVideo) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedVideo),
    });
    if (!response.ok) throw new Error('Erro ao atualizar o vídeo');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
