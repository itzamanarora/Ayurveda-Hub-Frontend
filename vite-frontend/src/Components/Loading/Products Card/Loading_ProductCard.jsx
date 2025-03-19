import Divider from '@mui/material/Divider';
import {
    Box,
    Card
} from "@mui/material";
import Skeleton from '@mui/material/Skeleton';

const Loading_ProductCard = () => {
    return (
        <Card
            elevation={3}
            sx={{
                width: "300px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                backgroundColor: "#dfdfdf"
            }}
        >
            <Skeleton animation='wave' variant="rectangular" width={300} height={227} sx={{ marginBottom: "5%" }} />
            <Box display="flex" flexDirection="column" alignItems="center">
                <Skeleton animation='wave' variant='text' width={250} height={25} />
                <Skeleton animation='wave' variant='text' width={200} height={25} />
                <Divider variant="middle" sx={{ width: "250px", marginTop: "5%" }} />
                <Box
                    sx={{
                        marginTop: "5%",
                        marginBottom: "9%",
                    }}
                >
                    <Skeleton animation='wave' variant='text' width={150} height={30} />
                </Box>
                <Box display="flex" gap={1}>
                    <Skeleton animation='wave' variant='text' width={150} height={25} sx={{ marginBottom: "40%" }} />
                </Box>
            </Box>
            <Box display="flex" gap={0} width="100%">
                <Skeleton animation='wave' variant="rectangular" height={45} sx={{ width: "100%" }} />
            </Box>
        </Card>
    );
};

export default Loading_ProductCard;
