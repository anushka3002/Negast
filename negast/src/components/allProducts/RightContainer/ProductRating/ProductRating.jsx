import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "../../allProducts.css"

export const ProductRating=({rate})=> {
  return (
    <Stack id="rRatingzindex" spacing={1}>
    <Rating name="half-rating-read" defaultValue={rate} precision={0.5} readOnly />
    </Stack>
  );
}