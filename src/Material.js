import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';


export default function Material() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
          <Container fixed maxWidth='sm' >

        

    <Stack direction="row" spacing={2} style={{background:'grey'}} >
      <Button 
       color="secondary">Secondary</Button>
      <Button variant="contained" color="primary">
        Success
      </Button>
      <Button style={{
        background:'primary',
        color:'white',

      }} variant="outlined" color="secondary">
        Error
      </Button>
      <Checkbox {...label} />
          <Stack spacing={1} sx={{ alignItems: 'center' }}>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
      </Stack>
    </Stack>

    </Stack>
    </Container>
  );
}