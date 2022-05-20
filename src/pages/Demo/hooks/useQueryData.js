/**
 * @ Author: jy
 * @ Create Time: 2022-05-19 21:16:00
 * @ Modified by: jy
 * @ Modified time: 2022-05-20 16:55:56
 * @ Description: 数据操作hooks
 */

import { useContext } from 'react';
import { message } from 'antd';

import { Context } from '../app-provider';

function useQueryData() {
  const { dispatch } = useContext(Context);

  /**
   * 发起请求
   * @param {*} nextSearchValue
   */
  async function toQuery(nextSearchValue) {
    try {
      dispatch({ type: 'updateLoading' });
      const response = await fetch(`https://blockchain.info/rawblock/${nextSearchValue}`);
      const json = await response.json();
      if (json.hash) {
        dispatch({ type: 'updateBlockletData', payload: { blockletData: json, searchValue: nextSearchValue } });
      } else {
        throw new Error('查询失败');
      }
      dispatch({ type: 'updateLoading' });
    } catch (err) {
      dispatch({ type: 'updateLoading' });
      message.error('查询失败');
    }
  }

  return {
    toQuery,
  };
}

export default useQueryData;
