export type joinInfo = {
  email: string;
  password: string;
};

export type material = {
  id: number;
  name: string;
  img: string;
};

export interface Modal {
  modals: boolean;
}
export type content = {
  img: File | string;
  explain: string;
};
