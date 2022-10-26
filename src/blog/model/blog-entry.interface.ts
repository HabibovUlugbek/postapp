import { User } from 'src/user/models/user.interface';

export interface BlogEntry {
  id?: number;
  title?: string;
  description?: string;
  body?: string;
  createdAt?: Date;
  updatedAt?: Date;
  author?: User;
  tags?: string[];
}
