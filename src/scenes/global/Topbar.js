
import { Box, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from '@mui/material/Avatar';
import './style.css';


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box display="flex" justifyContent="space-between" p={2} className="topbar">
            {/* searchbar */}
            <Box
                display="flex"
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >
                <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
                <InputBase sx={{ display: 'flex', ml: 1, flex: 1, minWidth: 55 }} placeholder="Search" />

            </Box>
            {/* ICONS */}
            <Box display="flex" gap={2} alignItems="center">

                <div className="icon-circle">
                    <MailOutlineIcon />
                </div>

                <div className="icon-circle">
                    <SettingsOutlinedIcon />
                </div>

                <div className="icon-circle">
                    <NotificationsOutlinedIcon />
                </div>
                <Box>
                    <Avatar src="https://t4.ftcdn.net/jpg/02/88/27/85/360_F_288278573_8mzy63G4dOpbRTZUmLi7NUhMXsniLswK.jpg" sx={{ width: 32, height: 32 }} />

                </Box>
            </Box>
        </Box>
    )
}
export default Topbar;