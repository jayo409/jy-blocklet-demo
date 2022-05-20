/**
 * @ Author: jy
 * @ Create Time: 2022-05-19 01:09:25
 * @ Modified by: jy
 * @ Modified time: 2022-05-20 17:12:37
 * @ Description: 入口文件
 */

import React from 'react';

import { Provider } from './app-provider';
import { SearchInput, Block, Transactions } from './components';

import './reset.css';
import './index.css';

export default () => {
  return (
    <Provider>
      <div className="demo-container">
        <SearchInput />
        <Block />
        <Transactions />
      </div>
    </Provider>
  );
};
