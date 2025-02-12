/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IContent {
  type: string;
  value: string | null | unknown;
}

export interface IContentTypeSelectorProps extends IContent {
  action: any;
  // action: (payload: { index: number; value: string }) => unknown;
  index: number;
  removeAction: any;
  // removeAction: (index: number) => void;
  updateAction: any;
  // updateAction: (index: number, value: string | null | unknown) => void;
}
