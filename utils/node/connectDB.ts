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

  get allMenuList() {
    const posts = this.tablePosts;
    return this.tableCategory?.map((category: string) => ({
      [category]: posts
        .filter((item: any) => item?.category === category)
        ?.map((item: { file_name: string; title: string }) => ({
          fileName: item.file_name,
          title: item.title
        }))
    }))
  }
}

export default new connectDB();