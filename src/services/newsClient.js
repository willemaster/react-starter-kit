
import monk from 'monk';

const url = 'mongodb://lab28:qwepoi@ds157112.mlab.com:57112/news';

export default async function getNews() {
  const db = monk(url);
  const newsItems = db.get('ethereum');

  const result = await newsItems.find({});

  return result;
}
