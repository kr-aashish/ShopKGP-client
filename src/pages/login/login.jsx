import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { Copyright } from "../signup/SignUp";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../user_context/Context";
import {
  LoginError,
  LoginStart,
  LoginSuccess,
} from "../../user_context/Action";
import Logo from "../../components/Logo";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";
import { FcGoogle } from 'react-icons/fc';
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import { LoginSocialFacebook, LoginSocialInstagram} from 'reactjs-social-login';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

export default function SignInSide() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(-1);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(-1);
  };

  const goToPath = (path) => {
    navigate(path);
  };
  const { user_dispatch, state } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    user_dispatch(LoginStart());
    const data = new FormData(event.currentTarget);
    try {
      const email = data.get("email");
      const password = data.get("password");

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email,
        password,
      });

      if (res.status === 200) {
        setOpen(0);
        user_dispatch(LoginSuccess({ token: res.data.token, metadata: res.data }));
      } else {
        setOpen(1);
        user_dispatch(LoginError(null));
      }
    } catch (err) {
      setOpen(1);
    }
  };

  const handleSocialLogin = async (email) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/social`, {
      email
    });

    if (res.status === 200) {
      setOpen(0);
      user_dispatch(LoginSuccess({ token: res.data.token, metadata: res.data }));
    } else {
      setOpen(1);
      user_dispatch(LoginError(null));
    }
  }

  const handleGoogleLogin = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyCHc8nkBgQ6Y82Uz07mS4M9HhBvTceMIrw",
      authDomain: "shopkgp.firebaseapp.com",
      projectId: "shopkgp",
      storageBucket: "shopkgp.appspot.com",
      messagingSenderId: "606043630129",
      appId: "1:606043630129:web:0e98c4505a46dd1d6f0310",
      measurementId: "G-BJWT63JVYB"
    };

    const firebaseApp = new initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          handleSocialLogin(result.user.email)
        })
        .catch((error) => {
          console.log(error);
        })
  }

  const errorMessage = () => {
    switch (open) {
      case 0:
        return (
          <Snackbar
            open={open === 0}
            autoHideDuration={4000}
            onClose={handleClose}
          >
            <Alert
              severity="success"
              onClose={handleClose}
              sx={{ width: "100%" }}
            >
              Successfully loggedIn!
            </Alert>
          </Snackbar>
        );

      case 1:
        return (
          <Snackbar
            open={open === 1}
            autoHideDuration={4000}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            onClose={handleClose}
          >
            <Alert
              severity="error"
              onClose={handleClose}
              sx={{ width: "100%" }}
            >
              Something went wrong! Please try again.
            </Alert>
          </Snackbar>
        );
      default:
        return <></>;
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      {errorMessage()}
      <Grid
        item
        xs={false}
        sm={false}
        md={7}
        sx={{
          backgroundImage:
            "url(https://neilpatel.com/wp-content/uploads/2017/12/ecommerce-seo-tips.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        pt={10}
        component={Paper}
        elevation={6}
        square
      >
        <Logo />
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main", height: "3.5rem", width: '3.5rem'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

            <Box
                sx={{
                  // my: 8,
                  // mx: 4,
                  mt: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
            >
              <Typography component="h1" variant="h5">
                Social Login
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', m: 2, justifyContent: 'center', mt: 1}}>

              <Button sx={{fontSize: "3.5rem" }} onClick={handleGoogleLogin}>
                <FcGoogle/>
              </Button>

              <LoginSocialFacebook
                 appId="3646147145671813"
                 onResolve={(response) => {
                   console.log(response.data.email);
                   handleSocialLogin(response.data.email)
                 }}
                 onReject={(error) => {
                   console.log(error);
                 }}
              >
                <Button>
                  <img src={facebook} style={{ height: "3.5rem" }}/>
                </Button>
              </LoginSocialFacebook>

              <LoginSocialInstagram
                  client_id='1676187482836082'
                  client_secret='8ed95b1e49476a13bd13e7c57c65c9b4'
                  redirect_uri='https://shopkgp.netlify.app/'
                  scopes={['user_profile', 'user_media']}
                  onResolve={(response) => {
                    console.log(response);
                    // handleSocialLogin(response.data.email)
                  }}
                  onReject={(err) => {
                    console.log(err);
                  }}
              >
                <Button>
                  <img src={instagram} style={{ height: "3.5rem" }}/>
                </Button>
              </LoginSocialInstagram>

            </Box>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
