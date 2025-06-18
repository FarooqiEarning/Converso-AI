export interface ModelData {
  name: string;
  tokens: number;
}

const API_BASE_URL = 'https://jealous-chrystel-mglinks-39b5ef0b.koyeb.app/webhook/models';

export const fetchModels = async (): Promise<ModelData[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/models`);
    if (!response.ok) {
      throw new Error('Failed to fetch models');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching models:', error);
    return [];
  }
};
