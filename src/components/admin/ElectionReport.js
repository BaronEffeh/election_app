<<<<<<< HEAD
import React, { useRef } from 'react';
=======
import React from 'react';
>>>>>>> 0d9f54055a232a5a31594f65012f34252deacdb6
import {
  Box,
  Typography,
  Button,
  Grid,
  Divider
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  Cell
} from 'recharts';
import AdminLayout from '../layout/AdminLayout';
<<<<<<< HEAD
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Logo from '../../assets/BSA_logo.png';
// import Logo from '../assets/BSA_logo.png';
=======
>>>>>>> 0d9f54055a232a5a31594f65012f34252deacdb6

const chartData = [
  {
    position: 'Sports Prefect',
    data: [
      { name: 'Adeleke Hussein', votes: 35 },
      { name: 'Blessing Kolade', votes: 57 },
      { name: 'Courage Honour', votes: 91.25 },
    ]
  },
  {
<<<<<<< HEAD
        position: 'Head Girl',
        data: [
          { name: 'Jane Doe', votes: 50 },
          { name: 'Susan Bright', votes: 75 },
          { name: 'Grace Peace', votes: 65.3 },
          { name: 'Herry Jackson', votes: 65.3 },
        ]
      },
      {
        position: 'Laboratory Prefect',
        data: [
          { name: 'John White', votes: 62.4 },
          { name: 'Sam Green', votes: 91.25 },
          { name: 'Tina Blue', votes: 40.1 },
        ]
      },
      {
        position: 'Library Prefect',
        data: [
          { name: 'Lilian Smart', votes: 40 },
          { name: 'Favour James', votes: 72.3 },
          { name: 'Kate Hope', votes: 58.4 },
        ]
      },
      {
        position: 'Hostel Prefect',
        data: [
          { name: 'Angela Nice', votes: 35.6 },
          { name: 'Chidinma Strong', votes: 57.2 },
          { name: 'Gloria Faith', votes: 63.1 },
        ]
      },
      {
        position: 'Class Rep',
        data: [
          { name: 'Cynthia Logic', votes: 49.5 },
          { name: 'Miracle Joy', votes: 67.8 },
          { name: 'Adams Brave', votes: 74.2 },
        ]
      }
];

const colorPalette = ['#8884d8', '#FF8042', '#0088FE', '#3CC3DF'];

