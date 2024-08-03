import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.70", size = "70" }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = progress * 360;
    return (
        <Box
            sx={{
                background: `radial-gradient(${colors.primary[400]} 55%,transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg,${colors.blueAccent[800]} ${angle}deg 360deg),
            ${colors.blueAccent[500]}`,
                borderRadius: "70%",
                width: `${120}px`,
                height: `${120}px`,
                position: 'relative'
            }}

        >
            
                <span className="percentage" style={{position: 'relative',textAlign:'center',top:'13%',left:'30%',fontWeight:'bold',fontSize:'1.5rem'}}>70%</span>
                <span className="percentage" style={{position: 'relative',top:'30%',left:'2%',textAlign:"center",fontSize:'0.7rem'}}>Goal</span>
                <span className="percentage" style={{position: 'relative',top:'50%',left:'-29%',textAlign:"center",fontSize:'0.7rem'}}>Completed</span>
            
        </Box>


    )

}

export default ProgressCircle;
