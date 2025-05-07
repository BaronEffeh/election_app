// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import AddCandidate from './components/admin/AddCandidate';
import AddVoter from './components/admin/AddVoter';
import ViewCandidates from './components/admin/ViewCandidates';
import ViewVoters from './components/admin/ViewVoters';
import ManageElection from './components/admin/ManageElection';
import VoteNow from './components/voter/VoteNow';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-candidate" element={<AddCandidate />} />
          <Route path="/add-voter" element={<AddVoter />} />
          <Route path="/view-candidates" element={<ViewCandidates />} />
          <Route path="/view-voters" element={<ViewVoters />} />
          <Route path="/manage-election" element={<ManageElection />} />
          <Route path="/vote-now" element={<VoteNow />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
