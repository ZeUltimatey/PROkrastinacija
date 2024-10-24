export interface User {
  id: number;
  email: string;
  display_name: string;
  name: string;
  surname: string;
  password?: string;
  password_confirmation?: string;
  phone_number?: string;
  user_role: string;
  created_at: string;
  updated_at: string;
  deactivated?: number;
}
