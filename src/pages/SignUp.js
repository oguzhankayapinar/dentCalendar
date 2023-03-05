import React from 'react'
import { TextField, CssBaseline, Button, Box, Container, Link, Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"

function SignUp() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="xs">
                <Box component="form" sx={{ mt: 8 }} >
                    <Avatar sx={{ mx: "auto", bgcolor: "primary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h4' sx={{ textAlign: "center" }}> Sign Up </Typography>

                    <TextField
                        fullWidth
                        margin='normal'
                        label="Full Name"
                        required
                        autoComplete='name'
                        autoFocus
                    />

                    <TextField
                        margin='normal'
                        fullWidth
                        required
                        autoComplete='email'
                        label="Email"

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
                    >Sign Up
                    </Button>

                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 2
                    }}>
                        <Link>Already an account? Sign In </Link>
                    </Box>

                </Box>
            </Container>
        </>
    )
}

export default SignUp