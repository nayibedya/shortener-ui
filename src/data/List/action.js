import { message } from 'antd';
import * as types from "./types";

export const fetchListtUrl = () => ({
  type: types.GET_LIST_URL,
});

export const fetchListUrlSuccess = (response) => ({
  type: types.GET_LIST_SUCCESS,
  payload: response.data,
});

export const fetchListUrlError = (error) => {
  message.error('Something Went Wrong. Please try again!!');
  return {
    type: types.GET_LIST_FAILURE,
    payload: error,
  };
};
