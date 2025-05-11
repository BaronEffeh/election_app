import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Paper,
} from '@mui/material';
import AdminLayout from '../layout/AdminLayout';

export default function ManageElection() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [countdownToStart, setCountdownToStart] = useState('');
  const [countdownToEnd, setCountdownToEnd] = useState('');
  const [electionStarted, setElectionStarted] = useState(false);
  const [electionEnded, setElectionEnded] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (electionStarted) {
      intervalRef.current = setInterval(() => {
        const now = new Date();

        if (startTime) {
          const start = new Date(startTime);
          const diffStart = start - now;
          setCountdownToStart(getCountdownText(diffStart, 'Election has started!'));
        }

        if (endTime) {
          const end = new Date(endTime);
          const diffEnd = end - now;
          setCountdownToEnd(getCountdownText(diffEnd, 'Election has ended!'));

          if (diffEnd <= 0) {
            setElectionEnded(true);
            clearInterval(intervalRef.current);
          }
        }
      }, 1000);

      return () => clearInterval(intervalRef.current);
    }
  }, [electionStarted, startTime, endTime]);

  const getCountdownText = (milliseconds, finishedText) => {
    if (milliseconds <= 0) return finishedText;
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const handleStartElection = () => {
    if (!startTime || !endTime) {
      alert('Please set both start and end time.');
      return;
    }

    const now = new Date();
    if (new Date(endTime) <= now) {
      alert('End time must be in the future.');
      return;
    }

    setElectionStarted(true);
    setElectionEnded(false);
    alert('Election started!');
  };

  const handleDeclareWinner = () => {
    alert('Winner declared!');
  };

  const handleGenerateReport = () => {
    alert('Election report generated!');
  };

  return (
    <AdminLayout>
    <Container maxWidth="md">
      <Box mt={5} component={Paper} p={4}>
        <Typography variant="h5" mb={2}>Manage Election</Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Election Start Time"
              type="datetime-local"
              InputLabelProps={{ shrink: true }}
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              disabled={electionStarted}
            />
            {startTime && electionStarted && (
              <Typography variant="body2" color="primary" mt={1}>
                Starts in: {countdownToStart}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Election End Time"
              type="datetime-local"
              InputLabelProps={{ shrink: true }}
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              disabled={electionStarted}
            />
            {endTime && electionStarted && (
              <Typography variant="body2" color="error" mt={1}>
                Ends in: {countdownToEnd}
              </Typography>
            )}
          </Grid>
        </Grid>

        <Box mt={3} display="flex" gap={2} flexWrap="wrap">
          <Button
            variant="contained"
            color="primary"
            onClick={handleStartElection}
            disabled={electionStarted}
          >
            Start Election
          </Button>
          <Button variant="outlined" onClick={handleGenerateReport}>
            Generate Report
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleDeclareWinner}
            disabled={!electionEnded}
          >
            Declare Winner
          </Button>
        </Box>
      </Box>
    </Container>
    </AdminLayout>
  );
}
