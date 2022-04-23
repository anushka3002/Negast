import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "../../SellerallProducts.css"

export const SellerProductRating=({rate})=> {
  return (
    <Stack id="rRatingzindex" spacing={1}>
    <Rating name="half-rating-read" defaultValue={rate} precision={0.5} readOnly />
    </Stack>
  );
}