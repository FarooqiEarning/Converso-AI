export interface ModelData {
  name: string;
  tokens: number;
}

const API_BASE_URL = 'https://n8n.stylefort.store/webhook';

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
