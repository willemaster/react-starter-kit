import webhoseio from 'webhoseio';

export default function getNews() {
  const client = webhoseio.config({ token: 'd706cc0a-1ef3-4ef5-b662-a356b73a5c90' });
  let result;

  client.query('filterWebContent', { q: '"donald trump" language:english' })
    .then((output) => {
      result = output.posts;
    });

  return result;
}
