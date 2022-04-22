import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './filters.css';

export const LeftFilter=()=> {
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
          <Typography className="changeFilter">
            Low to High
          </Typography>
          <Typography className="changeFilter">
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
            Ascending Order
          </Typography>
          <Typography className="changeFilter">
            Descending Order
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
            Refrigerator
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
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
