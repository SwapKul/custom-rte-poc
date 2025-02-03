export interface IconButtonProps {
  content: string;
  action?: () => void;
  size: number;
  font: string;
  options?: IconButtonOption[];
  index?: number;
}

export interface IconButtonOption {
  label: string;
  action?: (index?: number) => void;
  value?: string;
}
