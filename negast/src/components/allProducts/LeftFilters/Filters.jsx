import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './filters.css';
import {useDispatch,useSelector} from 'react-redux';
import {useEffect,useState} from 'react';
import {SortingASC_Products,SortingDESC_Products,CategoriesBlock,BrandBlock} from "../../../redux/products/action"

export const LeftFilter=()=> {
  const dispatch = useDispatch();

  const sortingProductASC=()=>{
    dispatch(SortingASC_Products())
  }

  const sortingProductDESC=()=>{
    dispatch(SortingDESC_Products())
  }

  const handleCategory=(value)=>{
    dispatch(CategoriesBlock(value))
  }

  const handleBrand=(value)=>{
    dispatch(BrandBlock(value))
  }
  return (
    <div style={{position:"fixed"}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="changeFilter" onClick={()=>sortingProductASC()}>
            Low to High
          </Typography>
          <Typography className="changeFilter" onClick={()=>sortingProductDESC()}>
            High to Low
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="changeFilter">
            A - Z
          </Typography>
          <Typography className="changeFilter">
            Z - A
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="changeFilter" onClick={()=>handleCategory("Laptop")}>
            Laptop
          </Typography>
          <Typography className="changeFilter" onClick={()=>handleCategory("Television")}>
            Television
          </Typography>
          <Typography className="changeFilter" onClick={()=>handleCategory("Mobile")}>
            Mobile
          </Typography>
          <Typography className="changeFilter" onClick={()=>handleCategory("Washing Machine")}>
            Washing Machine
          </Typography>
          <Typography className="changeFilter" onClick={()=>handleCategory("Refrigerators")}>
            Refrigerators
          </Typography>
          <Typography className="changeFilter" onClick={()=>handleCategory("AC")}>
            AC
          </Typography>
          <Typography className="changeFilter" onClick={()=>handleCategory("Headphones")}>
            HeadPhones
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Brands</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="changeFilter" onClick={()=>handleBrand("Apple")}>
            Apple
          </Typography>
          <Typography className="changeFilter" onClick={()=>handleBrand("Samsung")}>
            Samsung
          </Typography>
          <Typography className="changeFilter" onClick={()=>handleBrand("LG")}>
            LG
          </Typography>
          <Typography className="changeFilter" onClick={()=>handleBrand("Sony")}>
            Sony
          </Typography>
          <Typography className="changeFilter" onClick={()=>handleBrand("Lenovo")}>
            Lenovo
          </Typography>
          <Typography className="changeFilter" onClick={()=>handleBrand("Realme")}>
            Realme
          </Typography>
          <Typography className="changeFilter" onClick={()=>handleBrand("Redmi")}>
            Xiomi MI
          </Typography>
          <Typography className="changeFilter" onClick={()=>handleBrand("ASUS")}>
            Asus
          </Typography>
          </AccordionDetails>
          </Accordion>
          </div>
          );
        }
        