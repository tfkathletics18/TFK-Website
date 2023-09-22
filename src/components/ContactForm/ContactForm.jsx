import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme({
    typography: {
        fontFamily: [
            'Poppins'
        ],
        fontSize: 16,
    },
    palette: {
        primary: {
            main: '#A50113',
        },
    },
});

const focusColour = {
  "& label.Mui-focused": {
    color: "black"
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "black"
    }
  }
}

const formSubmissionKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validFirstName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const validateForm = () => {
    // Variable to check if form is valid
    let isFormValid = true;

    // Check that these fields at least contain a value
    if(!firstName)
    {
      setValidFirstName(false)
      isFormValid = false;
    } else {
      setValidFirstName(true)
    }

    if(!lastName)
    {
      setValidLastName(false)
      isFormValid = false;
    } else {
      setValidLastName(true)
    }

    if(!message)
    {
      setValidMessage(false)
      isFormValid = false;
    } else {
      setValidMessage(true)
    }

    // Check email
    // Use a regex expression to check for a valid email:
    // Must have 1 or more alphanumeric characters (allows for a dot or hyphen as well) before an @ sign
    // Must then 1 or more alphanumeric characters before (not allowing for a dot or hyphen) before a .
    // Must be followed by a domain which only has letters and is between 2-10 characters long
    const emailRegexValidation =
      /^([a-zA-Z\d.-]+)@([a-zA-Z\d]+)\.([a-zA-z]{2,10})$/;
    if (!email.match(emailRegexValidation)) {
      setValidEmail(false);
      isFormValid = false;
    } else {
      setValidEmail(true);
    }

    // Check that every field is valid
    return isFormValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      axios.post("https://api.web3forms.com/submit", {
        access_key: formSubmissionKey,
        subject: "New message from TFK Website",
        email: email,
        name: firstName + " " + lastName,
        message: message,
      }).then(
        console.log({
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
      })
      ).catch((error) => {
        console.error(error);
      })
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <ContactMailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={focusColour}
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={handleChangeFirstName}
                  error={!validFirstName}
                  helperText={!validFirstName ? "Please enter a name" : ""}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={focusColour}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={handleChangeLastName}
                  error={!validLastName}
                  helperText={!validLastName ? "Please enter a name" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={focusColour}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={handleChangeEmail}
                  error={!validEmail}
                  helperText={!validEmail ? "Please enter a valid email" : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={focusColour}
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  id="message"
                  multiline
                  minRows={3}
                  value={message}
                  onChange={handleChangeMessage}
                  error={!validMessage}
                  helperText={!validMessage ? "Please enter a message" : ""}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default ContactForm;