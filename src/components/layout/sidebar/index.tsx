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
import { Search, SearchIconWrapper, AppBar, StyledInputBase, Drawer, DrawerHeader } from '../navbar/utils'; 

import Link from 'next/link';
import { paths } from '../navbar';
interface SideNavProps {
    handleDrawerOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleDrawerClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
    variant: "permanent" | "temporary" | "persistent";
    open: boolean;

}
const theme = useTheme();

const SideNav: React.FC<SideNavProps> = ({variant, open, handleDrawerClose, handleDrawerOpen} ) => {
  return (
<Drawer variant={variant} open={open} >
<div>
  <DrawerHeader>
    <Typography>TopItUpNg</Typography>
    <IconButton onClick={handleDrawerClose}>
      {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </IconButton>
  </DrawerHeader>
  <Divider />

  <Box>
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
  )
}

export default SideNav
