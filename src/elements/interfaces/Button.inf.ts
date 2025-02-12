/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IconButtonProps {
  content: string;
  // action?: any;
  action?: () => void;
  size: number;
  font: string;
  options?: IconButtonOption[];
  index?: number;
  level?: number;
}

export interface IconButtonOption {
  label: string;
  action?: (index?: number, level?: number) => void;
  value?: string;
}

export interface ActionButtonProps {
  label: string;
  bg: string;
  w: string;
  action: () => void;
  disabled?: boolean;
}
