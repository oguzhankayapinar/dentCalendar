import React from 'react'
import { TextField, CssBaseline, Button, Box, Container, Link, Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { changeEmail, changePassword } from '../redux/authSlice';
import { useSelector, useDispatch } from "react-redux"

function SignIn() {

    const email = useSelector(state => state.auth.email);
    const password = useSelector(state => state.auth.password);

    const dispatch = useDispatch()

    const handleEmailChange = (e) => {
        dispatch(changeEmail(e.currentTarget.value))
    };

    const handlePasswordChange = (e) => {
        dispatch(changePassword(e.currentTarget.value))
    };

    return (
        <>
            <CssBaseline />
            <Container maxWidth="xs">
                <Box component="form" sx={{ mt: 8 }} >
                    <Avatar sx={{ mx: "auto", bgcolor: "primary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h4' sx={{ textAlign: "center" }}> Sign In </Typography>
                    <TextField
                        margin='normal'
                        fullWidth
                        required
                        autoComplete='email'
                        label="Email"
                        autoFocus
                        value={email}
                        onChange={handleEmailChange}

                    />
                    <TextField
                        margin='normal'
                        fullWidth
                        required
                        label="Password"
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        fullWidth
                        sx={{ mt: 2 }}
                    >Sign in
                    </Button>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        mt: 1
                    }}>
                        <Link>Forgot Password</Link>

                        <Link>Don't have an account ? Sign Up </Link>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default SignIn