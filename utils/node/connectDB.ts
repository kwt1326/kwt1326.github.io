import { readFileSync } from 'fs';
import path from 'path';

class connectDB {
  dbPath: string;

  constructor() {
    this.dbPath = path.join(process.cwd(), 'db.json');
  }

  get path() { return this.dbPath; }

  get jsonDB() { return readFileSync(this.dbPath, { encoding: 'utf-8' }); }

  get tablePosts() { return JSON.parse(this.jsonDB)?.posts; }

  get tableCategory() { return JSON.parse(this.jsonDB)?.category; }
}

export default new connectDB();