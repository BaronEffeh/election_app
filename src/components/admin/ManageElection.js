import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  Divider
} from '@mui/material';
import AdminLayout from '../layout/AdminLayout';

export default function ManageElection() {
  const [electionDate, setElectionDate] = useState('');
  const [electionTime, setElectionTime] = useState('');
  const [processTime, setProcessTime] = useState('');
  const [electionStarted, setElectionStarted] = useState(false);

  const handleSetElectionDate = () => {
    if (!electionDate || !electionTime) {
      alert('Please enter both date and time.');
      return;
    }
    alert(`Election date set to ${electionDate} ${electionTime}`);
  };

  const handleStartElection = () => {
    if (!processTime) {
      alert('Please enter the election start time.');
      return;
    }
    setElectionStarted(true);
    alert('Election process started!');
  };

  return (
    <AdminLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight="bold" mb={1}>
          Manage Elections
        </Typography>
        <Divider sx={{ mb: 3 }} />

        {/* Set Election Date Row */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          mb={2}
        >
          <Typography sx={{ minWidth: 160 }}>Set Election Date</Typography>
          <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
            <TextField
              type="date"
              size="small"
              value={electionDate}
              onChange={(e) => setElectionDate(e.target.value)}
            />
            <TextField
              type="time"
              size="small"
              value={electionTime}
              onChange={(e) => setElectionTime(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#F5F5F5',
                color: '#000',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#e0e0e0'
                }
              }}
              onClick={handleSetElectionDate}
            >
              Set
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Election Process Row */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Typography sx={{ minWidth: 160 }}>Election Process</Typography>
          <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
            <TextField
              type="time"
              size="small"
              value={processTime}
              onChange={(e) => setProcessTime(e.target.value)}
            />
            <Button
              variant="contained"
              disabled={electionStarted}
              onClick={handleStartElection}
              sx={{
                backgroundColor: '#FFD700',
                color: '#000',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#FFEB3B'
                }
              }}
            >
              Start
            </Button>
          </Box>
        </Box>
      </Box>
    </AdminLayout>
  );
}





// import React, { useState, useEffect, useRef } from 'react';
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Grid,
//   Paper,
// } from '@mui/material';
// import AdminLayout from '../layout/AdminLayout';

// export default function ManageElection() {
//   const [startTime, setStartTime] = useState('');
//   const [endTime, setEndTime] = useState('');
//   const [countdownToStart, setCountdownToStart] = useState('');
//   const [countdownToEnd, setCountdownToEnd] = useState('');
//   const [electionStarted, setElectionStarted] = useState(false);
//   const [electionEnded, setElectionEnded] = useState(false);

//   const intervalRef = useRef(null);

//   useEffect(() => {
//     if (electionStarted) {
//       intervalRef.current = setInterval(() => {
//         const now = new Date();

//         if (startTime) {
//           const start = new Date(startTime);
//           const diffStart = start - now;
//           setCountdownToStart(getCountdownText(diffStart, 'Election has started!'));
//         }

//         if (endTime) {
//           const end = new Date(endTime);
//           const diffEnd = end - now;
//           setCountdownToEnd(getCountdownText(diffEnd, 'Election has ended!'));

//           if (diffEnd <= 0) {
//             setElectionEnded(true);
//             clearInterval(intervalRef.current);
//           }
//         }
//       }, 1000);

//       return () => clearInterval(intervalRef.current);
//     }
//   }, [electionStarted, startTime, endTime]);

//   const getCountdownText = (milliseconds, finishedText) => {
//     if (milliseconds <= 0) return finishedText;
//     const totalSeconds = Math.floor(milliseconds / 1000);
//     const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
//     const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
//     const seconds = String(totalSeconds % 60).padStart(2, '0');
//     return `${hours}:${minutes}:${seconds}`;
//   };

//   const handleStartElection = () => {
//     if (!startTime || !endTime) {
//       alert('Please set both start and end time.');
//       return;
//     }

//     const now = new Date();
//     if (new Date(endTime) <= now) {
//       alert('End time must be in the future.');
//       return;
//     }

//     setElectionStarted(true);
//     setElectionEnded(false);
//     alert('Election started!');
//   };

//   const handleDeclareWinner = () => {
//     alert('Winner declared!');
//   };

//   const handleGenerateReport = () => {
//     alert('Election report generated!');
//   };

//   return (
//     <AdminLayout>
//     <Container maxWidth="md">
//       <Box mt={5} component={Paper} p={4}>
//         <Typography variant="h5" mb={2}>Manage Election</Typography>

//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Election Start Time"
//               type="datetime-local"
//               InputLabelProps={{ shrink: true }}
//               value={startTime}
//               onChange={(e) => setStartTime(e.target.value)}
//               disabled={electionStarted}
//             />
//             {startTime && electionStarted && (
//               <Typography variant="body2" color="primary" mt={1}>
//                 Starts in: {countdownToStart}
//               </Typography>
//             )}
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               label="Election End Time"
//               type="datetime-local"
//               InputLabelProps={{ shrink: true }}
//               value={endTime}
//               onChange={(e) => setEndTime(e.target.value)}
//               disabled={electionStarted}
//             />
//             {endTime && electionStarted && (
//               <Typography variant="body2" color="error" mt={1}>
//                 Ends in: {countdownToEnd}
//               </Typography>
//             )}
//           </Grid>
//         </Grid>

//         <Box mt={3} display="flex" gap={2} flexWrap="wrap">
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleStartElection}
//             disabled={electionStarted}
//           >
//             Start Election
//           </Button>
//           <Button variant="outlined" onClick={handleGenerateReport}>
//             Generate Report
//           </Button>
//           <Button
//             variant="contained"
//             color="success"
//             onClick={handleDeclareWinner}
//             disabled={!electionEnded}
//           >
//             Declare Winner
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//     </AdminLayout>
//   );
// }
