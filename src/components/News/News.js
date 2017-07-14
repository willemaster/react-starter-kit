/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import { connect } from 'react-redux';
import React from 'react';
import { fetchNews } from '../../actions/news';
import NewsItem from '../NewsItem';

@connect(store => ({
  newsItems: store.news.newsItems,
  fetching: store.news.fetching,
  store,
}))
export default class News extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchNews());
  }

  render() {
    const newsItems = this.props.newsItems.map(item => <NewsItem data={item} />);
    return (
      <div>
        <div>{newsItems}</div>
      </div>
    );
  }
}
