import React, { useContext } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import AdminLayout from './layout/AdminLayout';
import { AuthContext } from '../context/AuthContext';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {
  Dashboard as DashboardIcon,
  Logout as LogoutIcon
} from '@mui/icons-material';
import Logo from '../assets/BSA_logo.png';

const drawerWidth = 240;

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  // Voter View
  if (user?.role === 'voter') {
    return (
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            },
          }}
        >
          <Box>
            <Box display="flex" justifyContent="center" p={2}>
              <img src={Logo} alt="Logo" style={{ width: 50 }} />
            </Box>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon sx={{color: '#DA5050'}}><DashboardIcon /></ListItemIcon>
                <ListItemText sx={{color: '#DA5050'}} primary="Dashboard" />
              </ListItem>
            </List>
          </Box>
          <Box>
            <Divider />
            <List>
              <ListItem button onClick={logout}>
                <ListItemIcon><LogoutIcon /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h5" fontWeight="600" gutterBottom>
            Welcome, {user?.name}!
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, pb: 2 }}>
            {[
              {
                text: 'School elections let students choose their leaders through a fair voting process. It teaches responsibility and democracy.',
                bg: '#FDE7B1'
              },
              {
                text: 'Voting gives you a voice in decisions that affect student life. It’s your chance to be heard!',
                bg: '#F1F9C4'
              },
              {
                text: 'After voting ends, votes are counted, results are declared, and new leaders are announced.',
                bg: '#FAD4D4'
              },
              {
                text: 'Think about leadership, character, and vision—not just popularity. Your Vote determines your next set of leaders.',
                bg: '#C2FCAD'
              }
            ].map((card, index) => (
              <Card key={index} sx={{ minWidth: 300, backgroundColor: card.bg, borderRadius: 3, p: 2 }}>
                <Typography align="center" fontWeight="500">
                  {card.text}
                </Typography>
              </Card>
            ))}
          </Box>

          <Typography variant="h6" mt={5}>Voting Begins in</Typography>
          <Typography variant="h3" fontWeight="bold">
            12 : 10 : 45 : 15
          </Typography>
          <Typography variant="caption">D &nbsp;&nbsp; H &nbsp;&nbsp; M &nbsp;&nbsp; S</Typography>
        </Box>
      </Box>
    );
  }

  // Admin View
  return (
    <AdminLayout>
      <Typography variant="h4" mb={1}>Welcome, {user?.name}!</Typography>
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ width: 292, height: 150, borderRadius: 5, border: 'solid 1px #FFF1A3', backgroundColor: '#FAFAF7' }}>
            <CardContent align="center">
              <Typography variant="h3" fontWeight="400">200</Typography>
              <Typography variant="h6">Total Number of Voters</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ width: 292, height: 150, borderRadius: 5, border: 'solid 1px #E89393', backgroundColor: '#FFF4B8' }}>
            <CardContent align="center">
              <Typography variant="h3" fontWeight="400">0</Typography>
              <Typography variant="h6">Total Number of Candidates</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ width: 292, height: 150, borderRadius: 5, border: 'solid 1px #000000', backgroundColor: '#FDFDFC' }}>
            <CardContent align="center">
              <Typography variant="h3" fontWeight="400">0</Typography>
              <Typography variant="h6">Open Positions Available</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box>
      <Typography variant="h6" mt={5}>Voting Begins in:</Typography>
      </Box>
      <Box>
      <Typography variant="h3" fontWeight="bold" marginTop={5}>
        12 : 10 : 45 : 15
      </Typography>
      <Typography variant="caption" letterSpacing={15} pl={3}>D &nbsp;&nbsp; H &nbsp;&nbsp; M &nbsp;&nbsp; S</Typography>
      </Box>
      </Box>
    </AdminLayout>
  );
}





// import React, { useContext } from 'react';
// import {
//   Box,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Card,
//   CardContent,
//   Grid
// } from '@mui/material';
// import {
//   Dashboard as DashboardIcon,
//   People as PeopleIcon,
//   HowToVote as VoteIcon,
//   Settings as SettingsIcon,
//   Logout as LogoutIcon
// } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import Logo from '../assets/BSA_logo.png';

// const drawerWidth = 240;

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const { logout, user } = useContext(AuthContext); // Assume user = { role: 'admin' | 'voter', name: 'Adeleke Hussein' }

//   const menuItems = [
//     { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
//     { text: 'Candidates', icon: <VoteIcon />, path: '/view-candidates' },
//     { text: 'Voters', icon: <PeopleIcon />, path: '/view-voters' },
//     { text: 'Manage Election', icon: <SettingsIcon />, path: '/manage-election' },
//   ];

