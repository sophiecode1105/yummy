import { atom } from 'recoil';
import { joinInfo } from './typeDefs';

export const modal = atom<boolean>({
  key: 'modal',
  default: false,
});

export const signUp = atom<boolean>({
  key: 'signUp',
  default: false,
});

export const emailCertiNum = atom<number>({
  key: 'emailCertiNum',
  default: 0,
});

export const joinUserInfo = atom<joinInfo>({
  key: 'joinUserInfo',
  default: {} as joinInfo,
});
