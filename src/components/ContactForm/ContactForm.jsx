import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SnackbarAlert from '../SnackbarAlert/SnackbarAlert';
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
import { IoMdReturnLeft } from 'react-icons/io';

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

const formSubmissionKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY; // Access key to send form submissions to gmail accoun

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validFirstName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const [validPhoneNumber, setValidPhoneNumber] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const [open, setOpen] = useState(false); // Trigger alert to open on form submission
  const [successfulSubmission, setSuccessfulSubmission] = useState(false); // Determine which alert to show

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
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
    setFirstName(firstName.trim()) // trim any additional white spaces user might have entered
    if(!firstName)
    {
      setValidFirstName(false)
      isFormValid = false;
    } else {
      setValidFirstName(true)
    }

    setLastName(lastName.trim()) // trim any additional white spaces user might have entered
    if(!lastName)
    {
      setValidLastName(false)
      isFormValid = false;
    } else {
      setValidLastName(true)
    }

    setMessage(message.trim()) // trim any additional white spaces user might have entered
    if(!message)
    {
      setValidMessage(false)
      isFormValid = false;
    } else {
      setValidMessage(true)
    }

    // Check phone number
    // Use a regex expression to check for a valid phone number:
    // Allows for optional country code (1-3 digits and can use a + sign or not)
    // Must then have a 3 digit area code
    // Must then have a 3 digit exhcange number
    // Must then have a 4 digit subscriber number
    // Allows for optional extension number
    // Allows for use of brackets on area code and hyphens or spaces between digits if desired
    setPhoneNumber(phoneNumber.trim()) // trim any additional white spaces user might have entered before validating
    const phoneRegexValidation =
      /^(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *x(\d+))?$/;
    if (!phoneNumber.match(phoneRegexValidation)) {
      setValidPhoneNumber(false);
      isFormValid = false;
    } else {
      setValidPhoneNumber(true);
    }

    // Check email
    // Use a regex expression to check for a valid email:
    // Must have 1 or more alphanumeric characters (allows for a dot or hyphen as well) before an @ sign
    // Must then 1 or more alphanumeric characters before (not allowing for a dot or hyphen) before a .
    // Must be followed by a domain which only has letters and is between 2-10 characters long
    setEmail(email.trim()) // trim any additional white spaces user might have entered before validating
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

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      axios.post("https://api.web3forms.com/submit", {
        access_key: formSubmissionKey,
        subject: "New message from TFK Website",
        email: email,
        name: firstName + " " + lastName,
        message: message,
      })
      .then((response) => {
        if (response.status === 200) {
          setOpen(true);
          setSuccessfulSubmission(true);
          setTimeout(() => {
            navigate("/")
          }, 4000);
        } else {
            setOpen(true);
            setSuccessfulSubmission(false);
        }
      })
      .catch((error) => {
        setOpen(true),
        setSuccessfulSubmission(false),
        console.error(error);
      })
    }
  };

  return (
    <main className="contact">
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
                    id="phoneNumber"
                    label="Phone Number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChangePhoneNumber}
                    error={!validPhoneNumber}
                    helperText={!validPhoneNumber ? "Please enter a valid phone number" : ""}
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
      <SnackbarAlert open={open} setOpen={setOpen} successfulSubmission={successfulSubmission}/>
    </main>
  );
}

export default ContactForm;