//   // If user is a voter, render the voter screen
//   if (user?.role === 'voter') {
//     return (
//       <Box sx={{ display: 'flex', minHeight: '100vh' }}>
//         <Drawer
//           variant="permanent"
//           sx={{
//             width: drawerWidth,
//             flexShrink: 0,
//             [`& .MuiDrawer-paper`]: {
//               width: drawerWidth,
//               boxSizing: 'border-box',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//               // backgroundColor: '#774D4D',
//               // color: 'white'
//             },
//           }}
//         >
//           <Box>
//             <Box display="flex" justifyContent="center" p={2}>
//               <img src={Logo} alt="Logo" style={{ width: 50 }} />
//             </Box>
//             <Divider />
//             <List>
//               <ListItem button>
//                 <ListItemIcon><DashboardIcon /></ListItemIcon>
//                 <ListItemText primary="Dashboard" />
//               </ListItem>
//             </List>
//           </Box>
//           <Box>
//             <Divider />
//             <List>
//               <ListItem button onClick={logout}>
//                 <ListItemIcon><LogoutIcon /></ListItemIcon>
//                 <ListItemText primary="Logout" />
//               </ListItem>
//             </List>
//           </Box>
//         </Drawer>

//         <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//           <Typography variant="h5" fontWeight="600" gutterBottom>
//             Welcome, {user?.name}!
//           </Typography>
//           <Divider sx={{ mb: 3 }} />

//           <Box sx={{ display: 'flex', overflowX: 'auto', gap: 2, pb: 2 }}>
//             <Card sx={{ minWidth: 300, backgroundColor: '#FDE7B1', borderRadius: 3, p: 2 }}>
//               <Typography align="center" fontWeight="500">
//                 School elections let students choose their leaders through a fair voting process. It teaches responsibility and democracy.
//               </Typography>
//             </Card>
//             <Card sx={{ minWidth: 300, backgroundColor: '#F1F9C4', borderRadius: 3, p: 2 }}>
//               <Typography align="center" fontWeight="500">
//                 Voting gives you a voice in decisions that affect student life. It’s your chance to be heard!
//               </Typography>
//             </Card>
//             <Card sx={{ minWidth: 300, backgroundColor: '#FAD4D4', borderRadius: 3, p: 2 }}>
//               <Typography align="center" fontWeight="500">
//                 After voting ends, votes are counted, results are declared, and new leaders are announced.
//               </Typography>
//             </Card>
//             <Card sx={{ minWidth: 300, backgroundColor: '#C2FCAD', borderRadius: 3, p: 2 }}>
//               <Typography align="center" fontWeight="500">
//               Think about leadership, character, and vision—not just popularity. Your Vote determines your next set of leaders
//               </Typography>
//             </Card>
//             {/* Add more cards here if needed */}
//           </Box>

//           <Typography variant="h6" mt={5}>Voting Begins in</Typography>
//           <Typography variant="h3" fontWeight="bold">
//             12 : 10 : 45 : 15
//           </Typography>
//           <Typography variant="caption">D &nbsp;&nbsp; H &nbsp;&nbsp; M &nbsp;&nbsp; S</Typography>
//         </Box>
//       </Box>
//     );
//   }

//   // Otherwise render the admin dashboard
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//           },
//         }}
//       >
//         <Box>
//           <Box display="flex" justifyContent="center" p={2}>
//             <img src={Logo} alt="Logo" style={{ width: 50 }} />
//           </Box>
//           <Divider />
//           <List>
//             {menuItems.map((item) => (
//               <ListItem button key={item.text} onClick={() => navigate(item.path)}>
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText primary={item.text} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//         <Box>
//           <Divider />
//           <List>
//             <ListItem button onClick={logout}>
//               <ListItemIcon><LogoutIcon /></ListItemIcon>
//               <ListItemText primary="Logout" />
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>

//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Typography variant="h4" mb={1}>Welcome, { user?.name}!</Typography>
//         <Divider sx={{ mb: 3 }} />

//         <Grid container spacing={5} justifyContent="center">
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ width: 292, height: 150, borderRadius: 5, border: "solid 1px #FFF1A3", backgroundColor: "#FAFAF7" }}>
//               <CardContent align="center">
//                 <Typography variant="h3" fontWeight="400">200</Typography>
//                 <Typography variant="h6">Total Number of Voters</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ width: 292, height: 150, borderRadius: 5, border: "solid 1px #E89393", backgroundColor: "#FFF4B8" }}>
//               <CardContent align="center">
//                 <Typography variant="h3" fontWeight="400">0</Typography>
//                 <Typography variant="h6">Total Number of Candidates</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card sx={{ width: 292, height: 150, borderRadius: 5, border: "solid 1px #000000", backgroundColor: "#FDFDFC" }}>
//               <CardContent align="center">
//                 <Typography variant="h3" fontWeight="400">0</Typography>
//                 <Typography variant="h6">Open Positions Available</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//         <Typography variant="h6" mt={5}>Voting Begins in</Typography>
//           <Typography variant="h3" fontWeight="bold">
//             12 : 10 : 45 : 15
//           </Typography>
//           <Typography variant="caption">D &nbsp;&nbsp; H &nbsp;&nbsp; M &nbsp;&nbsp; S</Typography>
//       </Box>
//     </Box>
//   );
// }





