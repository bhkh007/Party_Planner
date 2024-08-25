import React, { useState, useEffect, useContext } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, MenuItem, Menu, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../services/AuthProvider'; // Import the AuthContext
// Ensure this path is correct

const PrimarySearchAppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin status
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const [authState] = useContext(AuthContext); // Access the auth state from context

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      // Check if the user is an admin based on the role in the auth state
      if (authState.user && authState.user.role === 'admin') {
        setIsAdmin(true);
      }
    }
  }, [authState]);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setIsAdmin(false); // Reset admin status
    navigate('/login');
    handleMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isAuthenticated ? (
        <>
          <MenuItem key="profile" onClick={handleMenuClose} component={Link} to="/profile">Profile</MenuItem>
          <MenuItem key="my-account" onClick={handleMenuClose} component={Link} to="/CustomerPage">My Account</MenuItem>
          {isAdmin && ( // Render admin-specific options if user is admin
            <>
              <MenuItem key="all-bookings" onClick={handleMenuClose} component={Link} to="/all-bookings">All Bookings</MenuItem>
              <MenuItem key="request-callback" onClick={handleMenuClose} component={Link} to="/request-callback">Request Callback</MenuItem>
            </>
          )}
          <MenuItem key="logout" onClick={handleLogout}>Logout</MenuItem>
        </>
      ) : (
        <>
          <MenuItem key="login" onClick={handleMenuClose} component={Link} to="/login">Login</MenuItem>
          <MenuItem key="signup" onClick={handleMenuClose} component={Link} to="/signup">Sign Up</MenuItem>
        </>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{ display: { xs: 'flex', sm: 'block' }, flexGrow: 1, fontFamily: 'Pacifico, cursive' }}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Grand Celebrations
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, mr: 2 }}>
            <Button color="inherit" component={Link} to="/about">About Us</Button>
            <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
            <Button color="inherit" component={Link} to="/blogs">Blogs</Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={Link} to="/gallery">
              <ListItemText primary="Gallery" />
            </ListItem>
            <ListItem button component={Link} to="/blogs">
              <ListItemText primary="Blogs" />
            </ListItem>
            {isAuthenticated ? (
              <>
                <ListItem button component={Link} to="/profile">
                  <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button component={Link} to="/my-account">
                  <ListItemText primary="My Account" />
                </ListItem>
                <ListItem button onClick={handleLogout}>
                  <ListItemText primary="Logout" />
                </ListItem>
              </>
            ) : (
              <>
                <ListItem button component={Link} to="/login">
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem button component={Link} to="/signup">
                  <ListItemText primary="Sign Up" />
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default PrimarySearchAppBar;