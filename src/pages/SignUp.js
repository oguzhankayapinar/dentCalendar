import React from 'react'
import { TextField, Button, Box, Container, Link, Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeEmail, changePassword, register } from '../redux/authSlice';
import { Link as RouterLink } from "react-router-dom"


function SignUp() {

    const name = useSelector(state => state.auth.name);
    const email = useSelector(state => state.auth.email);
    const password = useSelector(state => state.auth.password);
    const isLoading = useSelector(state => state.auth.isLoading);
    const error = useSelector(state => state.auth.error);

    const dispatch = useDispatch()

    const handleNameChange = (e) => {
        dispatch(changeName(e.currentTarget.value))
    };

    const handleEmailChange = (e) => {
        dispatch(changeEmail(e.currentTarget.value))
    };

    const handlePasswordChange = (e) => {
        dispatch(changePassword(e.currentTarget.value))
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register({ name, email, password }))
    };

    return (
        <Container maxWidth="xs">
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 8 }} >
                <Avatar sx={{ mx: "auto", bgcolor: "primary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h4' sx={{ textAlign: "center" }}> Sign Up </Typography>
                {error && (<Typography sx={{ textAlign: "center", color: "error.main" }}> {error} </Typography>)}
                <TextField
                    fullWidth
                    margin='normal'
                    label="Full Name"
                    required
                    autoComplete='name'
                    autoFocus
                    value={name}
                    onChange={handleNameChange}
                />

                <TextField
                    margin='normal'
                    fullWidth
                    required
                    autoComplete='email'
                    label="Email"
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
                    disabled={isLoading}
                >
                    {isLoading ? "Loading ..." : "Sign Up"}

                </Button>

                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2
                }}>
                    <Link component={RouterLink} to="/sign-in">Already an account? Sign In </Link>
                </Box>

            </Box>
        </Container>
    )
}

export default SignUp