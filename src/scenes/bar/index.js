import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Header from "../../components/Header";
import BarChartComp from "../../components/BarChartComp";
const GreyPillButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#8F8F8F',
    color: '#fff',
    borderRadius: '50px',
    fontWeight: 'bold',
    textTransform: 'none',
    Top:0,
    '&:hover': {
        backgroundColor: '#8F8F8F',
    },
}));

const Bar = () => {
    return (
        <Box m="20px">
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Header title="Activity" />
                <GreyPillButton
                    variant="contained"
                    endIcon={<ArrowDropDownIcon />}
                >
                    Weekly
                </GreyPillButton>
            </Box>
            <Box height="20vh">
                <BarChartComp />

            </Box>
        </Box>
    )
}

export default Bar;