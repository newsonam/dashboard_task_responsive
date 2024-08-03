import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import { tokens } from "../../theme";
import HomeIcon from '@mui/icons-material/Home';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import './style.css';


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{ color: colors.grey[100] }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
}


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selected, setSelected] = useState("Dashboard");
    return (
        <Box
            sx={{
                "& .pro-sidebar": {
                    height: "200vh !important",
                },
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important"
                },
                "& .pro-inner-item": {
                    padding: "5px 30px 5px 20px !important"
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important"
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important"
                },

            }}

        >
            <ProSidebar collapsed={true}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                {/* <Typography variant="h3" color={colors.grey[100]}>ADMINIS</Typography> */}
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* user */}

                    {/* MENU ITEM */}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        {/* item component above */}
                        <Item
                            title="Dashboard"
                            to="/dash"
                            icon={<HomeIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Detailed Information"
                            to="/chart"
                            icon={<InsertChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Bar Chart"
                            to="/list"
                            icon={<ContentPasteOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />


                        <Item
                            title="Order"
                            to="/orders"
                            icon={<AccountBalanceWalletOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Pie Chart"
                            to="/revenue"
                            icon={<LocalMallOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}
export default Sidebar;