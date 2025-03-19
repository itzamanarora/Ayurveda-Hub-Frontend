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
                <Skeleton animation='wave' variant="circular" width={80} height={80} sx={{ margin: "10px" }} />
                <Skeleton animation='wave' variant="rectangle" width={80} height={15} />
            </Box>
    );
};

export default Loading_Rounded_product;
