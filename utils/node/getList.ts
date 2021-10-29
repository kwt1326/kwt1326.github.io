import DB from '../../utils/node/connectDB';
import paging from './paging';

const getList = ({ page, perCount, category }: {
  page: number;
  perCount: number;
  category?: string;
}) => {
  const posts = DB.tablePosts;

  if (Array.isArray(posts)) {
    const filterCategory = category ?
      posts.filter((item) => item?.category === category) :
      posts;

    return paging(filterCategory, page, perCount);
  }
  return [];
}

export default getList;