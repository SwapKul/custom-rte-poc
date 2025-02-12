export interface IModalProps {
  title: string;
  content: string;
  open: boolean;
  handleClose: (state?: boolean) => void;
}