// import React, { useContext } from 'react';
// import {
//   Box,
//   Typography,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Card,
//   CardContent,
//   Grid,
//   // Button
// } from '@mui/material';
// import {
//   Dashboard as DashboardIcon,
//   People as PeopleIcon,
//   HowToVote as VoteIcon,
//   Settings as SettingsIcon,
//   Logout as LogoutIcon
// } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import Logo from '../assets/BSA_logo.png';

// const drawerWidth = 240;

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const { logout } = useContext(AuthContext);

//   const menuItems = [
//     { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
//     { text: 'Candidates', icon: <VoteIcon />, path: '/view-candidates' },
//     { text: 'Voters', icon: <PeopleIcon />, path: '/view-voters' },
//     { text: 'Manage Election', icon: <SettingsIcon />, path: '/manage-election' },
//   ];

//   return (
//     <Box sx={{ display: 'flex' }}>
//       {/* Sidebar */}
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//           },
//         }}
//       >
//         <Box>
//           <Box display="flex" justifyContent="center" p={2}>
//             <img src={Logo} alt="Logo" style={{ width: 50 }} />
//           </Box>
//           <Divider />
//           <List>
//             {menuItems.map((item) => (
//               <ListItem button key={item.text} onClick={() => navigate(item.path)}>
//                 <ListItemIcon>{item.icon}</ListItemIcon>
//                 <ListItemText primary={item.text} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//         <Box>
//           <Divider />
//           <List>
//             <ListItem button onClick={logout}>
//               <ListItemIcon><LogoutIcon /></ListItemIcon>
//               <ListItemText primary="Logout" />
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Typography variant="h4" mb={1}>Welcome, Admin</Typography>
//         <Divider sx={{ mb: 3 }} />

//         <Grid container spacing={5} justifyContent="center">
//           <Grid item xs={12} sm={6} md={4}>
//             <Card 
//             sx={{
//               width: 292, 
//               height: 150, 
//               borderRadius: 5, 
//               border: "solid 1px #FFF1A3", 
//               backgroundColor: "#FAFAF7"
//               }}
//               >
//               <CardContent align="center">
//                 <Typography variant="h3" fontWeight="400">200</Typography>
//                 <Typography variant="h6">Total Number of Voters</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card
//             sx={{
//               width: 292, 
//               height: 150, 
//               borderRadius: 5, 
//               border: "solid 1px #E89393", 
//               backgroundColor: "#FFF4B8"
//               }}
//               >
//               <CardContent align="center">
//                 <Typography variant="h3" fontWeight="400">0</Typography>
//                 <Typography variant="h6">Total Number of Candidates</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//           <Grid item xs={12} sm={6} md={4}>
//             <Card
//             sx={{
//               width: 292, 
//               height: 150, 
//               borderRadius: 5, 
//               border: "solid 1px #000000", 
//               backgroundColor: "#FDFDFC"
//               }}
//               >
//               <CardContent align="center">
//                 <Typography variant="h3" fontWeight="400">0</Typography>
//                 <Typography variant="h6">Open Positions Available</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }





// // components/Dashboard.js
// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Button, Grid, Typography } from '@mui/material';
// import { AuthContext } from '../context/AuthContext';

// export default function Dashboard() {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" align="center" mt={5}>
//         Welcome, {user?.role}
//       </Typography>
//       <Grid container spacing={2} justifyContent="center" mt={3}>
//         {user?.role === 'admin' ? (
//           <>
//             <Grid item>
//               <Button variant="contained" onClick={() => navigate('/add-candidate')}>
//                 Add Candidate
//               </Button>
//             </Grid>
//             <Grid item>
//               <Button variant="contained" onClick={() => navigate('/add-voter')}>
//                 Add Voter
//               </Button>
//             </Grid>
//             <Grid item>
//               <Button variant="contained" onClick={() => navigate('/view-candidates')}>
//                 View Candidates
//               </Button>
//             </Grid>
//             <Grid item>
//               <Button variant="contained" onClick={() => navigate('/view-voters')}>
//                 View Voters
//               </Button>
//             </Grid>
//             <Grid item>
//                 <Button variant="contained" onClick={() => navigate('/manage-election')}>
//                     Manage Election
//                 </Button>
//             </Grid>

//           </>
//         ) : (
//           <Grid item>
//             <Button variant="contained" size="large" onClick={() => navigate('/vote-now')}>
//                 VOTE NOW
//             </Button>

//             {/* <Button variant="contained" size="large">
//               VOTE NOW
//             </Button> */}
//           </Grid>
//         )}
//       </Grid>
//     </Container>
//   );
// }
