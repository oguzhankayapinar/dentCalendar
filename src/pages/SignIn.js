import React from 'react'
import { TextField, CssBaseline, Button, Box, Container, Link, Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"

function SignIn() {
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
                    />
                    <TextField
                        margin='normal'
                        fullWidth
                        required
                        label="Password"
                        type='password'
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