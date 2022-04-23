import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './filters.css';
import {useDispatch,useSelector} from 'react-redux';
import {useEffect,useState} from 'react';
import {SortingASC_Products,SortingDESC_Products} from "../../../redux/products/action"

export const LeftFilter=()=> {
  const dispatch = useDispatch();

  const sortingProductASC=()=>{
<<<<<<< Updated upstream
    dispatch(SortingASC_Products())
=======
    console.log("helllo")
    dispatch(SortingASC_Products)
>>>>>>> Stashed changes
  }

  const sortingProductDESC=()=>{
    dispatch(SortingDESC_Products())
  }
  return (
    <div>
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
          <Typography className="changeFilter">
            Laptop
          </Typography>
          <Typography className="changeFilter">
            Television
          </Typography>
          <Typography className="changeFilter">
            Mobile
          </Typography>
          <Typography className="changeFilter">
            Washing Machine
          </Typography>
          <Typography className="changeFilter">
            Refrigerators
          </Typography>
          <Typography className="changeFilter">
            AC
          </Typography>
          <Typography className="changeFilter">
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
          <Typography className="changeFilter">
            Apple
          </Typography>
          <Typography className="changeFilter">
            Samsung
          </Typography>
          <Typography className="changeFilter">
            LG
          </Typography>
          <Typography className="changeFilter">
            Sony
          </Typography>
          <Typography className="changeFilter">
            Lenovo
          </Typography>
          <Typography className="changeFilter">
            Sony
          </Typography>
          <Typography className="changeFilter">
            Xiomi MI
          </Typography>
          <Typography className="changeFilter">
            Realme
          </Typography>
          <Typography className="changeFilter">
            Asus
          </Typography>
          </AccordionDetails>
          </Accordion>
          </div>
          );
        }
        