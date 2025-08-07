import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { styled } from '@mui/system';
import Suggestion from './Suggestion';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
  maxWidth: '300px',
  textAlign: 'center',
  textTransform: 'uppercase',
  color: 'white',
  fontSize: '2rem',
  fontWeight: 'bold',
  fontFamily: 'Roboto',
  fontStyle: 'italic',
  '&:hover': {
    color: 'pink',
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ p: 3 }}>
        <StyledLink to="/">movie explorer</StyledLink>
        <CssBaseline />
        <Suggestion />
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
