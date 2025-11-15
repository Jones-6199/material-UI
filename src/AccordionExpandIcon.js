import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';

export default function AccordionExpandIcon() {
  const [checked, setChecked] = React.useState(false); // ✅ define state
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <Container
        fixed
        style={{
          marginTop: '200px',
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Switch
              {...label}
              checked={checked}
              onChange={handleChange} // ✅ toggle collapse
            />
          </AccordionDetails>
        </Accordion>

        <Collapse in={checked}>
          <div style={{ height: '400px', background: 'orange' }}>
            <h1>hello world</h1>
          </div>
        </Collapse>
      </Container>
    </>
  );
}
