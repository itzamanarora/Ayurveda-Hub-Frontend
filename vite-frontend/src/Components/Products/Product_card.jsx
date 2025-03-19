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
                width: "300px",
                height: "100%",
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
                    height: "100%"
                }}
            ></Avatar>

            <Fab
                size="small"
                color="success"
                aria-label="Add to cart"
                sx={{ bottom: "220px", left: "100px", borderRadius: "0px", zIndex: "1", width: "30%" }}
            >10% Off</Fab>
            <Box display="flex" flexDirection="column" alignItems="center">
            <Typography
                    variant="p"
                    fontSize={16}
                    color="textprimary"
                    textAlign="center"
                >Amrutam Nari Sondarya Oil | Enhances Beauty and Health of Women</Typography>
                 <Divider variant="middle" sx={{width: "250px", marginTop: "5%"}} />
                <Box
                    sx={{
                        marginTop: "5%",
                        marginBottom: "5%",
                    }}
                >
                    <Typography
                        variant="p"
                        color="textPrimary"
                    >MRP: Rs.399</Typography>
                    <Typography
                        variant="p"
                        color="textSecondary"
                        ml={1}
                        sx={{ textDecoration: "line-through" }}
                    >Rs.1035</Typography>
                </Box>
                <Box display="flex" gap={1}>
                    <Rating
                        name="read-only"
                        size="small"
                        value="3"
                        readOnly
                    />
                    <Typography
                        variant="p"
                        color="textSecondary"
                        mb={10}
                    >(1,235)</Typography>
                </Box>
            </Box>
            <Box display="flex" gap={0} width="100%">
                <Tooltip title="Add to Wishlist" arrow>
                    <Button
                        variant="contained"
                        color="error"
                        fullWidth="true"
                        sx={{
                            width: "40%",
                            borderRadius: "0px",
                        }}
                    ><Heart size={24} /></Button>
                </Tooltip>
                <Tooltip title="Add to cart" arrow >
                    <Button
                        variant="contained"
                        color="success"
                        fullWidth="true"
                        sx={{
                            width: "100%",
                            height: "45px",
                            borderRadius: "0px",
                            gap: "7px"
                        }}
                    ><ShoppingCart size={24} />Add to cart</Button>
                </Tooltip>
            </Box>
        </Card>
    );
};

export default Product_Card;
