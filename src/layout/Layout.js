import { Outlet, Navigate } from "react-router-dom";
import useIsLoggedIn from "../config/hooks";
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { useState } from "react";

export default function Layout() {

    const [anchorEl, setAnchorEl] = useState(null)
    const isLoggedIn = useIsLoggedIn();

    if (isLoggedIn === null) return <h1>Loading </h1>
    else if (isLoggedIn === false) return <Navigate replace to="/sign-in" />

    return (
        <>
            <AppBar position="apsolute">
                <Toolbar>
                    <Typography variant="h5" sx={{ flexGrow: 1 }}>Home</Typography>
                    <IconButton color="inherit"
                        onClick={(e) => { setAnchorEl(e.currentTarget) }}>
                        <AccountCircleIcon />
                    </IconButton>
                    <Menu
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={() => {
                            setAnchorEl(null)
                        }}
                    >
                        <MenuItem
                            onClick={() => {
                                setAnchorEl(null)
                            }}
                        >
                            Profile
                        </MenuItem  >
                        <MenuItem
                            onClick={() => {
                                setAnchorEl(null)
                            }}
                        >
                            Sign Out
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    )
}