// components/admin/ViewVoters.js
import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AdminLayout from '../layout/AdminLayout';

const dummyVoters = [
  { name: 'Adeleke Hussein Chidinma Sapphire', class: 'Upper class 1', serial: 'S/22/0045' },
  { name: 'Adeleke Hussein Chidinma Sapphire', class: 'Upper class 1', serial: 'S/22/0045' },
  { name: 'Adeleke Hussein Chidinma Sapphire', class: 'Upper class 1', serial: 'S/22/0045' },
  { name: 'Adeleke Hussein Chidinma Sapphire', class: 'Upper class 1', serial: 'S/22/0045' },
  { name: 'Adeleke Hussein Chidinma Sapphire', class: 'Upper class 1', serial: 'S/22/0045' },
  { name: 'Adeleke Hussein Chidinma Sapphire', class: 'Upper class 1', serial: 'S/22/0045' },
  { name: 'Adeleke Hussein Chidinma Sapphire', class: 'Upper class 1', serial: 'S/22/0045' },
  { name: 'Adeleke Hussein Chidinma Sapphire', class: 'Upper class 1', serial: 'S/22/0045' },
  { name: 'Adeleke Hussein Chidinma Sapphire', class: 'Upper class 1', serial: 'S/22/0045' },
  { name: 'Adeleke Hussein Chidinma Sapphire', class: 'Upper class 1', serial: 'S/22/0045' },
  { name: 'Adeleke Hussein Chidinma Sapphire', class: 'Upper class 1', serial: 'S/22/0045' },
  { name: 'Adeleke Hussein Chidinma Sapphire', class: 'Upper class 1', serial: 'S/22/0045' },
];

export default function ViewVoters() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', class: '', serial: '' });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setFormData({ name: '', class: '', serial: '' })
    setOpen(false);
   };
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log('New Voter:', formData);
    handleClose();
  };

  return (
    <AdminLayout>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold" mb={2}>Voters</Typography>

        <Box display="flex" justifyContent="space-between" mb={2}>
          <TextField
            placeholder="Search name"
            size="small"
            sx={{ width: '60%' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#FFD700', 
              color: '#000',
            '&:hover': {
                      backgroundColor: '#FFE452',
                    },}}
            onClick={handleOpen}
          >
            Add Voter
          </Button>
        </Box>
      <TableContainer
          sx={{
            borderRadius: 2,
            maxHeight: 400,
            overflowY: 'auto'
          }}
        >
        <Table stickyHeader>
          <TableHead sx={{ backgroundColor: '#FAFAFA' }}>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Class</strong></TableCell>
              <TableCell><strong>Serial Number</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dummyVoters.map((voter, i) => (
              <TableRow
                key={i}
                sx={{
                  backgroundColor: i % 2 === 0 ? '' : '#FAFAFA' // alternate light backgrounds
                }}
              >
                <TableCell>{voter.name}</TableCell>
                <TableCell>{voter.class}</TableCell>
                <TableCell>{voter.serial}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Voter Details</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="dense"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Class"
            name="class"
            fullWidth
            margin="dense"
            value={formData.class}
            onChange={handleChange}
          />
          <TextField
            label="Serial Number"
            name="serial"
            fullWidth
            margin="dense"
            value={formData.serial}
            onChange={handleChange}
          />
        <DialogActions>
          <Button
            fullWidth
            margin="dense"
            variant="contained"
            sx={{ 
              backgroundColor: '#FFD700', 
              color: '#000', 
              pt: 2, 
              pb: 2,
            '&:hover': {
                      backgroundColor: '#FFE452',
                    }, }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </DialogActions>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}





// // components/admin/ViewVoters.js
// import React from 'react';
// import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

// const dummyVoters = [
//   { name: 'Student One', class: 'MC1' },
//   { name: 'Student Two', class: 'MC2' },
//   { name: 'Student Three', class: 'MC3' },
//   { name: 'Student Four', class: 'UC1' },
//   { name: 'Student Five', class: 'UC2' },
// ];

// export default function ViewVoters() {
//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h5" mt={4} mb={2}>All Voters</Typography>
//       <Paper>
//         <List>
//           {dummyVoters.map((voter, index) => (
//             <ListItem key={index}>
//               <ListItemText primary={voter.name} secondary={voter.class} />
//             </ListItem>
//           ))}
//         </List>
//       </Paper>
//     </Container>
//   );
// }
