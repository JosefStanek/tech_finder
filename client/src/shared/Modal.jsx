import { Button, Typography } from "@mui/material";

const Modal = ({ open, button, title, children }) => {
  return (
    <Modal open={open}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">{children}</Typography>
      <Button>{button}</Button>
    </Modal>
  );
};

export default Modal;
