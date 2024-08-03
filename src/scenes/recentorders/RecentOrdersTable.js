import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/material';

function createData(id,imgurl,customer, orderno, amount, status) {
    return { id,imgurl,customer, orderno, amount, status };
}

const rows = [
    createData(1,'https://uploads-ssl.webflow.com/60c11f0c32e847294cfbcb6c/60c1401d63769509bd4e72cd_Rectangle%202.png','Wade Warren', 15478256, 124.00, 'Delivered'),
    createData(2,'https://m.media-amazon.com/images/M/MV5BZTY5MDE0ZTUtMmEyNC00Yzk2LTgzZTEtYjlhZmE0ZDE0YzExXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg','Jane Cooper', 48965786, 365.02, 'Delivered'),
    createData(3,'https://cidlab.com/files/smp/img/guy-hawkins.jpg','Guy Hawkins', 78958215, 45.88, 'Cancelled'),
    createData(4,'https://images.squarespace-cdn.com/content/v1/57eae735e6f2e1db28523ba0/1667502099990-9AW60CJNBV3HYMOMOLRA/Kirsten-10+%281%29.jpg','Kristin Watson', 20965732, 65.00, 'Pending'),
    createData(5,'https://www.thesun.co.uk/wp-content/uploads/2022/12/chris-jepson-bromsgrove-sporting-fc-785184174.jpg','Cody Fisher', 95715620, 545.00, 'Delivered'),
    createData(6,'https://charlotte49ers.com/images/2023/11/28/Nguyen__Savannah.jpg','Savannah Nguyen', 78514568, 128.20, 'Delivered'),
];

export default function BasicTable() {
 
    return (
        <TableContainer component={Paper} sx={{ backgroundColor: '#434957',padding:'10px' }}>
            <h1>Recent Orders</h1>
            <Table sx={{ minWidth: 650}} aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell sx={{ fontSize:'1rem'}} >Customer</TableCell>
                        <TableCell sx={{ fontSize:'1rem'}} >Order No.</TableCell>
                        <TableCell sx={{ fontSize:'1rem'}}>Amount</TableCell>
                        <TableCell sx={{ fontSize:'1rem'}}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell>
                                <Box key={row.id} sx={{display:'flex',gap:2,alignItems:'center'}}>
                                <Avatar key={row.id} src={row.imgurl} sx={{ width: 32, height: 32 }} />

                            {row.customer}
                            </Box></TableCell>
                            <TableCell key={row.id} >{row.orderno}</TableCell>
                            <TableCell key={row.id} >${(row.amount).toFixed(2)}</TableCell>
                            <TableCell key={row.id}>
                                <Button
                                    variant="contained" // You can also use "outlined" or "text" for different styles
                                    sx={{
                                        borderRadius: 50, // Large value to create the pill shape
                                        padding: '5px 10px', // Adjust padding to your preference
                                        textTransform: 'none', // Optional: Prevents text from being capitalized
                                        color: row.status === 'Delivered' ? '#88e851' : '#FFCCCB',
                                        backgroundColor: row.status === 'Delivered' ? '#00ac4e' : '#DE3163'
                                    }}
                                >
                                    {row.status}
                                </Button>


                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
