"use client";

import * as React from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  FormControl,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <>
      <Box
        className="auth-main-wrapper sign-in-area"
        sx={{
          py: { xs: "60px", md: "80px", lg: "100px", xl: "135px" },
        }}
      >
        <Box
          sx={{
            maxWidth: { sm: "500px", md: "1255px" },
            mx: "auto !important",
            px: "12px",
          }}
        >
          <Grid
            container
            alignItems="center"
            columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 3 }}
          >
            <Grid item xs={12} md={6} lg={6} xl={7}>
              <Box
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                <img
                  src="/images/sign-in.jpg"
                  alt="sign-in-image"
                  width={646}
                  height={804}
                  style={{
                    borderRadius: "24px",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={6} xl={5}>
              <Box
                className="form-content"
                sx={{
                  paddingLeft: { xs: "0", lg: "10px" },
                }}
              >
                <Box
                  className="logo flex items-center gap-3"
                  sx={{
                    mb: "23px",
                  }}
                >
                  <img
                    src="/icon.png"
                    alt="logo"
                    width={60}
                    height={60}
                  />
                  <Typography
                    variant="h1"
                    className="text-black"
                    sx={{
                      fontSize: { xs: "22px", sm: "25px", lg: "28px" },
                      fontWeight: "600",
                    }}
                  >
                    Timeflow
                  </Typography>
                </Box>

                <Box
                  className="title"
                  sx={{
                    mb: "23px",
                  }}
                >
                  <Typography
                    variant="h1"
                    className="text-black"
                    sx={{
                      fontSize: { xs: "22px", sm: "25px", lg: "28px" },
                      mb: "7px",
                      fontWeight: "600",
                    }}
                  >
                    Bentornati su Timeflow!
                  </Typography>

                  <Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
                    Effettua il login con le tue credenziali di accesso per continuare!
                  </Typography>
                </Box>

{/*                 <Box
                  className="with-socials"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    gap: "5px",
                    mb: "20px",
                  }}
                >
                  <Button
                    variant="outlined"
                    className="border bg-white"
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      padding: "10.5px 20px",
                    }}
                  >
                    <img
                      src="/images/icons/google.svg"
                      alt="google"
                      width={25}
                      height={25}
                    />
                  </Button>

                  <Button
                    variant="outlined"
                    className="border bg-white"
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      padding: "10.5px 20px",
                    }}
                  >
                    <img
                      src="/images/icons/facebook2.svg"
                      alt="facebook"
                      width={25}
                      height={25}
                    />
                  </Button>

                  <Button
                    variant="outlined"
                    className="border bg-white"
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      padding: "10.5px 20px",
                    }}
                  >
                    <img
                      src="/images/icons/apple.svg"
                      alt="apple"
                      width={25}
                      height={25}
                    />
                  </Button>
                </Box>
 */}
                <Box component="form">
                  <Box mb="15px">
                    <FormControl fullWidth>
                      <Typography
                        component="label"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "10px",
                          display: "block",
                        }}
                        className="text-black"
                      >
                        Email 
                      </Typography>

                      <TextField
                        label="email&#64;timeflow.com"
                        variant="filled"
                        id="email"
                        name="email"
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                          },
                          "& .MuiInputBase-root::before": {
                            border: "none",
                          },
                          "& .MuiInputBase-root:hover::before": {
                            border: "none",
                          },
                        }}
                      />
                    </FormControl>
                  </Box>

                  <Box mb="15px">
                    <FormControl fullWidth>
                      <Typography
                        component="label"
                        sx={{
                          fontWeight: "500",
                          fontSize: "14px",
                          mb: "10px",
                          display: "block",
                        }}
                        className="text-black"
                      >
                        Password
                      </Typography>

                      <TextField
                        label="Inserisci la Password"
                        variant="filled"
                        type="password"
                        id="password"
                        name="password"
                        sx={{
                          "& .MuiInputBase-root": {
                            border: "1px solid #D5D9E2",
                            backgroundColor: "#fff",
                            borderRadius: "7px",
                          },
                          "& .MuiInputBase-root::before": {
                            border: "none",
                          },
                          "& .MuiInputBase-root:hover::before": {
                            border: "none",
                          },
                        }}
                      />
                    </FormControl>
                  </Box>

                  <Box mb="20px">
                    <Link
                      to="/password-dimenticata"
                      className="text-primary"
                      style={{
                        fontWeight: "500",
                      }}
                    >
                      Password Dimenticata?
                    </Link>
                  </Box>

                  <Box mb="20px">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        textTransform: "capitalize",
                        borderRadius: "6px",
                        fontWeight: "500",
                        fontSize: { xs: "13px", sm: "16px" },
                        padding: { xs: "10px 20px", sm: "10px 24px" },
                        color: "#fff !important",
                        boxShadow: "none",
                        width: "100%",
                      }}
                    >
                      <i className="material-symbols-outlined mr-5">login</i>
                      Accedi
                    </Button>
                  </Box>

                  <Typography>
                    Non hai ancora un account?{" "}
                    <Link
                      to="/signup/"
                      className="text-primary"
                      style={{
                        fontWeight: "500",
                      }}
                    >
                      Registrati
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SignInForm;
