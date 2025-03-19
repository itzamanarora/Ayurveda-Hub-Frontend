import Product_card from '../../Components/Products/Product_card'
import Loading_ProductCard from '../../Components/Loading/Products Card/Loading_ProductCard';
import Mid_Bar from '../../Components/Mid-bar/Mid_Bar';
import Pagination from '../../Components/Pagination/Pagination';
import Line from '../../Components/Mid-bar/Line';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rounded_product from '../../Components/Products/Rounded_product';
import { Box } from "@mui/material";
import Loading_Rounded_product from '../../Components/Loading/Products Card/Loading_Rounded_product';

function Skin() {
  return (
    <>
      <Mid_Bar text={'Items Loading'} />
      <div className='outer-container'>
        <Box
          display='flex'
          width='100%'
          sx={{
            backgroundColor: "#FFF7E2",
            justifyContent: 'center',
          }}
        >
          <Loading_Rounded_product />
          <Loading_Rounded_product />
          <Loading_Rounded_product />
          <Loading_Rounded_product />
          <Loading_Rounded_product />
        </Box>
      
        <FormControl
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginBottom: "1%",
            marginTop: "3%",
            width: "100%",
          }}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            sx={{
              marginRight: "7.5%",
              fontSize: {xs: 8, sm: 12, md: 14},
              height: {xs: 30, sm: 35, md: 40}
            }}
          // label="Age"
          // onChange={handleChange}
          >
            <MenuItem 
              value={10}
              sx={{
                fontSize: {xs: 8, sm: 12, md: 14},
              }}
            >BESTSELLER</MenuItem>
            <MenuItem 
              value={20}
               sx={{
                fontSize: {xs: 8, sm: 12, md: 14},
              }}
            >PRICE (LOWEST FIRST)</MenuItem>
            <MenuItem 
              value={30}
              sx={{
                fontSize: {xs: 8, sm: 12, md: 14},
              }}
              >PRICE (HIGHEST FIRST)</MenuItem>
          </Select>
        </FormControl>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: '30px',
            flexWrap: 'wrap',
            padding: {xs: 2, sm: 4, md: 6},
            marginBottom: "5%",
            marginTop: "3%",
          }}>
          <Loading_ProductCard />
          <Loading_ProductCard />
          <Loading_ProductCard />
          <Loading_ProductCard />
          <Loading_ProductCard />
          <Product_card />
          <Product_card />
          <Product_card />
          <Product_card />
          <Product_card />
        </Stack>
        <Line />
        <div className='pagination'>
          <Pagination currentPage={1} totalPages={4} onPageChange={10} />
        </div>
      </div>
    </>
  )
}

export default Skin