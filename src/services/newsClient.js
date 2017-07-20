
import monk from 'monk';
import redis from 'redis';
import moment from 'moment';
import getWebhoseNews from './webHoseClient';

const url = 'mongodb://lab28:qwepoi@ds157112.mlab.com:57112/news';
const db = monk(url);
const dbCollection = db.get('ethereum');

const redisClient = redis.createClient('redis://redis-13461.c2.eu-west-1-3.ec2.cloud.redislabs.com:13461/0');
redisClient.on('error', (err) => {
  console.log(`Redis error ${err}`);  // eslint-disable-line no-console
});

async function getFromRedis() {
  const lastFetch = redisClient.get('last-fetch', (err, reply) => reply); // eslint-disable-line no-unused-vars
}

export default async function getNews() {
  const lastFetch = await getFromRedis();

  if (!moment(lastFetch) < moment().add(-3, 'minutes')) {
    const newsItems = await getWebhoseNews();
    dbCollection.remove({});
    dbCollection.insert(newsItems);
    await redisClient.set('last-fetch', moment().toString());
    // return newsItems;
    return undefined;
  }

  // const result = await dbCollection.find({});

  // return result;
  return undefined;
}
