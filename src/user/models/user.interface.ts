import { BlogEntry } from 'src/blog/model/blog-entry.interface';

export interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  blogEntries?: BlogEntry[];
}