export default function ElectionReport() {
  const reportRef = useRef();

const handleDownloadPDF = async () => {
  const input = reportRef.current;
  const canvas = await html2canvas(input, { scale: 2 });

  // const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: 'a4',
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const marginX = 30;
  const marginTop = 40;
  const marginBottom = 30;
  const imgWidth = pageWidth - marginX * 2;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  const totalPages = Math.ceil(imgHeight / (pageHeight - marginTop - marginBottom));
  const watermarkImg = new Image();
  watermarkImg.src = Logo;

  // Add watermark and split into multiple pages if needed
  for (let page = 0; page < totalPages; page++) {
    const sourceY = (canvas.height / totalPages) * page;
    const chunkHeight = canvas.height / totalPages;

    const chunkCanvas = document.createElement('canvas');
    chunkCanvas.width = canvas.width;
    chunkCanvas.height = chunkHeight;

    const ctx = chunkCanvas.getContext('2d');
    ctx.drawImage(canvas, 0, sourceY, canvas.width, chunkHeight, 0, 0, canvas.width, chunkHeight);

    const chunkImgData = chunkCanvas.toDataURL('image/png');

    if (page > 0) pdf.addPage();

    // Watermark logo
    pdf.addImage(watermarkImg, 'PNG', pageWidth - 80, 10, 50, 30, undefined, 'FAST');

    // Add screenshot
    pdf.addImage(chunkImgData, 'PNG', marginX, marginTop, imgWidth, (chunkHeight * imgWidth) / canvas.width);

    // Header text
    pdf.setFontSize(12);
    pdf.text('Britarch School Election Report', pageWidth / 2, 30, { align: 'center' });

    // Footer: Date printed + page number
    const date = new Date().toLocaleString();
    pdf.setFontSize(10);
    pdf.text(`Printed: ${date}`, marginX, pageHeight - 10);
    pdf.text(`Page ${page + 1} of ${totalPages}`, pageWidth - marginX, pageHeight - 10, { align: 'right' });
  }

  pdf.save('election-report.pdf');
};

  // const handleDownloadPDF = async () => {
  //   const input = reportRef.current;
  //   const canvas = await html2canvas(input, { scale: 2 });
  //   const imgData = canvas.toDataURL('image/png');
  
  //   const pdf = new jsPDF({
  //     orientation: 'portrait',
  //     unit: 'px',
  //     format: 'a4'
  //   });
  
  //   const pageWidth = pdf.internal.pageSize.getWidth();
  //   const pageHeight = pdf.internal.pageSize.getHeight();
  
  //   const marginX = 30;  // Left/right margin
  //   const marginTop = 40;
  //   const marginBottom = 80;
  
  //   const imgWidth = pageWidth - marginX * 2;
  //   const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
  //   pdf.setFontSize(12);
  //   pdf.text('Britarch School Election Report', pageWidth / 2, 20, { align: 'center' });
  
  //   let y = marginTop;
  //   if (imgHeight > (pageHeight - marginTop - marginBottom)) {
  //     let position = 0;
  //     while (position < imgHeight) {
  //       pdf.addImage(imgData, 'PNG', marginX, y, imgWidth, imgHeight);
  //       pdf.text(`Page ${pdf.internal.getNumberOfPages()}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
  //       position += pageHeight;
  //       if (position < imgHeight) {
  //         pdf.addPage();
  //       }
  //     }
  //   } else {
  //     pdf.addImage(imgData, 'PNG', marginX, y, imgWidth, imgHeight);
  //     pdf.text(`Page 1`, pageWidth / 2, pageHeight - 10, { align: 'center' });
  //   }
  
  //   pdf.save('election-report.pdf');
  // };
  
  // const handleDownloadPDF = async () => {
  //   const input = reportRef.current;
  //   const canvas = await html2canvas(input, { scale: 2 });
  //   const imgData = canvas.toDataURL('image/png');
  //   const pdf = new jsPDF({
  //     orientation: 'portrait',
  //     unit: 'px',
  //     format: 'a4'
  //   });

  //   const pageWidth = pdf.internal.pageSize.getWidth();
  //   const pageHeight = pdf.internal.pageSize.getHeight();
  //   const imgWidth = pageWidth;
  //   const imgHeight = (canvas.height * pageWidth) / canvas.width;

  //   // Header/Footer styling
  //   const marginTop = 40;
  //   const marginBottom = 30;

  //   pdf.setFontSize(12);
  //   pdf.text('Britarch School Election Report', pageWidth / 2, 20, { align: 'center' });

  //   let y = marginTop;
  //   if (imgHeight > (pageHeight - marginTop - marginBottom)) {
  //     let position = 0;
  //     while (position < imgHeight) {
  //       pdf.addImage(imgData, 'PNG', 0, y, imgWidth, imgHeight);
  //       pdf.text(`Page ${pdf.internal.getNumberOfPages()}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
  //       position += pageHeight;
  //       if (position < imgHeight) {
  //         pdf.addPage();
  //       }
  //     }
  //   } else {
  //     pdf.addImage(imgData, 'PNG', 0, y, imgWidth, imgHeight);
  //     pdf.text(`Page 1`, pageWidth / 2, pageHeight - 10, { align: 'center' });
  //   }

  //   pdf.save('election-report.pdf');
  // };

  // const handlePrint = () => {
  //   window.print();
  // };

  return (
    <AdminLayout>
      <Box sx={{ p: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">Election Report</Typography>
          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              onClick={handleDownloadPDF}
              sx={{
                border: '1px solid #002345',
                color: '#000',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#F9F9F6' }
              }}
            >
              Download as PDF
            </Button>
            {/* <Button
              variant="outlined"
              onClick={handlePrint}
              sx={{
                border: '1px solid #002345',
                color: '#000',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#F9F9F6' }
              }}
            >
              Print Preview
            </Button> */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FFD700',
                color: '#000',
                textTransform: 'none',
                px: 3,
                '&:hover': {
                  backgroundColor: '#FFEB3B'
                }
              }}
            >
              Public View Display
            </Button>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box ref={reportRef} id="printable-section">
          <Grid container spacing={4}>
            {chartData.map((item, index) => {
              const totalVotes = item.data.reduce((sum, c) => sum + c.votes, 0);
              const maxVote = Math.max(...item.data.map((c) => c.votes));

              const chartWithColors = item.data.map((entry, i) => ({
                ...entry,
                fill: entry.votes === maxVote ? '#41DF3C' : colorPalette[i % colorPalette.length]
              }));

              return (
                <Grid item xs={12} md={6} key={index}>
                  <Box sx={{ pr: { md: 2 }, width: '100%' }}>
                    <Typography variant="subtitle2" fontWeight="bold" mb={1}>
                      {item.position}
                    </Typography>
                    <ResponsiveContainer width="100%" height={180}>
                      <BarChart layout="vertical" data={chartWithColors}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" domain={[0, 'dataMax + 20']} />
                        <YAxis dataKey="name" type="category" width={110} />
                        <Tooltip formatter={(value) => `${value} votes`} />
                        <Bar
                          dataKey="votes"
                          barSize={30}
                          isAnimationActive={false}
                        >
                          <LabelList
                            dataKey="votes"
                            position="right"
                            fontWeight="700"
                            formatter={(val) => `${val} (${((val / totalVotes) * 100).toFixed(1)}%)`}
                          />
                          {chartWithColors.map((entry, idx) => (
                            <Cell key={`cell-${idx}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
=======
    position: 'Head Girl',
    data: [
      { name: 'Jane Doe', votes: 50 },
      { name: 'Susan Bright', votes: 75 },
      { name: 'Grace Peace', votes: 65.3 },
      { name: 'Herry Jackson', votes: 65.3 },
    ]
  },
  {
    position: 'Laboratory Prefect',
    data: [
      { name: 'John White', votes: 62.4 },
      { name: 'Sam Green', votes: 91.25 },
      { name: 'Tina Blue', votes: 40.1 },
    ]
  },
  {
    position: 'Library Prefect',
    data: [
      { name: 'Lilian Smart', votes: 40 },
      { name: 'Favour James', votes: 72.3 },
      { name: 'Kate Hope', votes: 58.4 },
    ]
  },
  {
    position: 'Hostel Prefect',
    data: [
      { name: 'Angela Nice', votes: 35.6 },
      { name: 'Chidinma Strong', votes: 57.2 },
      { name: 'Gloria Faith', votes: 63.1 },
    ]
  },
  {
    position: 'Class Rep',
    data: [
      { name: 'Cynthia Logic', votes: 49.5 },
      { name: 'Miracle Joy', votes: 67.8 },
      { name: 'Adams Brave', votes: 74.2 },
    ]
  }
];

// Default color palette
const colorPalette = ['#8884d8', '#FF8042', '#0088FE', '#3CC3DF'];

export default function ElectionReport() {
  return (
    <AdminLayout>
      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">Election Report</Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FFD700',
              color: '#000',
              textTransform: 'none',
              px: 3,
              '&:hover': {
                backgroundColor: '#FFEB3B'
              }
            }}
          >
            Public View Display
          </Button>
        </Box>

        {/* Underline */}
        <Divider sx={{ my: 2 }} />

        {/* Charts */}
        <Grid container spacing={4}>
          {chartData.map((item, index) => {
            const totalVotes = item.data.reduce((sum, c) => sum + c.votes, 0);
            const maxVote = Math.max(...item.data.map((c) => c.votes));

            // Add dynamic fill property to each data entry
            const chartWithColors = item.data.map((entry, i) => ({
              ...entry,
              fill: entry.votes === maxVote ? '#41DF3C' : colorPalette[i % colorPalette.length]
            }));

            return (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ pr: { md: 2 }, width: '100%' }}>
                  <Typography variant="subtitle2" fontWeight="bold" mb={1}>
                    {item.position}
                  </Typography>
                  <ResponsiveContainer width="100%" height={180}>
                    <BarChart layout="vertical" data={chartWithColors}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 'dataMax + 20']} />
                      <YAxis dataKey="name" type="category" width={110} />
                      <Tooltip formatter={(value) => `${value} votes`} />
                      <Bar
                        dataKey="votes"
                        barSize={30}
                        isAnimationActive={false}
                      >
                        <LabelList
                          dataKey="votes"
                          position="right"
                          fontWeight="700"
                          formatter={(val) => `${val} (${((val / totalVotes) * 100).toFixed(1)}%)`}
                        />
                        {chartWithColors.map((entry, idx) => (
                          <Cell key={`cell-${idx}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Grid>
            );
          })}
        </Grid>
>>>>>>> 0d9f54055a232a5a31594f65012f34252deacdb6
      </Box>
    </AdminLayout>
  );
}





// import React from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Divider
// } from '@mui/material';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   LabelList,
<<<<<<< HEAD
//   ResponsiveContainer,
//   Cell
// } from 'recharts';
// import AdminLayout from '../layout/AdminLayout';

// const chartData = [
//   {
//     position: 'Sports Prefect',
//     data: [
//       { name: 'Adeleke Hussein', votes: 35 },
//       { name: 'Blessing Kolade', votes: 57 },
//       { name: 'Courage Honour', votes: 91.25 },
//     ]
//   },
//   {
//     position: 'Head Girl',
//     data: [
//       { name: 'Jane Doe', votes: 50 },
//       { name: 'Susan Bright', votes: 75 },
//       { name: 'Grace Peace', votes: 65.3 },
//       { name: 'Herry Jackson', votes: 65.3 },
//     ]
//   },
//   {
//     position: 'Laboratory Prefect',
//     data: [
//       { name: 'John White', votes: 62.4 },
//       { name: 'Sam Green', votes: 91.25 },
//       { name: 'Tina Blue', votes: 40.1 },
//     ]
//   },
//   {
//     position: 'Library Prefect',
//     data: [
//       { name: 'Lilian Smart', votes: 40 },
//       { name: 'Favour James', votes: 72.3 },
//       { name: 'Kate Hope', votes: 58.4 },
//     ]
//   },
//   {
//     position: 'Hostel Prefect',
//     data: [
//       { name: 'Angela Nice', votes: 35.6 },
//       { name: 'Chidinma Strong', votes: 57.2 },
//       { name: 'Gloria Faith', votes: 63.1 },
//     ]
//   },
//   {
//     position: 'Class Rep',
//     data: [
//       { name: 'Cynthia Logic', votes: 49.5 },
//       { name: 'Miracle Joy', votes: 67.8 },
//       { name: 'Adams Brave', votes: 74.2 },
//     ]
//   }
// ];

// // Default color palette
// const colorPalette = ['#8884d8', '#FF8042', '#0088FE', '#3CC3DF'];

// export default function ElectionReport() {
//   return (
//     <AdminLayout>
//       <Box sx={{ p: 3 }}>
//         {/* Header */}
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Typography variant="h6" fontWeight="bold">Election Report</Typography>
//           <Box display="flex" gap={2}>
//           <Button
//             variant="outlined"
//             component="label"
//             sx={{
//               border: '1px solid #002345',
//               color: '#000',
//               textTransform: 'none',
//               '&:hover': { backgroundColor: '#F9F9F6' }
//             }}
//           >
//             Download as PDF
//           </Button>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: '#FFD700',
//               color: '#000',
//               textTransform: 'none',
//               px: 3,
//               '&:hover': {
//                 backgroundColor: '#FFEB3B'
//               }
//             }}
//           >
//             Public View Display
//           </Button>
//           </Box>
//         </Box>

//         {/* Underline */}
//         <Divider sx={{ my: 2 }} />

//         {/* Charts */}
//         <Grid container spacing={4}>
//           {chartData.map((item, index) => {
//             const totalVotes = item.data.reduce((sum, c) => sum + c.votes, 0);
//             const maxVote = Math.max(...item.data.map((c) => c.votes));

//             // Add dynamic fill property to each data entry
//             const chartWithColors = item.data.map((entry, i) => ({
//               ...entry,
//               fill: entry.votes === maxVote ? '#41DF3C' : colorPalette[i % colorPalette.length]
//             }));

//             return (
//               <Grid item xs={12} md={6} key={index}>
//                 <Box sx={{ pr: { md: 2 }, width: '100%' }}>
//                   <Typography variant="subtitle2" fontWeight="bold" mb={1}>
//                     {item.position}
//                   </Typography>
//                   <ResponsiveContainer width="100%" height={180}>
//                     <BarChart layout="vertical" data={chartWithColors}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis type="number" domain={[0, 'dataMax + 20']} />
//                       <YAxis dataKey="name" type="category" width={110} />
//                       <Tooltip formatter={(value) => `${value} votes`} />
//                       <Bar
//                         dataKey="votes"
//                         barSize={30}
//                         isAnimationActive={false}
//                       >
//                         <LabelList
//                           dataKey="votes"
//                           position="right"
//                           fontWeight="700"
//                           formatter={(val) => `${val} (${((val / totalVotes) * 100).toFixed(1)}%)`}
//                         />
//                         {chartWithColors.map((entry, idx) => (
//                           <Cell key={`cell-${idx}`} fill={entry.fill} />
//                         ))}
//                       </Bar>
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </Box>
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Box>
//     </AdminLayout>
//   );
// }





// import React from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Divider
// } from '@mui/material';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   LabelList,
=======
>>>>>>> 0d9f54055a232a5a31594f65012f34252deacdb6
//   ResponsiveContainer
// } from 'recharts';
// import AdminLayout from '../layout/AdminLayout';

// const chartData = [
//   {
//     position: 'Sports Prefect',
//     data: [
//       { name: 'Adeleke Hussein', votes: 35 },
//       { name: 'Blessing Kolade', votes: 57 },
//       { name: 'Courage Honour', votes: 91.25 },
//     ]
//   },
//   {
//     position: 'Head Girl',
//     data: [
//       { name: 'Jane Doe', votes: 50 },
//       { name: 'Susan Bright', votes: 75 },
//       { name: 'Grace Peace', votes: 65.3 },
//     ]
//   },
//   {
//     position: 'Laboratory Prefect',
//     data: [
//       { name: 'John White', votes: 62.4 },
//       { name: 'Sam Green', votes: 91.25 },
//       { name: 'Tina Blue', votes: 40.1 },
//     ]
//   },
//   {
//     position: 'Library Prefect',
//     data: [
//       { name: 'Lilian Smart', votes: 40 },
//       { name: 'Favour James', votes: 72.3 },
//       { name: 'Kate Hope', votes: 58.4 },
//     ]
//   },
//   {
//     position: 'Hostel Prefect',
//     data: [
//       { name: 'Angela Nice', votes: 35.6 },
//       { name: 'Chidinma Strong', votes: 57.2 },
//       { name: 'Gloria Faith', votes: 63.1 },
//     ]
//   },
//   {
//     position: 'Class Rep',
//     data: [
//       { name: 'Cynthia Logic', votes: 49.5 },
//       { name: 'Miracle Joy', votes: 67.8 },
//       { name: 'Adams Brave', votes: 74.2 },
//     ]
//   }
// ];

// const barColors = ['#8884d8', '#82ca9d', '#ffc658'];

// export default function ElectionReport() {
//   return (
//     <AdminLayout>
//       <Box sx={{ p: 3 }}>
//         {/* Header */}
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Typography variant="h6" fontWeight="bold">Election Report</Typography>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: '#FFD700',
//               color: '#000',
//               textTransform: 'none',
//               px: 3,
//               '&:hover': {
//                 backgroundColor: '#FFEB3B'
//               }
//             }}
//           >
//             Public View Display
//           </Button>
//         </Box>

//         {/* Underline */}
//         <Divider sx={{ my: 2 }} />

//         {/* Charts */}
//         <Grid container spacing={4}>
//           {chartData.map((item, index) => {
//             const totalVotes = item.data.reduce((sum, c) => sum + c.votes, 0);

//             return (
//               <Grid item xs={12} md={6} key={index}>
//                 <Box sx={{ pr: { md: 2 }, width: '100%' }}>
//                   <Typography variant="subtitle2" fontWeight="bold" mb={1}>
//                     {item.position}
//                   </Typography>
//                   <ResponsiveContainer width="100%" height={180}>
//                     <BarChart layout="vertical" data={item.data}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis type="number" domain={[0, 'dataMax + 20']} />
//                       <YAxis dataKey="name" type="category" width={110} />
//                       <Tooltip formatter={(value) => `${value} votes`} />
//                       <Bar
//                         dataKey="votes"
//                         barSize={22}
//                         isAnimationActive={false}
//                         fill="#8884d8"
//                       >
//                         <LabelList
//                           dataKey="votes"
//                           position="right"
//                           formatter={(val) =>
//                             `${((val / totalVotes) * 100).toFixed(1)}%`
//                           }
//                         />
//                       </Bar>
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </Box>
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Box>
//     </AdminLayout>
//   );
// }





// // components/admin/ElectionReport.js
// import React from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Divider
// } from '@mui/material';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   LabelList,
//   ResponsiveContainer
// } from 'recharts';
// import AdminLayout from '../layout/AdminLayout';

// const chartData = [
//   {
//     position: 'Sports Prefect',
//     data: [
//       { name: 'Adeleke Hussein', votes: 35 },
//       { name: 'Blessing Kolade', votes: 57 },
//       { name: 'Courage Honour', votes: 91.25 },
//     ]
//   },
//   {
//     position: 'Head Girl',
//     data: [
//       { name: 'Jane Doe', votes: 50 },
//       { name: 'Susan Bright', votes: 75 },
//       { name: 'Grace Peace', votes: 65.3 },
//     ]
//   },
//   {
//     position: 'Laboratory Prefect',
//     data: [
//       { name: 'John White', votes: 62.4 },
//       { name: 'Sam Green', votes: 91.25 },
//       { name: 'Tina Blue', votes: 40.1 },
//     ]
//   },
//   {
//     position: 'Library Prefect',
//     data: [
//       { name: 'Lilian Smart', votes: 40 },
//       { name: 'Favour James', votes: 72.3 },
//       { name: 'Kate Hope', votes: 58.4 },
//     ]
//   },
//   {
//     position: 'Hostel Prefect',
//     data: [
//       { name: 'Angela Nice', votes: 35.6 },
//       { name: 'Chidinma Strong', votes: 57.2 },
//       { name: 'Gloria Faith', votes: 63.1 },
//     ]
//   },
//   {
//     position: 'Class Rep',
//     data: [
//       { name: 'Cynthia Logic', votes: 49.5 },
//       { name: 'Miracle Joy', votes: 67.8 },
//       { name: 'Adams Brave', votes: 74.2 },
//     ]
//   }
// ];

// const barColors = ['#8884d8', '#82ca9d', '#ffc658'];

// export default function ElectionReport() {
//   return (
//     <AdminLayout>
//       <Box sx={{ p: 3 }}>
//         {/* Header */}
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Typography variant="h6" fontWeight="bold">Election Report</Typography>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: '#FFD700',
//               color: '#000',
//               textTransform: 'none',
//               px: 3,
//               '&:hover': {
//                 backgroundColor: '#FFEB3B'
//               }
//             }}
//           >
//             Public View Display
//           </Button>
//         </Box>

//         {/* Underline */}
//         <Divider sx={{ my: 2 }} />

//         {/* Charts */}
//         <Grid container spacing={4}>
//           {chartData.map((item, index) => {
//             const totalVotes = item.data.reduce((sum, c) => sum + c.votes, 0);
//             return (
//               <Grid item xs={12} md={6} key={index}>
//                 <Box sx={{ pr: { md: 2 }, width: '100%' }}>
//                   <Typography variant="subtitle2" fontWeight="bold" mb={1}>
//                     {item.position}
//                   </Typography>
//                   <ResponsiveContainer width="100%" height={180}>
//                     <BarChart layout="vertical" data={item.data}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis type="number" domain={[0, 'dataMax + 20']} />
//                       <YAxis dataKey="name" type="category" width={100} />
//                       <Tooltip formatter={(value) => `${value} votes`} />
//                       {item.data.map((entry, i) => (
//                         <Bar
//                           key={i}
//                           dataKey="votes"
//                           data={[entry]}
//                           barSize={20}
//                           fill={barColors[i % barColors.length]}
//                         >
//                           <LabelList
//                             dataKey="votes"
//                             position="right"
//                             formatter={(val) => `${((val / totalVotes) * 100).toFixed(1)}%`}
//                           />
//                         </Bar>
//                       ))}
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </Box>
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Box>
//     </AdminLayout>
//   );
// }






// import React from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Paper
// } from '@mui/material';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LabelList
// } from 'recharts';
// import AdminLayout from '../layout/AdminLayout';

// // Optional: assign consistent colors to candidate names
// const barColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8c94', '#8dd1e1', '#a4de6c'];

// const chartData = [
//   {
//     position: 'Sports Prefect',
//     data: [
//       { name: 'Adeleke Hussein', votes: 35 },
//       { name: 'Blessing Kolade', votes: 57 },
//       { name: 'Courage Honour', votes: 91.25 },
//     ]
//   },
//   {
//     position: 'Head Girl',
//     data: [
//       { name: 'Jane Doe', votes: 50 },
//       { name: 'Susan Bright', votes: 75 },
//       { name: 'Grace Peace', votes: 65.3 },
//     ]
//   },
//   {
//     position: 'Laboratory Prefect',
//     data: [
//       { name: 'John White', votes: 62.4 },
//       { name: 'Sam Green', votes: 91.25 },
//       { name: 'Tina Blue', votes: 40.1 },
//     ]
//   },
//   {
//     position: 'Library Prefect',
//     data: [
//       { name: 'Lilian Smart', votes: 40 },
//       { name: 'Favour James', votes: 72.3 },
//       { name: 'Kate Hope', votes: 58.4 },
//     ]
//   },
//   {
//     position: 'Hostel Prefect',
//     data: [
//       { name: 'Angela Nice', votes: 35.6 },
//       { name: 'Chidinma Strong', votes: 57.2 },
//       { name: 'Gloria Faith', votes: 63.1 },
//     ]
//   },
//   {
//     position: 'Class Rep',
//     data: [
//       { name: 'Cynthia Logic', votes: 49.5 },
//       { name: 'Miracle Joy', votes: 67.8 },
//       { name: 'Adams Brave', votes: 74.2 },
//     ]
//   }
// ];

// export default function ElectionReport() {
//   return (
//     <AdminLayout>
//       <Box sx={{ p: 3 }}>
//         {/* Header with horizontal line */}
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
//           <Typography
//             variant="h6"
//             fontWeight="bold"
//             sx={{
//               borderBottom: '1px solid #ccc',
//               pb: 1,
//               width: '100%',
//               mr: 2
//             }}
//           >
//             Election Report
//           </Typography>

//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: '#FFD700',
//               color: '#000',
//               textTransform: 'none',
//               px: 3,
//               borderRadius: 2,
//               ml: 'auto',
//               '&:hover': {
//                 backgroundColor: '#FFEB3B'
//               }
//             }}
//           >
//             Public View Display
//           </Button>
//         </Box>

//         {/* Chart Grid */}
//         <Grid container spacing={3}>
//           {chartData.map((item, index) => {
//             const totalVotes = item.data.reduce((sum, c) => sum + c.votes, 0);

//             return (
//               <Grid item xs={12} md={6} key={index}>
//                 <Paper sx={{ p: 2, borderRadius: 2, backgroundColor: '#fff' }}>
//                   <Typography variant="subtitle2" fontWeight="bold" mb={1}>
//                     {item.position}
//                   </Typography>

//                   <ResponsiveContainer width="100%" height={180}>
//                     <BarChart layout="vertical" data={item.data}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis type="number" domain={[0, 100]} />
//                       <YAxis dataKey="name" type="category" width={100} />
//                       <Tooltip formatter={(value) => `${value} votes`} />
//                       {item.data.map((entry, barIndex) => (
//                         <Bar
//                           key={barIndex}
//                           dataKey="votes"
//                           data={[entry]}
//                           fill={barColors[barIndex % barColors.length]}
//                           barSize={20}
//                         >
//                           <LabelList
//                             dataKey="votes"
//                             position="right"
//                             formatter={(val) =>
//                               `${((val / totalVotes) * 100).toFixed(1)}%`
//                             }
//                           />
//                         </Bar>
//                       ))}
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </Paper>
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Box>
//     </AdminLayout>
//   );
// }





// import React from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Paper
// } from '@mui/material';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   LabelList
// } from 'recharts';
// import AdminLayout from '../layout/AdminLayout';

// const chartData = [
//   {
//     position: 'Sports Prefect',
//     data: [
//       { name: 'Adeleke Hussein', votes: 35 },
//       { name: 'Blessing Kolade', votes: 57 },
//       { name: 'Courage Honour', votes: 91.25 },
//     ]
//   },
//   {
//     position: 'Head Girl',
//     data: [
//       { name: 'Jane Doe', votes: 50 },
//       { name: 'Susan Bright', votes: 75 },
//       { name: 'Grace Peace', votes: 65.3 },
//     ]
//   },
//   {
//     position: 'Laboratory Prefect',
//     data: [
//       { name: 'John White', votes: 62.4 },
//       { name: 'Sam Green', votes: 91.25 },
//       { name: 'Tina Blue', votes: 40.1 },
//     ]
//   },
//   {
//     position: 'Library Prefect',
//     data: [
//       { name: 'Lilian Smart', votes: 40 },
//       { name: 'Favour James', votes: 72.3 },
//       { name: 'Kate Hope', votes: 58.4 },
//     ]
//   },
//   {
//     position: 'Hostel Prefect',
//     data: [
//       { name: 'Angela Nice', votes: 35.6 },
//       { name: 'Chidinma Strong', votes: 57.2 },
//       { name: 'Gloria Faith', votes: 63.1 },
//     ]
//   },
//   {
//     position: 'Class Rep',
//     data: [
//       { name: 'Cynthia Logic', votes: 49.5 },
//       { name: 'Miracle Joy', votes: 67.8 },
//       { name: 'Adams Brave', votes: 74.2 },
//     ]
//   }
// ];

// export default function ElectionReport() {
//   return (
//     <AdminLayout>
//       <Box sx={{ p: 3 }}>
//         {/* Header */}
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
//           <Typography variant="h6" fontWeight="bold">Election Report</Typography>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: '#FFD700',
//               color: '#000',
//               textTransform: 'none',
//               px: 3,
//               '&:hover': {
//                 backgroundColor: '#FFEB3B'
//               }
//             }}
//           >
//             Public View Display
//           </Button>
//         </Box>

//         {/* Charts */}
//         <Grid container spacing={4}>
//           {chartData.map((item, index) => {
//             const totalVotes = item.data.reduce((sum, c) => sum + c.votes, 0);
//             return (
//               <Grid item xs={12} md={6} key={index}>
//                 <Paper sx={{ p: 2, borderRadius: 3 }}>
//                   <Typography variant="subtitle2" fontWeight="bold" mb={1}>
//                     {item.position}
//                   </Typography>
//                   <ResponsiveContainer width="100%" height={180}>
//                     <BarChart layout="vertical" data={item.data}>
//                       <CartesianGrid strokeDasharray="3 3" />
//                       <XAxis type="number" />
//                       <YAxis dataKey="name" type="category" width={100} />
//                       <Tooltip formatter={(value) => `${value} votes`} />
//                       <Bar dataKey="votes" fill="#8884d8">
//                         <LabelList
//                           dataKey="votes"
//                           position="right"
//                           formatter={(val) => `${((val / totalVotes) * 100).toFixed(1)}%`}
//                         />
//                       </Bar>
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </Paper>
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Box>
//     </AdminLayout>
//   );
// }





// import React from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Paper
// } from '@mui/material';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import AdminLayout from '../layout/AdminLayout';

// const chartData = [
//   {
//     position: 'Sports Prefect',
//     data: [
//       { name: 'Adeleke Hussein', votes: 35 },
//       { name: 'Blessing Kolade', votes: 57 },
//       { name: 'Courage Honour', votes: 91.25 },
//     ]
//   },
//   {
//     position: 'Head Girl',
//     data: [
//       { name: 'Jane Doe', votes: 50 },
//       { name: 'Susan Bright', votes: 75 },
//       { name: 'Grace Peace', votes: 65.3 },
//     ]
//   },
//   {
//     position: 'Laboratory Prefect',
//     data: [
//       { name: 'John White', votes: 62.4 },
//       { name: 'Sam Green', votes: 91.25 },
//       { name: 'Tina Blue', votes: 40.1 },
//     ]
//   },
//   {
//     position: 'Library Prefect',
//     data: [
//       { name: 'Lilian Smart', votes: 40 },
//       { name: 'Favour James', votes: 72.3 },
//       { name: 'Kate Hope', votes: 58.4 },
//     ]
//   },
//   {
//     position: 'Hostel Prefect',
//     data: [
//       { name: 'Angela Nice', votes: 35.6 },
//       { name: 'Chidinma Strong', votes: 57.2 },
//       { name: 'Gloria Faith', votes: 63.1 },
//     ]
//   },
//   {
//     position: 'Class Rep',
//     data: [
//       { name: 'Cynthia Logic', votes: 49.5 },
//       { name: 'Miracle Joy', votes: 67.8 },
//       { name: 'Adams Brave', votes: 74.2 },
//     ]
//   }
// ];

// export default function ElectionReport() {
//   return (
//     <AdminLayout>
//       <Box sx={{ p: 3 }}>
//         {/* Header */}
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
//           <Typography variant="h6" fontWeight="bold">Election Report</Typography>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: '#FFD700',
//               color: '#000',
//               textTransform: 'none',
//               px: 3,
//               '&:hover': {
//                 backgroundColor: '#FFEB3B'
//               }
//             }}
//           >
//             Public View Display
//           </Button>
//         </Box>

//         {/* Grid for charts */}
//         <Grid container spacing={3}>
//           {chartData.map((item, index) => (
//             <Grid item xs={12} md={6} key={index}>
//               <Paper sx={{ p: 2, borderRadius: 3 }}>
//                 <Typography variant="subtitle2" fontWeight="bold" mb={1}>
//                   {item.position}
//                 </Typography>
//                 <ResponsiveContainer width="100%" height={150}>
//                   <BarChart layout="vertical" data={item.data}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis type="number" />
//                     <YAxis dataKey="name" type="category" width={100} />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="votes" fill="#8884d8" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </AdminLayout>
//   );
// }
