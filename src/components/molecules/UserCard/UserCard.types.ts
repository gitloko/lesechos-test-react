export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  subscriptions: string[];
}

export interface UserCardProps {
  user: User;
  onSelectUser: (user: User) => void;
}
