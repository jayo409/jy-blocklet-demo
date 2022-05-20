/**
 * @ Author: jy
 * @ Create Time: 2022-05-19 21:18:13
 * @ Modified by: jy
 * @ Modified time: 2022-05-20 16:08:29
 * @ Description: 搜索框组件
 */

import React, { useRef } from 'react';
import { Input } from 'antd';

import useQueryData from '../../hooks/useQueryData';

import './index.css';

const { Search } = Input;

export default () => {
  const inputRef = useRef(null); // input的ref绑定
  const { toQuery } = useQueryData();

  function handleSearch() {
    console.log(inputRef?.current);
    toQuery(inputRef?.current?.input.value || '');
  }

  return (
    <div className="block-input-wrap">
      <Search
        placeholder="Search your transaction, an address or a block"
        onSearch={() => handleSearch()}
        ref={(ref) => {
          inputRef.current = ref;
        }}
      />
    </div>
  );
};
