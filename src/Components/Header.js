import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-scroll";

const drawerWidth = 240;

export default function Header(props){
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
        ASHWIN GUPTA
        </Typography>
        <Divider />
        <List>
            <ListItem disablePadding>
            <ListItemButton style={{ display:'flex', justifyContent:'center' }}>
                <Link to="about" spy={true} smooth={true} offset={0} duration={1000}>
                    <ListItemText onClick={handleDrawerToggle} primary="Home" />
                </Link>
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton style={{ display:'flex', justifyContent:'center' }}>
                <Link to="education" spy={true} smooth={true} offset={0} duration={1200}>
                    <ListItemText onClick={handleDrawerToggle} primary="Education" />
                </Link>
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton style={{ display:'flex', justifyContent:'center' }}>
                <Link to="skills" spy={true} smooth={true} offset={0} duration={1500}>
                    <ListItemText onClick={handleDrawerToggle} primary="Skills" />
                </Link>
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton style={{ display:'flex', justifyContent:'center' }}>
                <Link to="projects" spy={true} smooth={true} offset={0} duration={2000}>
                    <ListItemText onClick={handleDrawerToggle} primary="Projects" />
                </Link>
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton style={{ display:'flex', justifyContent:'center' }}>
                <Link to="achievements" spy={true} smooth={true} offset={0} duration={2000}>
                    <ListItemText onClick={handleDrawerToggle} primary="Achievements" />
                </Link>
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton style={{ display:'flex', justifyContent:'center' }}>
                <Link to="footer" spy={true} smooth={true} offset={0} duration={2000}>
                    <ListItemText onClick={handleDrawerToggle} primary="Contact" />
                </Link>
            </ListItemButton>
            </ListItem>
        </List>
    </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return(
        <div>
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav" position='fixed' style={{backgroundColor:'#e84393'}}>
                    <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily:'serif', fontWeight:600 }}
                    >
                        ASHWIN GUPTA
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Button sx={{ color: '#fff', margin:2 }}>
                            <Link to="about" spy={true} smooth={true} offset={0} duration={1000}>Home</Link>
                        </Button>
                        <Button sx={{ color: '#fff', margin:2 }}>
                            <Link to="education" spy={true} smooth={true} offset={0} duration={1200}>Education</Link>
                        </Button>
                        <Button sx={{ color: '#fff', margin:2 }}>
                            <Link to="skills" spy={true} smooth={true} offset={15} duration={1500}>Skills</Link>
                        </Button>
                        <Button sx={{ color: '#fff', margin:2 }}>
                            <Link to="projects" spy={true} smooth={true} offset={15} duration={2000}>Projects</Link>
                        </Button>
                        <Button sx={{ color: '#fff', margin:2 }}>
                            <Link to="achievements" spy={true} smooth={true} offset={15} duration={2500}>Achievements</Link>
                        </Button>
                        <Button sx={{ color: '#fff', margin:2 }}>
                            <Link to="footer" spy={true} smooth={true} offset={0} duration={2000}>Contact</Link>
                        </Button>
                    </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height: '380px' },
                    }}
                    >
                    {drawer}
                    </Drawer>
                </Box>
            </Box>
        </div>
    )
}