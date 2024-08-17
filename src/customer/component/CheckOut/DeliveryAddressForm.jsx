import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";

const DeliveryAddressForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          FirstName: data.get('firstName'),
          LastName: data.get('lastName'),
        });
    }
  return (
    <div className="mt-5">
      <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-md shadow-md h-[30rem] overflow-y-scroll mt-8 pt-5"
        >
          <div>
            <div className="p-5 py-7 border rounded-md shadow-md mt-1 bg-slate-100">
              {/* {[1,1,1].map(()=><AddressCard/>)} */}
              <AddressCard/>
            </div>
            <Button
                  sx={{mt:2, bgcolor:"blueviolet", color:"white"}}
                  size="large"
                  variant="contained"
                  type="submit"
                  >
                    Deliver Here
                  </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3} >
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="firstName"
                    placeholder="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="lastName"
                    placeholder="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    name="address"
                    placeholder="Address"
                    fullWidth
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="city"
                    placeholder="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid   item xs={12} sm={6}>
                  <TextField
                    required
                    name="state"
                    placeholder="State"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="pincode"
                    placeholder="Pincode"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="phoneNumber"
                    placeholder="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                  sx={{mt:2, bgcolor:"blueviolet", color:"white"}}
                  size="large"
                  variant="contained"
                  type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
      </div>
    </div>
  );
};

export default DeliveryAddressForm;
