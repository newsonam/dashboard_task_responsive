import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, Typography } from "@mui/material";
import ProgressCircle from "../../components/ProgressCircle";
const NetProfit = () => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 5, sm: 20, md: 7,lg:13 } }}>
                <Box>
                    <h3>Net Profit</h3>
                    <h1>$ 6759.25</h1>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'lightgreen' }}><ArrowDropUpIcon /> <h3>3%</h3></Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <ProgressCircle sx={{position:'relative'}}/>
                    <Typography
                        variant="caption"
                        component="div"
                        color="textSecondary"
                        style={{
                            position: 'absolute',
                            top: '50px',
                            left: '50px',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1,
                        }}
                    >
                        70%
                    </Typography>
                    <h6>*The values here has been rounded off.</h6>
                </Box>

            </Box>
        </>

    );
}

export default NetProfit;