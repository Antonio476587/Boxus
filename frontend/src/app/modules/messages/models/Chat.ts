export interface ChatData {
  chat: Chat;
  messages: Message[];
  secret_img: string;
}

export interface Chat {
  id: number;
  created_at: string;
  user_1: string;
  user_2: string;
  purpose_secret: string;
}

export interface Message {
  message: string;
  created_at: string;
}
