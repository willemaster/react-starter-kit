import React from 'react';

const NewsItem = ({ data }) => (
  <div>
    <h2>{data.title}</h2>
    <p>{data.url}</p>
  </div>
);

export default NewsItem;
