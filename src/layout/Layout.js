import { Outlet, Navigate } from "react-router-dom";
import useIsLoggedIn, { useCurrentUser } from "../config/hooks";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LogOut } from "../redux/authSlice";

export default function Layout() {

    const [anchorEl, setAnchorEl] = useState(null)

    const isLoggedIn = useIsLoggedIn();
    const currentUser = useCurrentUser()

    const dispatch = useDispatch()


    const [profileDialogOpen, setProfileDialogOpen] = useState(false)

    const [confirmSignOutDialogOpen, setConfirmSignOutDialogOpen] = useState(false)

    if (isLoggedIn === null) return <h1>Loading </h1>
    else if (isLoggedIn === false) return <Navigate replace to="/sign-in" />

    return (
        <>
            <AppBar position="apsolute">
                <Toolbar>
                    <Typography variant="h5" sx={{ flexGrow: 1 }}>Dent Calendar</Typography>
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
                                setProfileDialogOpen(true)
                            }}
                        >
                            Profile
                        </MenuItem  >
                        <MenuItem
                            onClick={() => {
                                setAnchorEl(null)
                                setConfirmSignOutDialogOpen(true)
                            }}
                        >
                            Sign Out
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            <Dialog
                open={profileDialogOpen}
                onClose={() => {
                    setProfileDialogOpen(false)
                }}
            >
                <DialogTitle> Profile </DialogTitle>
                <DialogContent dividers>
                    <Box display="flex" alignItems="center" >
                        <Avatar />
                        <Box ml={3}>
                            <Typography>{currentUser?.displayName} </Typography>
                            <Typography>{currentUser?.email} </Typography>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        setProfileDialogOpen(false)
                    }}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={confirmSignOutDialogOpen}
                onClose={() => {
                    setConfirmSignOutDialogOpen(false)
                }}
            >
                <DialogContent>
                    <DialogContentText>
                        Sign Out from "{currentUser?.email}"
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setConfirmSignOutDialogOpen(false)
                            dispatch(LogOut())
                        }}
                    >
                        Sign Out
                    </Button>
                    <Button
                        onClick={() => {
                            setConfirmSignOutDialogOpen(false)
                        }}
                    >Cancel </Button>

                </DialogActions>
            </Dialog>
            <Outlet />
        </>
    )
}