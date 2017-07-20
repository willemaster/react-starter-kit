import React from 'react';

const NewsItem = ({ data }) => (
  <div>
    <h2>{data.title}</h2>
    <p>{data.url}</p>
    <img src={data.main_image} alt="" />
    <p>{data.text}</p>
  </div>
);

export default NewsItem;
