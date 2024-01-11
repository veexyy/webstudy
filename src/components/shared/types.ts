export type Link = {
  name: string;
  link: string;
  category?: string;
};
export type Dispatch = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children?: React.ReactNode;
};
