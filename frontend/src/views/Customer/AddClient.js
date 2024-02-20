/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Rating,
  Select,
  TextField
} from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
// import { useState,useEffect } from 'react';
// import { apiget, apipost } from '../../service/api';
import Palette from '../../ui-component/ThemePalette';

const AddClient = (props) => {
  const { open, handleClose } = props;
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      // TransitionComponent={Transition}
      >
        <DialogTitle
          id="scroll-dialog-title"
          style={{
            display: 'flex',
            justifyContent: 'space-between'
            // backgroundColor: "#2b4054",
            // color: "white",
          }}
        >
          <Typography variant="h6">Add New</Typography>
          <Typography>
            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <form>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              <Typography style={{ marginBottom: '15px' }} variant="h6">
                Basic Information
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={4} md={4}>
                  <FormControl fullWidth>
                    <FormLabel>Title</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="title"
                      name="title"
                      label=""
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="Mr.">Mr.</MenuItem>
                      <MenuItem value="Mrs.">Mrs. </MenuItem>
                      <MenuItem value="Miss.">Miss. </MenuItem>
                      <MenuItem value="Ms.">Ms. </MenuItem>
                      <MenuItem value="Dr.">Dr. </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <FormLabel>First name</FormLabel>
                  <TextField
                    id="fristName"
                    name="firstName"
                    label=""
                    size="small"
                    maxRows={10}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <FormLabel>Last name</FormLabel>
                  <TextField
                    id="lastName"
                    name="lastName"
                    label=""
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Date Of Birth</FormLabel>
                  <TextField
                    name="dateOfBirth"
                    type="date"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Phone number</FormLabel>
                  <TextField
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormLabel>Email</FormLabel>
                  <TextField
                    id="emailAddress"
                    name="emailAddress"
                    label=""
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup row name="gender">
                      <FormControlLabel value="Male" control={<Radio />} label="Male" />
                      <FormControlLabel value="Female" control={<Radio />} label="Female" />
                      <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <FormLabel>Address</FormLabel>
                  <TextField
                    id="address"
                    name="address"
                    label=""
                    size="small"
                    multiline
                    rows={5}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Typography style={{ marginBottom: '15px', marginTop: '15px' }} variant="h6">
                Source Information
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={12} md={12}>
                  <FormControl fullWidth>
                    <FormLabel>Lead Source</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="leadSource"
                      name="leadSource"
                      label=""
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="Website Referrals">Website Referrals</MenuItem>
                      <MenuItem value="Advertising">Advertising </MenuItem>
                      <MenuItem value="Social Media">Social Media </MenuItem>
                      <MenuItem value="Events and Trade Shows">Events and Trade Shows </MenuItem>
                      <MenuItem value="Call Centers or Telemarketing">Call Centers or Telemarketing</MenuItem>
                      <MenuItem value="Partnerships">Partnerships</MenuItem>
                      <MenuItem value="Direct Mail">Direct Mail </MenuItem>
                      <MenuItem value="Online Aggregators or Comparison Websites">Online Aggregators or Comparison Websites</MenuItem>
                      <MenuItem value="Content Marketing">Content Marketing</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Typography style={{ marginBottom: '15px', marginTop: '15px' }} variant="h6">
                Lead Details
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={4} md={4}>
                  <FormControl fullWidth>
                    <FormLabel>Lead Status</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="leadStatus"
                      name="leadStatus"
                      label=""
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="New">New</MenuItem>
                      <MenuItem value="Contacted">Contacted </MenuItem>
                      <MenuItem value="Qualified">Qualified </MenuItem>
                      <MenuItem value="Not Qualified"> Not Qualified </MenuItem>
                      <MenuItem value="In Progress">In Progress</MenuItem>
                      <MenuItem value="Closed/Won">Closed/Won</MenuItem>
                      <MenuItem value="Closed/Lost">Closed/Lost </MenuItem>
                      <MenuItem value="Follow-up Required">Follow-up Required</MenuItem>
                      <MenuItem value="On Hold"> On Hold</MenuItem>
                      <MenuItem value="Converted"> Converted</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <FormControl fullWidth>
                    <FormLabel>Lead score or rating</FormLabel>
                    <Typography display="flex">
                      <Rating
                        name="leadScore"
                        precision={0.1}
                      />
                    </Typography>
                  </FormControl>
                </Grid>
              </Grid>
              <Typography style={{ marginBottom: '15px', marginTop: '15px' }} variant="h6">
                Additional Contact Details
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Alternate phone number</FormLabel>
                  <TextField
                    id="alternatePhoneNumber"
                    name="alternatePhoneNumber"
                    type="number"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Additional email address</FormLabel>
                  <TextField
                    id="additionalEmailAddress"
                    name="additionalEmailAddress"
                    type="email"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Instagram profile</FormLabel>
                  <TextField
                    id="instagramProfile"
                    name="instagramProfile"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Twitter profile</FormLabel>
                  <TextField
                    id="twitterProfile"
                    name="twitterProfile"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Typography style={{ marginBottom: '15px', marginTop: '15px' }} variant="h6">
                Policy Requirements
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Type of insurance</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="typeOfInsurance"
                      name="typeOfInsurance"
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="Auto">Auto Insurance</MenuItem>
                      <MenuItem value="Home Insurance">Home Insurance</MenuItem>
                      <MenuItem value="Health Insurance">Health Insurance</MenuItem>
                      <MenuItem value="Life Insurance">Life Insurance</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Desired coverage amount</FormLabel>
                    <OutlinedInput
                      id="desiredCoverageAmount"
                      name="desiredCoverageAmount"
                      endAdornment={<InputAdornment position="end">&#8377;</InputAdornment>}
                      type="number"
                      size="small"
                      fullWidth
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <FormLabel>Specific policy features</FormLabel>
                  <TextField
                    id="specificPolicyFeatures"
                    name="specificPolicyFeatures"
                    size="small"
                    rows={3}
                    multiline
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Typography style={{ marginBottom: '15px', marginTop: '15px' }} variant="h6">
                Lead Qualification
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth>
                    <FormLabel>Qualification Status</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="QualificationStatus"
                      name="QualificationStatus"
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="Qualified">Qualified</MenuItem>
                      <MenuItem value="Not Qualified">Not Qualified</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Typography style={{ marginBottom: '15px', marginTop: '15px' }} variant="h6">
                Lead Conversion Information
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Policy Type</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="policyType"
                      name="policyType"
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="Auto">Auto Insurance</MenuItem>
                      <MenuItem value="Home Insurance">Home Insurance</MenuItem>
                      <MenuItem value="Health Insurance">Health Insurance</MenuItem>
                      <MenuItem value="Life Insurance">Life Insurance</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Policy Number</FormLabel>
                  <TextField
                    id="policyNumber"
                    name="policyNumber"
                    type="number"
                    size="small"
                    fullWidth

                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Start Date</FormLabel>
                  <TextField
                    id="startDate"
                    name="startDate"
                    type="date"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>End Date</FormLabel>
                  <TextField
                    id="endDate"
                    name="endDate"
                    type="date"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Coverage Amount</FormLabel>
                  <OutlinedInput
                    id="coverageAmount"
                    name="coverageAmount"
                    endAdornment={<InputAdornment position="end">&#8377;</InputAdornment>}
                    type="number"
                    size="small"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Term Length</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="termLength"
                      name="termLength"
                      label=""
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="1 year">1 year</MenuItem>
                      <MenuItem value="2 years">2 years </MenuItem>
                      <MenuItem value="5 years">5 years </MenuItem>
                      <MenuItem value="10 years">10 years </MenuItem>
                      <MenuItem value="15 years">15 years</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Conversion Reason</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="conversionReason"
                      name="conversionReason"
                      label=""
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="Coverage Needs">Coverage Needs</MenuItem>
                      <MenuItem value="Trust and Reputation">Trust and Reputation</MenuItem>
                      <MenuItem value="Competitive Pricing"> Competitive Pricing</MenuItem>
                      <MenuItem value="Excellent Customer Service">Excellent Customer Service</MenuItem>
                      <MenuItem value="Referrals or Recommendations">Referrals or Recommendations</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormLabel>Conversion Date&Time</FormLabel>
                  <TextField
                    id=""
                    name="conversionDateTime"
                    type="datetime-local"
                    size="small"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Typography style={{ marginBottom: '15px', marginTop: '15px' }} variant="h6">
                Lead Segmentation
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Lead Category</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="leadCategory"
                      name="leadCategory"
                      label=""
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="Hot Lead">Hot Lead</MenuItem>
                      <MenuItem value="Cold Lead">Cold Lead</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth>
                    <FormLabel>Lead Priority</FormLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="leadPriority"
                      name="leadPriority"
                      label=""
                      size="small"
                      fullWidth
                    >
                      <MenuItem value="High">High</MenuItem>
                      <MenuItem value="Medium">Medium</MenuItem>
                      <MenuItem value="Low">Low</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </DialogContentText>
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
          <Button
            variant="outlined"
            color="error"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddClient;
