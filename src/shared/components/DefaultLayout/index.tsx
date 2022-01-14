import { Box, Container } from '@mui/material';
import React, { ReactElement } from 'react';
import Navbar from '../Navbar';

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Box height={'100vh'} display={'flex'} flexDirection={'column'}>
        <Navbar />
        <Box component={'main'} height={'100%'}>
          <Container sx={{ pt: '2em', height: '100%', display: 'flex'}}>
            {children}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default DefaultLayout;