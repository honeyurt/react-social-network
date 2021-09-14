import { Dispatch } from 'redux';
import { InitActionTypes } from '../../types/init';
import { getAuth } from './auth';

export const initSucces = () => ({
  type: InitActionTypes.INIT,
});

export const init = () => (dispatch: Dispatch<any>) => {
  const promise = dispatch(getAuth());
  Promise.all([promise]).then(() => {
    dispatch(initSucces());
  });
};
