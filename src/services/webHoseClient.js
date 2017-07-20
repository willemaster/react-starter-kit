import webhoseio from 'webhoseio';

const client = webhoseio.config({ token: 'd706cc0a-1ef3-4ef5-b662-a356b73a5c90' });

export default async function getWebhoseNews() {
  const result = await client.query('filterWebContent', { q: '"ethereum" language:english' });

  return result.posts;
}
