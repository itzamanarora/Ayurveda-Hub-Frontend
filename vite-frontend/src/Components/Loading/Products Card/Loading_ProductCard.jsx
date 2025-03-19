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
                width: { xs: 150, sm: 250, md: 300 },
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                backgroundColor: "#dfdfdf"
            }}
        >
            <Skeleton
                animation='wave'
                variant="rectangular"
                sx={{
                    marginBottom: "5%",
                    width: { xs: 150, sm: 250, md: 300 },
                    height: { xs: 150, sm: 200, md: 250 },
                }}
            />

            <Box display="flex" flexDirection="column" alignItems="center">

                <Skeleton
                    animation='wave'
                    variant='text'
                    sx={{
                        marginBottom: { xs: 0.5, sm: 1, md: 1 },
                        width: { xs: 120, sm: 140, md: 250 },
                        height: { xs: 10, sm: 15, md: 25 },
                    }}
                />
                <Skeleton
                    animation='wave'
                    variant='text'
                    sx={{
                        marginBottom: { xs: 0.5, sm: 1, md: 1 },
                        width: { xs: 120, sm: 140, md: 250 },
                        height: { xs: 10, sm: 15, md: 25 },
                    }}
                />
                <Divider
                    variant="middle"
                    sx={{
                        width: { xs: 120, sm: 140, md: 250 },
                        marginTop: "5%"
                    }}
                />
                <Box
                    sx={{
                        marginTop: "5%",
                        marginBottom: "4%",
                    }}
                >
                    <Skeleton
                        animation='wave'
                        variant='text'
                        sx={{
                            marginBottom: { xs: 0.5, sm: 1, md: 1 },
                            width: { xs: 100, sm: 120, md: 140 },
                            height: { xs: 10, sm: 15, md: 25 },
                        }}
                    />
                </Box>
                <Box display="flex" gap={1}>
                    <Skeleton
                        animation='wave'
                        variant='text'
                        sx={{
                            marginBottom: { xs: 3, sm: 5, md: 7 },
                            width: { xs: 80, sm: 100, md: 120 },
                            height: { xs: 10, sm: 15, md: 25 },
                        }}
                    />
                </Box>
            </Box>
            <Box display="flex" gap={0} width="100%">
                <Skeleton
                    animation='wave'
                    variant='rectangular'
                    sx={{
                        width: { xs: 150, sm: 250, md: 300 },
                        height: { xs: 20, sm: 30, md: 40 },
                    }}
                />
            </Box>
        </Card>
    );
};

export default Loading_ProductCard;
