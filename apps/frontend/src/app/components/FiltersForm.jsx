import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FiltersForm({ setFilters }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const { minPrice, maxPrice, city, district, search } = formJson;
            setFilters({ minPrice, maxPrice, city, district, search });
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>Choose preferable filters</DialogContentText>
          <TextField
            autoFocus
            margin="normal"
            id="minPrice"
            name="minPrice"
            label="Min price"
            type="number"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="normal"
            id="maxPrice"
            name="maxPrice"
            label="Max price"
            type="number"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="normal"
            id="city"
            name="city"
            label="City"
            type="string"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="normal"
            id="district"
            name="district"
            label="District"
            type="string"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="normal"
            id="search"
            name="search"
            label="Contains"
            type="string"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Apply filters</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
