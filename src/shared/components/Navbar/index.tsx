import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography
} from '@mui/material';
import React, { useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { useAuth } from '../../../hooks';

const Navbar = () => {
  const { onLogout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const authButtons = useCallback(() => {
    if (!isLoggedIn) {
      return (
        <>
          <Button
            color="inherit"
            variant="outlined"
            type="button"
            onClick={() => navigate(ROUTES.login)}
          >
            Login
          </Button>
        </>
      );
    }

    return (
      <Button
        type="button"
        color="warning"
        variant="contained"
        onClick={() => onLogout()}
      >
        Sign Out
      </Button>
    );
  }, [isLoggedIn, navigate, onLogout]);

  return (
    <AppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
            React
          </Typography>
          <Box
            display="flex"
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'100%'}
          >
            <Box mx={'auto'}>
              <Typography
                component={NavLink}
                to={ROUTES.main}
                color={'white'}
                sx={{textDecoration: 'none'}}
              >
                Home
              </Typography>
            </Box>
            {authButtons()}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
