// components/admin/ViewVoters.js
import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const dummyVoters = [
  { name: 'Student One', class: 'MC1' },
  { name: 'Student Two', class: 'MC2' },
  { name: 'Student Three', class: 'MC3' },
  { name: 'Student Four', class: 'UC1' },
  { name: 'Student Five', class: 'UC2' },
];

export default function ViewVoters() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" mt={4} mb={2}>All Voters</Typography>
      <Paper>
        <List>
          {dummyVoters.map((voter, index) => (
            <ListItem key={index}>
              <ListItemText primary={voter.name} secondary={voter.class} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}
