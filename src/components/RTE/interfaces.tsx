export interface IContent {
  type: string;
  value: string | null | unknown;
}

export interface IContentTypeSelectorProps extends IContent {
  action: (index: number, value: string) => void;
  index: number;
  removeAction: (index: number) => void;
  updateAction: (index: number, value: string | null | unknown) => void;
}
