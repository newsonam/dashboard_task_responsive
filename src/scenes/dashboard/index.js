import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Bar from "../../scenes/bar";
import StatBox from "../../components/StatBox";
import NetProfit from "../../scenes/NetProfit/NetProfit";
import RecentOrdersTable from "../../scenes/recentorders/RecentOrdersTable";
import Goals from "../../scenes/global/Goals";
import CustomersFeedback from "../customers/CustomersFeedback.js";
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import ModeStandbyOutlinedIcon from '@mui/icons-material/ModeStandbyOutlined';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PaidIcon from '@mui/icons-material/Paid';


const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" />

            </Box>
            {/* grid and charts */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12,1fr)"
                // gridAutoRows="140px"
                gap="20px"

            >
                {/* row 1 */}
                <Box sx={{
                    marginTop: {
                        xs: '20px',
                        sm: '20px',
                        md: '0px',
                    },
                    gridColumn: {
                        xs: 'span 6',
                        sm: 'span 6',
                        md: 'span 2',
                    },
                    gridRow: {
                        xs: 'span 2',
                        sm: 'span 2',
                        md: 'span 2',
                    },
                    height: {
                        xs: '200px',
                        sm: '200px',
                        // md: '400px',
                    },
                    padding:{
                        xs: '10px',
                        sm: '10px', 
                    }

                }}
                    backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox
                        title="Total Orders"
                        progress="75"
                        increase='3%'
                        icon1={
                            <ShoppingBasketIcon
                                sx={{ color: colors.blueAccent[600], fontSize: "26px" }}
                            />

                        }
                        icon2={
                            <ArrowDropUpIcon />
                        }
                    />



                </Box>

                <Box sx={{
                    marginTop: {
                        xs: '20px',
                        sm: '20px',
                        md: '0px',
                    },
                    gridColumn: {
                        xs: 'span 6',
                        sm: 'span 6',
                        md: 'span 2',
                    },
                    gridRow: {
                        xs: 'span 2',
                        sm: 'span 2',
                        md: 'span 2',
                    },
                    height: {
                        xs: '200px',
                        sm: '200px',
                        // md: '400px',
                    }

                }}
                    backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox
                        title="Total Delivered"

                        progress="70"
                        increase="3%"
                        icon1={
                            <LocalMallIcon
                                sx={{ color: colors.greenAccent[700], fontSize: "26px" }}
                            />
                        }
                        icon2={
                            <ArrowDropDownIcon />
                        }
                    />



                </Box>

                <Box sx={{
                    marginTop: {
                        xs: '20px',
                        sm: '20px',
                        md: '0px',
                    },
                    gridColumn: {
                        xs: 'span 6',
                        sm: 'span 6',
                        md: 'span 2',
                    },
                    gridRow: {
                        xs: 'span 2',
                        sm: 'span 2',
                        md: 'span 2',
                    },
                    height: {
                        xs: '200px',
                        sm: '200px',
                        // md: '400px',
                    }

                }}
                    backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
                    <StatBox
                        title="Total Cancelled"
                        progress="05"
                        increase="3%"
                        icon1={
                            <LocalMallIcon
                                sx={{ color: colors.redAccent[600], fontSize: "26px" }}
                            />
                        }
                        icon2={
                            <ArrowDropUpIcon />
                        }
                    />



                </Box>

                <Box sx={{
                    marginTop: {
                        xs: '20px',
                        sm: '20px',
                        md: '0px',
                    },
                    gridColumn: {
                        xs: 'span 6',
                        sm: 'span 6',
                        md: 'span 2',
                    },
                    gridRow: {
                        xs: 'span 2',
                        sm: 'span 2',
                        md: 'span 2',
                    },
                    height: {
                        xs: '200px',
                        sm: '200px',
                        // md: '400px',
                    },
                     padding:{
                        xs: '4px',
                        sm: '4px', 
                    }

                }}
                    backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" padding={1}>
                    <StatBox
                        title="Total Revenue"
                        progress="$12k"
                        increase="3%"
                        icon1={
                            <PaidIcon
                                sx={{ color: '#FF10F0', fontSize: "26px" }}
                            />
                        }
                        icon2={
                            <ArrowDropDownIcon />
                        }
                    />



                </Box>

                <Box sx={{
                    marginTop: {
                        xs: '20px',
                        sm: '20px',
                        md: '0px',
                    },
                    gridColumn: {
                        xs: 'span 12',
                        sm: 'span 12',
                        md: 'span 4',
                    },
                    gridRow: {
                        xs: 'span 12',
                        sm: 'span 12',
                        md: 'span 2',
                    },
                    height: {
                        xs: '200px',
                        sm: '200px',
                        // md: '400px',
                    },
                    padding:{
                        xs: '10px',
                        sm: '10px', 
                    }

                }}
                    backgroundColor={colors.primary[400]}
                    display="flex" alignItems="center" justifyContent="center">
                    < NetProfit />



                </Box>
                {/* ROW 2 */}
                <Box
                    sx={{
                        marginTop: {
                            xs: '20px',
                            sm: '20px',
                            md: '0px',
                        },
                        gridColumn: {
                            xs: 'span 12',
                            sm: 'span 12',
                            md: 'span 8',
                        },
                        gridRow: {
                            xs: 'span 12',
                            sm: 'span 12',
                            md: 'span 2',
                        },
                        height: {
                            xs: '300px',
                            sm: '300px',
                            md: '300px',
                        }

                    }}
                    backgroundColor={colors.primary[400]}

                >


                    <Box height="300px">
                        <Bar />
                    </Box>
                </Box>
                {/* transactions */}
                <Box
                    sx={{
                        marginTop: {
                            xs: '20px',
                            sm: '20px',
                            md: '0px',
                        },
                        gridColumn: {
                            xs: 'span 12',
                            sm: 'span 12',
                            md: 'span 4',
                        },
                        gridRow: {
                            xs: 'span 1',
                            sm: 'span 1',
                            md: 'span 2',
                        },

                    }}

                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >

                    <Box height="300px">
                        <Goals title='Goals' icon={<ModeStandbyOutlinedIcon sx={{ color: 'red', fontSize: 30 }} />} />
                        <Goals title='Popular Dishes' icon={<LunchDiningOutlinedIcon sx={{ color: 'lightblue', fontSize: 30 }} />} />
                        <Goals title='Menus' icon={<CakeOutlinedIcon sx={{ color: 'skyblue', fontSize: 30 }} />} />
                    </Box>

                </Box>
                {/* ROW 3 */}
                <Box
                    sx={{
                        marginTop: {
                            xs: '20px',
                            sm: '20px',
                            md: '0px',
                        },
                        gridColumn: {
                            xs: 'span 12',
                            sm: 'span 12',
                            md: 'span 8',
                        },
                        gridRow: {
                            xs: 'span 12',
                            sm: 'span 12',
                            md: 'span 2',
                        },
                        height: {
                            xs: '50px',
                            sm: '50px',
                            md: '400px',
                        }

                    }}
                    backgroundColor={colors.primary[400]}

                >

                    <Box height="400px" >
                        <RecentOrdersTable />
                    </Box>


                </Box>

                <Box

                    sx={{
                        marginTop: {
                            xs: '360px',
                            sm: '360px',
                            md: '0px',
                        },
                        gridColumn: {
                            xs: 'span 12',
                            sm: 'span 12',
                            md: 'span 4',
                        },
                        gridRow: {
                            xs: 'span 1',
                            sm: 'span 1',
                            md: 'span 2',
                        },

                    }}


                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                    height="540px"

                >

                    <Box padding={2}>
                        <CustomersFeedback />
                    </Box>


                </Box>







                {/*  */}

                {/* <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{mb:"15px"}}
                    >
                        G
                    </Typography>
                    <Box height="200px" mt="-20px">
                        <GeographyChart isDashboard="true" />
                    </Box>



                </Box> */}
                {/*  */}
            </Box>
        </Box >
    );
}
export default Dashboard;
