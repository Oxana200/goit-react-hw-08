import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const Modal = ({ children, onClose, title = 'Редагування контакту', onSave }) => {
  return (
    <Dialog open={true} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Скасувати
        </Button>
        <Button onClick={onSave} variant="contained">
          Зберегти
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
