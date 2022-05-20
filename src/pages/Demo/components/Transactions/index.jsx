/**
 * @ Author: jy
 * @ Create Time: 2022-05-20 15:26:55
 * @ Modified by: jy
 * @ Modified time: 2022-05-20 16:42:36
 * @ Description: transactions展示分页列表
 */
import React, { useContext, useMemo } from 'react';
import { Pagination } from 'antd';

import { Context } from '../../app-provider';

import './index.css';

export default () => {
  const {
    state: { blockletData, pageSize, pageNo },
    dispatch,
  } = useContext(Context);

  /**
   * 获取当前应显示的Transactions
   */
  const transactions = useMemo(() => {
    if (blockletData?.tx.length) {
      const start = pageSize * (pageNo - 1);
      const end = pageNo * pageSize;
      return blockletData.tx.slice(start, end);
    }
    return [];
  }, [blockletData, pageSize, pageNo]);

  const txTotalSize = blockletData?.tx.length || 0;

  if (!transactions || !transactions.length) {
    return null;
  }

  return (
    <div className="transactions-container">
      <p className="transactions-title">Block Transactions:</p>
      <ul className="transactions-info-list">
        {transactions.map((item) => (
          <li key={item.hash}>
            <span>hash</span>
            <span>{item.hash}</span>
          </li>
        ))}
      </ul>
      <Pagination
        total={txTotalSize}
        current={pageNo}
        pageSize={pageSize}
        onChange={(nextPageNo) => dispatch({ type: 'updatePageData', payload: { pageNo: nextPageNo, pageSize } })}
      />
    </div>
  );
};
