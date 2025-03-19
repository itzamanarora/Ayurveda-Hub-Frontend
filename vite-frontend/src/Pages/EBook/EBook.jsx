import React from 'react'


function EBook() {
    return (
        <>
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
                        fontSize: { xs: 8, sm: 12, md: 14 },
                        height: { xs: 30, sm: 35, md: 40 }
                    }}
                // label="Age"
                // onChange={handleChange}
                >
                    <MenuItem
                        value={10}
                        sx={{
                            fontSize: { xs: 8, sm: 12, md: 14 },
                        }}
                    >BESTSELLER</MenuItem>
                    <MenuItem
                        value={20}
                        sx={{
                            fontSize: { xs: 8, sm: 12, md: 14 },
                        }}
                    >PRICE (LOWEST FIRST)</MenuItem>
                    <MenuItem
                        value={30}
                        sx={{
                            fontSize: { xs: 8, sm: 12, md: 14 },
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
                    padding: { xs: 2, sm: 4, md: 6 },
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
        </>
    )
}

export default EBook