/**
 * @ Author: jy
 * @ Create Time: 2022-05-19 22:07:10
 * @ Modified by: jy
 * @ Modified time: 2022-05-20 16:32:03
 * @ Description: block信息展示容器
 */

import React, { useContext } from 'react';

import { Context } from '../../app-provider';

import './index.css';

const staticNeedRenderField = ['hash', 'bits', 'nonce', 'fee', 'mrkl_root']; // 需要渲染到页面的字段

export default () => {
  const {
    state: { blockletData, searchValue },
  } = useContext(Context);

  if (!blockletData || !blockletData.hash) {
    return null;
  }

  return (
    <div className="block-container">
      <p className="block-title">Block: {searchValue}</p>
      <ul className="block-info-list">
        {staticNeedRenderField.map((item) => (
          <li key={item}>
            <span>{item}</span>
            <span>{blockletData[item]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
