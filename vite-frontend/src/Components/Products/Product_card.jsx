import Divider from '@mui/material/Divider';
import { Heart, ShoppingCart } from "@phosphor-icons/react";
import {
    Typography,
    Rating,
    Fab,
    Avatar,
    Button,
    Tooltip,
    Box,
    Card
} from "@mui/material";

const Product_Card = () => {
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
                backgroundColor: "#FFF7E2",
                padding: "0px"
            }}
            onClick={() => alert("Product Clicked")}
        >
            {/* Product Image */}
            <Avatar
                variant="square"
                src="./assets/gif-error1.gif"
                sx={{
                    width: "100%",
                    height: { xs: 120, sm: 200, md: 250 },
                }}
            ></Avatar>

            <Fab
                size="small"
                color="success"
                sx={{
                    bottom: { xs: 120, sm: 200, md: 250 },
                    left: { xs: 45, sm: 85, md: 100 },
                    borderRadius: "0",
                    zIndex: "1",
                    width: { xs: 60, sm: 80, md: 100 },
                    minHeight: "0",
                    height: { xs: "25px", sm: 30, md: 40 },
                    fontSize: { xs: "8px", sm: "12px", md: "14px" },
                    padding: { xs: "0px 6px", sm: "6px 10px", md: "8px 10px" },
                }}
            >10% Off</Fab>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography
                    variant="p"
                    color="textprimary"
                    textAlign="center"
                    sx={{
                        fontSize: { xs: 10, sm: 14, md: 16 },
                        paddingRight: { xs: 2, sm: 15, md: 0 },
                        paddingLeft: { xs: 2, sm: 12, md: 0 },
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "2",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        wordBreak: "break-word"
                    }}
                >Amrutam Nari Sondarya Oil | Enhances Beauty and Health of Women </Typography>
                <Divider
                    variant="middle"
                    sx={{
                        width: { xs: 130, sm: 140, md: 250 },
                        marginTop: "5%"
                    }}
                />
                <Box
                    sx={{
                        marginTop: "5%",
                        marginBottom: "5%",
                    }}
                >
                    <Typography
                        variant="p"
                        color="textPrimary"
                        sx={{
                            fontSize: { xs: 10, sm: 12, md: 14 },
                        }}
                    >MRP: Rs.399</Typography>
                    <Typography
                        variant="p"
                        color="textSecondary"
                        ml={1}
                        sx={{
                            textDecoration: "line-through",
                            fontSize: { xs: 10, sm: 12, md: 14 },
                        }}
                    >Rs.1035</Typography>
                </Box>
                <Box display="flex" gap={1}>
                    <Rating
                        name="read-only"
                        value="3"
                        readOnly
                        size="small"
                        sx={{
                            fontSize: { xs: "14px", sm: "18px", md: "20px" }, // Responsive Star Size
                        }}
                    />
                    <Typography
                        variant="p"
                        color="textSecondary"
                        sx={{
                            fontSize: { xs: 10, sm: 12, md: 14 },
                            marginBottom: { xs: 5, sm: 12, md: 14},
                        }}
                    >(1,235)</Typography>
                </Box>
            </Box>
            <Box display="flex" gap={0} width="100%">
                <Tooltip title="Add to Wishlist" arrow>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{
                            minWidth: "0",
                            width: { xs: "35%", sm: 12, md: "40%" },
                            height: "auto",
                            padding: { xs: "5px 5px", sm: 2, md: "10px 15px"},
                            borderRadius: "0px",
                        }}
                    ><Heart size={window.innerWidth < 600 ? 16 : 24} /></Button>
                </Tooltip>
                <Tooltip title="Add to cart" arrow >
                    <Button
                        variant="contained"
                        color="success"
                        sx={{
                            minWidth: "0",
                            height: "auto",
                            width: "100%",
                            borderRadius: "0px",
                            gap: "7px",
                            fontSize: { xs: 6, sm: 12, md: 14 },
                        }}
                    ><ShoppingCart size={window.innerWidth < 600 ? 16 : 24} /> Add to cart</Button>
                </Tooltip>
            </Box>
        </Card>
    );
};

export default Product_Card;
