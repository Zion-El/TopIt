import * as React from 'react';
import {useState, useEffect, ReactNode} from 'react'
import { styled, useTheme, Theme, alpha, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Search, SearchIconWrapper, AppBar, StyledInputBase, Drawer, DrawerHeader } from './utils';
import UserIcon from './UserIcon';
import Link from 'next/link';


interface DrawerProps{
  children: ReactNode
}

const MiniDrawer:React.FC<DrawerProps> = ({children}) => {

  const [variant, setVariant] = useState<'permanent' | 'temporary' | 'persistent' | undefined>('permanent');
  const [displaySearch, setDisplaySearch] = useState("block")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVariant('temporary'); 
      } else {
        setVariant('permanent'); 
      }
      if (window.innerWidth < 450) {
        setDisplaySearch('none'); 
      } else {
        setDisplaySearch('block'); 
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed"  open={open}>
        <Toolbar sx={{width:"100%", display:"flex", justifyContent:"space-between"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Search sx={{display: displaySearch}}>
           <SearchIconWrapper>
               <SearchIcon />
             </SearchIconWrapper>
             <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box>
            <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            <UserIcon/>
          </Box>

        </Toolbar>
      </AppBar>
        <Drawer variant={variant} open={open} onClose={handleDrawerClose}>
          <div>
            <DrawerHeader>
              <Typography>TopItUpNg</Typography>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />

            <Box onClick={handleDrawerOpen}>
              <List>
                {paths.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                      <ListItemButton
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                          }}
                        >
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }}>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Box>
          </div>
        </Drawer>        


      <Box component="main" onClick={handleDrawerClose} sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}

export default MiniDrawer


export const paths = [
  {
      name: "Home",
      link: "/dashboard",
      icon: ""//<Icon icon="tabler:home" width="30" />
  },
  {
      name: "Ride",
      link: "/ride",
      icon: ""//<Icon icon="gis:car" width="30" />
  },
  {
      name: "Wallet",
      link: "/wallet",
      icon: ""//<Icon icon="uil:wallet" width="30" />
  },
  {
      name: "Account",
      link: "/account",
      icon: ""//<Icon icon="codicon:account" width="30" />
  },
]