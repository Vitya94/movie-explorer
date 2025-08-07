import React from 'react';
import { TextField } from '@mui/material';

const Suggestion = () => {
  return (
    <>
      <TextField id="search" placeholder="Search" fullWidth variant="standard" sx={{ my: 5 }} />
    </>
  );
};

export default Suggestion;
