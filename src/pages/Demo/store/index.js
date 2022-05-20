/**
 * @ Author: jy
 * @ Create Time: 2022-05-19 21:06:36
 * @ Modified by: jy
 * @ Modified time: 2022-05-20 17:01:45
 * @ Description: store
 */

export const initState = {
  searchValue: '', // 搜索关键词
  loading: false, // 查询中
  blockletData: null, // 渲染数据
  pageSize: 20,
  pageNo: 1,
};

export const reducer = (state = initState, action) => {
  const actionTypeMap = {
    /**
     * 更新查询数据
     * @param {*} state
     * @param {*} payload
     * @returns
     */
    updateBlockletData: (prevState, { blockletData, searchValue }) => {
      return { ...prevState, blockletData, searchValue, pageSize: 20, pageNo: 1 };
    },

    /**
     * 更新分页数据
     * @param {*} prevState
     * @param {*} param1
     * @returns
     */
    updatePageData: (prevState, { pageSize, pageNo }) => {
      return { ...prevState, pageSize, pageNo };
    },

    /**
     * 更新加载中状态
     * @param {*} prevState
     * @returns
     */
    updateLoading: (prevState) => {
      return { ...prevState, loading: !prevState.loading };
    },
  };

  if (actionTypeMap[action.type]) {
    return actionTypeMap[action.type](state, action.payload);
  }

  return state;
};
