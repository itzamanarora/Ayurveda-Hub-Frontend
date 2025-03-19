import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Stack 
      spacing={2}
      sx={{
        margin: "1% 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Pagination
        count={10} 
        hidePrevButton 
        hideNextButton 
        // onPageChange={}
      />
    </Stack>
  );
};

export default pagination;