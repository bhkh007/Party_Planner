import React, { useState, useEffect } from 'react';
import { AppBar, Box, Toolbar, IconButton, MenuItem, Menu, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import "../cssfiles/navbar.css"; // Import the CSS file
import logo from '../src/assets/logo.png';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
      setIsAuthenticated(true);
      setRole(user.role);
    }
  }, []);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setRole(null);
    navigate('/login');
    handleMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isAuthenticated ? (
        role === 'admin' ? (
          <>
            <MenuItem onClick={handleMenuClose} component={Link} to="/bookings">Bookings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleMenuClose} component={Link} to="/MyBookings">My Bookings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </>
        )
      ) : (
        <>
          <MenuItem onClick={handleMenuClose} component={Link} to="/login">Login</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} to="/signup">Sign Up</MenuItem>
        </>
      )}
    </Menu>
  );

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="upper-nav">
          <img alt="logo" className="logo" src={logo} />
          <Typography
            variant="h6"
            noWrap
            sx={{ display: { xs: 'none', sm: 'block' }, fontFamily: 'Pacifico, cursive' }}
            style={{ textDecoration: 'none' }}
          >
            <Link style={{ textDecoration: 'none', color:"#3b71ca", fontSize:"30px" }} to="/">
              Grand Celebrations
            </Link>
          </Typography>
          <Box sx={{ display: 'flex',alignItems:"center",gap:"0.7rem" }}>
            <Link className="nav-link" to="/aboutus">About Us</Link>
            <Link className="nav-link" to="/#services">Services</Link>
            <Link className="nav-link" to="/#faqs">FAQs</Link>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </div>
      </div>
      {renderMenu}
    </nav>
  );
};

export default Navbar;
