import React from 'react';
import {
  Box,
  // Grid,
  Typography,
  TextField,
  Button,
  Paper
} from '@mui/material';
import Logo from '../assets/BSA_logo.png'; // ✅ update with correct logo path
import LoginImage from '../assets/bg-img.png'; // ✅ update with correct image path

export default function Login() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      {/* Left side image */}
      <Box
        sx={{
          width: '50%',
          display: { xs: 'none', md: 'block' },
          backgroundImage: `url(${LoginImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Right side form */}
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          p: 3,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            maxWidth: 400,
            p: 4,
            borderRadius: 4,
            textAlign: 'center',
          }}
        >
          <Box mb={2}>
            <img src={Logo} alt="Logo" style={{ width: 50, marginBottom: 10 }} />
            <Typography variant="subtitle1" fontWeight="bold">
              Britarch Schools, Abuja
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Election Portal
            </Typography>
          </Box>

          <Typography variant="h6" fontWeight="600" align="left" mb={2}>
            Login
          </Typography>

          <TextField
            fullWidth
            label="Serial Number"
            placeholder="Enter serial number"
            variant="outlined"
            sx={{ mb: 3 }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#FFD700',
              color: '#000',
              fontWeight: 'bold',
              py: 1.5,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#FFEB3B',
              },
            }}
          >
            Verify ID
          </Button>
        </Paper>
      </Box>
    </Box>
  );
}





// import React, { useState, useContext } from 'react';
// import {
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   TextField,
//   Button
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import BgImg from '../assets/bg-img.png';  // ✅ Your background image
// import Logo from '../assets/BSA_logo.png';     // ✅ Your logo image

// export default function LoginPage() {
//   const [serialNumber, setSerialNumber] = useState('');
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const success = await login(serialNumber);
//     if (success) navigate('/dashboard');
//   };

//   return (
//     <Grid container sx={{ minHeight: '100vh' }}>
//       {/* Left image side */}
//       <Grid item xs={12} md={6}>
//         <Box
//           sx={{
//             height: '100vh',
//             width: '100%',
//             backgroundImage: `url(${BgImg})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//           }}
//         />
//       </Grid>

//       {/* Right login side */}
//       <Grid
//         item
//         xs={12}
//         md={6}
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         sx={{ backgroundColor: '#fdfdfd' }}
//       >
//         <Card sx={{ width: '80%', maxWidth: 400, boxShadow: 3 }}>
//           <CardContent>
//             <Box display="flex" justifyContent="center" mb={2}>
//               <img
//                 src={Logo}
//                 alt="School Logo"
//                 style={{ width: 50, height: 50, objectFit: 'contain' }}
//               />
//             </Box>
//             <Typography variant="h6" align="center" gutterBottom>
//               Britarch Schools, Abuja<br />
//               Election Portal
//             </Typography>

//             <Typography variant="subtitle1" gutterBottom>
//               Login
//             </Typography>

//             <form onSubmit={handleSubmit}>
//               <TextField
//                 fullWidth
//                 label="Serial Number"
//                 margin="normal"
//                 value={serialNumber}
//                 onChange={(e) => setSerialNumber(e.target.value)}
//                 required
//               />
//               <Button
//                 fullWidth
//                 type="submit"
//                 variant="contained"
//                 sx={{ mt: 2, backgroundColor: '#FFD700', color: 'black' }}
//               >
//                 Verify ID
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// }




// import React, { useState, useContext } from 'react';
// import {
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   TextField,
//   Button
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import BgImg from '../assets/bg-img.png';
// import Logo from '../assets/BSA_logo.png';

// export default function LoginPage() {
//   const [serialNumber, setSerialNumber] = useState('');
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const success = await login(serialNumber); // Mocked for now
//     if (success) navigate('/dashboard');
//   };

//   return (
//     // <Grid container sx={{ minHeight: '100vh' }}>
//     <Grid container sx={{ minHeight: '100vh' }}>
//   {/* Left image side */}
//   <Grid item xs={12} md={6}>
//     <Box
//       sx={{
//         height: '100%',
//         backgroundImage: `url(${BgImg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     />
//   </Grid>

//   {/* Right login side */}
//   <Grid
//     item
//     xs={12}
//     md={6}
//     display="flex"
//     alignItems="center"
//     justifyContent="center"
//     sx={{ backgroundColor: '#fdfdfd' }}
//   >
//     <Card sx={{ width: '80%', maxWidth: 400, boxShadow: 3 }}>
//       <CardContent>
//         <Box display="flex" justifyContent="center" mb={2}>
//           <img
//             src={Logo}
//             alt="School Logo"
//             style={{ width: 50, height: 50, objectFit: 'contain' }}
//           />
//         </Box>
//         <Typography variant="h6" align="center" gutterBottom>
//           Britarch Schools, Abuja<br />
//           Election Portal
//         </Typography>

//         <Typography variant="subtitle1" gutterBottom>
//           Login
//         </Typography>

//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Serial Number"
//             margin="normal"
//             value={serialNumber}
//             onChange={(e) => setSerialNumber(e.target.value)}
//             required
//           />
//           <Button
//             fullWidth
//             type="submit"
//             variant="contained"
//             sx={{ mt: 2, backgroundColor: '#FFD700', color: 'black' }}
//           >
//             Verify ID
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   </Grid>
// </Grid>

//     // <Grid item xs={12} md={6} sx={{ height: '100vh' }}>
//     //   {/* Left image side */}
//     //   <Grid item xs={12} md={6}>
//     //     <Box
//     //       sx={{
//     //         height: '100%',
//     //         backgroundImage: `url(${BgImg})`, // 📸 Replace with your local image path
//     //         backgroundSize: 'cover',
//     //         backgroundPosition: 'center',
//     //         backgroundRepeat: 'no-repeat',
//     //       }}
//     //       >
//     //         <img src={BgImg} alt="test" style={{ width: 50, height: 50 }} />
//     //     </Box>
//     //   </Grid>

//     //   {/* Right login side */}
//     //   <Grid
//     //     item
//     //     xs={12}
//     //     md={6}
//     //     display="flex"
//     //     alignItems="center"
//     //     justifyContent="center"
//     //     sx={{ backgroundColor: '#fdfdfd' }}
//     //   >
//     //     <Card sx={{ width: '80%', maxWidth: 400, boxShadow: 3 }}>
//     //       <CardContent>
//     //         <Box display="flex" justifyContent="center" mb={2}>
//     //         {/* <img src={BgImg} alt="test" style={{ width: '100%' }} /> */}

//     //           <img
//     //             src={Logo} // 🛡️ Replace with your school logo path
//     //             alt="School Logo"
//     //             style={{ width: 50, height: 50, objectFit: 'contain' }}
//     //           />
//     //         </Box>
//     //         <Typography variant="h6" align="center" gutterBottom>
//     //           Britarch Schools, Abuja<br />
//     //           Election Portal
//     //         </Typography>

//     //         <Typography variant="subtitle1" gutterBottom>
//     //           Login
//     //         </Typography>

//     //         <form onSubmit={handleSubmit}>
//     //           <TextField
//     //             fullWidth
//     //             label="Serial Number"
//     //             margin="normal"
//     //             value={serialNumber}
//     //             onChange={(e) => setSerialNumber(e.target.value)}
//     //             required
//     //           />
//     //           <Button
//     //             fullWidth
//     //             type="submit"
//     //             variant="contained"
//     //             sx={{ mt: 2, backgroundColor: '#FFD700', color: 'black' }}
//     //           >
//     //             Verify ID
//     //           </Button>
//     //         </form>
//     //       </CardContent>
//     //     </Card>
//     //   </Grid>
//     // </Grid>
//   );
// }






// // components/LoginPage.js
// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, TextField, Button, Typography, Box } from '@mui/material';
// import { AuthContext } from '../context/AuthContext';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const success = await login(email, password);
//     if (success) navigate('/dashboard');
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box mt={10}>
//         <Typography variant="h4" align="center">Login</Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Student ID or Email"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             fullWidth
//             margin="normal"
//             label="Password"
//             type="password"
//             variant="outlined"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button fullWidth type="submit" variant="contained" color="primary">
//             Login
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }
