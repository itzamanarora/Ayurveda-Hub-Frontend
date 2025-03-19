import {
    Box,
    Stack,
    Typography
} from "@mui/material";
import Skeleton from '@mui/material/Skeleton';

const Loading_Rounded_product = () => {
    return (
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '10px',
                    cursor: 'pointer'
                }}
            >
                <Skeleton 
                    animation='wave' 
                    variant="circular" 
                    sx={{ 
                        width: {xs: 30, sm: 50, md: 80},
                        height: {xs: 30, sm: 50, md: 80},
                        margin: {xs: 0.2, sm: 0.5, md: 1}
                        }} 
                />
                <Skeleton 
                    animation='wave' 
                    variant="text"
                    sx={{
                        width: '100%',
                        height: {xs: 8, sm: 10, md: 14 },
                    }}  
                />
            </Box>
    );
};

export default Loading_Rounded_product;
