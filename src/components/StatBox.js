import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";


const StatBox = ({ title, subtitle, icon1, progress, increase, icon2 }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box width="100%" m="0 30px" display="flex" flexDirection="column" gap={2}>
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <div style={{
                        width: '50px', height: '50px', backgroundColor: title === 'Total Orders' ? colors.blueAccent[300] : title === 'Total Delivered' ? colors.greenAccent[300] : title === 'Total Cancelled' ? colors.redAccent[300] : '#D8BFD8',
                        borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        {icon1}
                    </div>

                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: colors.grey[100] }}

                    >
                        {title}
                    </Typography>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" mt="2px" sx={{
                gap: {
                    xs: '4px', sm: '130px',md:'12px',lg:'60px'
                }
            }}>
                <Typography
                    variant="h2"
                    sx={{ color: colors.grey[100], fontWeight: 'bold' }}

                >
                    {progress}
                </Typography>
                <Typography
                    variant="h5"
                    fontStyle="Italic"
                    sx={{ color: title === 'Total Orders' || title === 'Total Cancelled' ? 'lightgreen' : 'red', display: 'flex' }}

                >
                    {icon2} {increase}
                </Typography>
            </Box>


        </Box>



    );
}

export default StatBox;