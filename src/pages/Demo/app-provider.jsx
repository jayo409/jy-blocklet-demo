/**
 * @ Author: jy
 * @ Create Time: 2022-05-19 21:02:29
 * @ Modified by: jy
 * @ Modified time: 2022-05-19 22:49:20
 * @ Description: provider包裹文件
 */

import React, { createContext, useReducer } from 'react';
import { initState, reducer } from './store';

const Context = createContext({});

const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { children } = props;

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export { Context, Provider };
