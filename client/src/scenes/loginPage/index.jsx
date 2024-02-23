import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Promptopia
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Promptopia, the Social Media for Sociopaths!
        </Typography>
        <Form /> 
      </Box>
      <Box
       position="fixed"
       bottom="12rem"
       right="16rem"
       border={1}
       borderColor="black"
       borderRadius="1rem"
       p="0.5rem"
       textAlign="center"
       width="150px" 
       boxShadow="0px  0px  10px rgba(0,  0,  0,  0.2)">
        <Typography variant="body1">
          Credentials:
        </Typography>
        <Typography variant="body2">
          Email: test@gmail.com
        </Typography>
        <Typography variant="body2">
          Password:  12345
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;