import React from 'react'
import {
    Typography,
    Avatar,
    Box,
} from "@mui/material";

function Rounded_product() {
  return (
    <Box
        sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: '10px',
            cursor: 'pointer'
        }}
    >
        <Avatar
            src="./assets/gif-error1.gif"
            elevation={3}
            sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "#FFB532",
                borderRadius: "50%",
                margin: "10px"
            }}
        ></Avatar>
        <Typography variant="p" fontSize={12}>
            Product Name
        </Typography>
    </Box>
  )
}

export default Rounded_product