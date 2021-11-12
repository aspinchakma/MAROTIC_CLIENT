import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyOrders from './MyOrders/MyOrders';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import './Dashboard.css';
import Pay from './Pay/Pay';
import ManageAll from './ManageAll/ManageAll';
import AddProduct from './AddProduct/AddProduct';
import AddReview from './AddReview/AddReview';
import Welcome from './Welcome/Welcom';
import useAuth from './../../utilities/hooks/useAuth';
import AdminRoute from '../../utilities/AdminRoute/AddminRoute';
import UserRoute from '../../utilities/UserRoute/UserRoute';



const drawerWidth = 240;

function Dashboard(props) {
    const { handleLogOut } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { isAdmin } = useAuth();



    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <div>
            <Toolbar />
            <div className="mini_admin_panel_container">
                <Link to="/">Back To Home</Link>
                {!isAdmin && <Link to={`${url}/myOrders`}>My Orders</Link>}
                {!isAdmin && <Link to={`${url}/pay`}>Pay</Link>}
                {isAdmin && <Link to={`${url}/manageAll`}>Manage All</Link>}
                {!isAdmin && <Link to={`${url}/review`}>Add Review</Link>}
                {isAdmin && <Link to={`${url}/addProduct`}>Add Product</Link>}
                {isAdmin && <Link to={`${url}/makeAdmin`}>Make Admin</Link>}
                <button onClick={handleLogOut} className="dashboard_log_out_button">Log Out <i className="fas fa-sign-out-alt log_out_icon"></i></button>
            </div>



        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {/* content here  */}
                <Switch>
                    <Route exact path={path}>
                        <Welcome></Welcome>
                    </Route>
                    <UserRoute path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </UserRoute>
                    <UserRoute path={`${path}/pay`}>
                        <Pay></Pay>
                    </UserRoute>
                    <AdminRoute path={`${path}/manageAll`}>
                        <ManageAll></ManageAll>
                    </AdminRoute>
                    <UserRoute path={`${path}/review`}>
                        <AddReview></AddReview>
                    </UserRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>

                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>

                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;