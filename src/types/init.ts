export interface InitState {
  initialized: boolean;
}

export enum InitActionTypes {
  INIT = 'INIT',
}

interface Init {
  type: InitActionTypes.INIT;
  init: boolean;
}

export type InitAction = Init;
