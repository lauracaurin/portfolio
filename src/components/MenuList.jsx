import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ColorTabs() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"

       
      >
        <Tab className='prueba' value="home" label="Home" />
        <Tab value="about" label="About" />
        <Tab value="proyects" label="Proyects" />
        <Tab value="contact" label="Contact" />
      </Tabs>
    </Box>
  );
}