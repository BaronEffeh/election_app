// components/admin/ViewCandidates.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';
import API from '../../api/axios';

export default function ViewCandidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await API.get('/aspirants');
        setCandidates(response.data); // Adjust based on API response shape
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" mt={4} mb={2}>All Candidates</Typography>
      <Paper>
        <List>
          {candidates.length > 0 ? (
            candidates.map((candidate, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={candidate.name}
                  secondary={`Position: ${candidate.position}`}
                />
              </ListItem>
            ))
          ) : (
            <Typography align="center" p={2}>No candidates available</Typography>
          )}
        </List>
      </Paper>
    </Container>
  );
}





// import React from 'react';
// import { Container, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

// const dummyCandidates = [
//     { id: 1, name: 'Anthony Sport', position: 'Sport Prefect' },
//     { id: 2, name: 'Kolade', position: 'Sport Prefect' },
//     { id: 3, name: 'Blessing Metron', position: 'Hostel Prefect (Girls)' },
//     { id: 4, name: 'Blessing Nurse', position: 'Hostel Prefect (Girls)' },
//     { id: 5, name: 'Uko Daniel', position: 'Hostel Prefect (Boys)' },
//     { id: 6, name: 'Mosses', position: 'Hostel Prefect (Boys)' },
//     { id: 7, name: 'Adediran Briget', position: 'Head Girl' },
//     { id: 8, name: 'Ogechi', position: 'Head Girl' },
//     { id: 9, name: 'George Ibit', position: 'Head Boy' },
//     { id: 10, name: 'Barnabas Ngor', position: 'Head Boy' },
// ];

// export default function ViewCandidates() {
//   return (
//     <Container maxWidth="sm">
//       <Typography variant="h5" mt={4} mb={2}>All Candidates</Typography>
//       <Paper>
//         <List>
//           {dummyCandidates.map((candidate, index) => (
//             <ListItem key={index}>
//               <ListItemText primary={candidate.name} secondary={`Position: ${candidate.position}`} />
//             </ListItem>
//           ))}
//         </List>
//       </Paper>
//     </Container>
//   );
// }
