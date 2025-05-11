// components/voter/VoteNow.js
import React, { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import IconComplete from '../../assets/check-icon.png';
// import IconComplete from '../../assets/icon-complete.svg';

const dummyCandidates = [
    { id: 1, name: 'Anthony Sport', position: 'Sport Prefect' },
    { id: 2, name: 'Kolade', position: 'Sport Prefect' },
    { id: 3, name: 'Blessing Metron', position: 'Hostel Prefect (Girls)' },
    { id: 4, name: 'Blessing Nurse', position: 'Hostel Prefect (Girls)' },
    { id: 5, name: 'Uko Daniel', position: 'Hostel Prefect (Boys)' },
    { id: 6, name: 'Mosses', position: 'Hostel Prefect (Boys)' },
    { id: 7, name: 'Adediran Briget', position: 'Head Girl' },
    { id: 8, name: 'Ogechi', position: 'Head Girl' },
    { id: 9, name: 'George Ibit', position: 'Head Boy' },
    { id: 10, name: 'Barnabas Ngor', position: 'Head Boy' },
];

// Group candidates by position
const groupByPosition = (candidates) => {
  return candidates.reduce((grouped, candidate) => {
    const { position } = candidate;
    if (!grouped[position]) grouped[position] = [];
    grouped[position].push(candidate);
    return grouped;
  }, {});
};

export default function VoteNow() {
  const navigate = useNavigate();
  const grouped = groupByPosition(dummyCandidates);
  const positions = Object.keys(grouped);
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const [selectedCandidateId, setSelectedCandidateId] = useState('');
  const [votes, setVotes] = useState({});
  const [isReviewing, setIsReviewing] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const currentPosition = positions[currentPositionIndex];
  const currentCandidates = grouped[currentPosition];

  const handleVote = () => {
    if (!selectedCandidateId) {
      alert('Please select a candidate before voting.');
      return;
    }
    const chosen = currentCandidates.find((c) => c.id.toString() === selectedCandidateId);
    setVotes((prev) => ({
      ...prev,
      [currentPosition]: chosen.name,
    }));
    setSelectedCandidateId('');
    handleNext();
  };

  const handleNext = () => {
    if (currentPositionIndex < positions.length - 1) {
      setCurrentPositionIndex((prev) => prev + 1);
    } else {
      setIsReviewing(true);
    }
  };

  const handleBack = () => {
    if (currentPositionIndex > 0) {
      setCurrentPositionIndex((prev) => prev - 1);
      const prevPosition = positions[currentPositionIndex - 1];
      const prevVote = votes[prevPosition];
      const prevCandidate = grouped[prevPosition].find(c => c.name === prevVote);
      setSelectedCandidateId(prevCandidate?.id.toString() || '');
    }
  };

  const handleFinalSubmit = () => {
    console.log('Submitted Votes:', votes);
    setShowThankYou(true);
  };
  
//   const handleFinalSubmit = () => {
//     alert('Your votes have been submitted successfully!');
//     console.log('Submitted Votes:', votes);
//     navigate('/');
//   };

return (
  <Container maxWidth="sm">
    <Box mt={8}>
      <Card sx={{ borderRadius: 4, p: 3, boxShadow: 3 }}>
        <CardContent>
          {!isReviewing ? (
            <>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Cast your Votes
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Position: {currentPosition}
              </Typography>

              <FormControl component="fieldset" sx={{ width: '100%' }}>
                <RadioGroup
                  value={selectedCandidateId}
                  onChange={(e) => setSelectedCandidateId(e.target.value)}
                >
                  {currentCandidates.map((candidate) => (
                    <Box
                      key={candidate.id}
                      display="flex"
                      alignItems="center"
                      py={1}
                      px={2}
                      sx={{ borderRadius: 2, '&:hover': { backgroundColor: '#f9f9f9', cursor: 'pointer' } }}
                    >
                      <FormControlLabel
                        value={candidate.id.toString()}
                        control={<Radio />}
                        label={
                          <Box display="flex" alignItems="center">
                            <img
                              src="https://randomuser.me/api/portraits/women/44.jpg" // Placeholder avatar
                              alt={candidate.name}
                              style={{
                                width: 35,
                                height: 35,
                                borderRadius: '50%',
                                marginRight: 12,
                              }}
                            />
                            <Typography variant="body1">{candidate.name}</Typography>
                          </Box>
                        }
                      />
                    </Box>
                  ))}
                </RadioGroup>
              </FormControl>

              <Box display="flex" justifyContent="space-between" mt={4}>
                <Button
                  variant="outlined"
                  onClick={handleBack}
                  disabled={currentPositionIndex === 0}
                  sx={{ px: 4, borderRadius: 2 }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleVote}
                  sx={{
                    px: 6,
                    backgroundColor: '#FFD500',
                    color: '#000',
                    borderRadius: 2,
                    '&:hover': {
                      backgroundColor: '#FFE452',
                    },
                  }}
                >
                  Next
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Typography variant="h5" align="center" gutterBottom>
                Review Your Votes
              </Typography>
              <List>
                {positions.map((position) => (
                  <ListItem key={position}>
                    <ListItemText
                      primary={position}
                      secondary={votes[position] || 'No vote cast'}
                    />
                  </ListItem>
                ))}
              </List>

              <Box display="flex" justifyContent="space-between" mt={3}>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setIsReviewing(false);
                    setCurrentPositionIndex(positions.length - 1);
                  }}
                >
                  Back to Last Vote
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleFinalSubmit}
                >
                  Confirm & Submit
                </Button>
              </Box>
            </>
          )}
        </CardContent>
      </Card>

      <Dialog open={showThankYou} onClose={() => navigate('/')}>
        <DialogContent>
          <Box display="flex" justifyContent="center" mb={1}>
            <img
              src={IconComplete}
              alt="Thank You"
              style={{ width: 100, height: 100 }}
            />
          </Box>
          <DialogTitle align="center">🎉 Thank You for Voting!</DialogTitle>
          <Typography align="center" mb={2}>
            Your votes have been successfully submitted.
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button
            onClick={() => navigate('/')}
            variant="contained"
            autoFocus
            sx={{
              backgroundColor: '#FFD700', 
              color: '#000', 
              pl: 5, 
              pr: 5,
              '&:hover': {
                      backgroundColor: '#FFE452',
                    },
            }}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  </Container>
);

}
