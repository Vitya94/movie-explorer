import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import movieLogo from '../assets/movie.png';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const StyledLink = styled(Link)({
    marginTop: '10px',
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
            <StyledLink to="/">
                movie explorer
            </StyledLink>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default Layout;