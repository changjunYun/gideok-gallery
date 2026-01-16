export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  year: string;
}

export interface ProjectDirection {
  title: string;
  description: string;
  icon: 'palette' | 'globe' | 'sparkles' | 'users';
}

export enum ChatStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}