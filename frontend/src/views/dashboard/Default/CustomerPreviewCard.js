import React from 'react';
import { Grid, Paper, Typography, CircularProgress, LinearProgress, Divider } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function CustomerPreviewCard({
  isLoading = false,
  activeCustomer = 56,
  newCustomer = 29,
}) {


  return (
    <Grid container className="gutter-row">
      <Paper elevation={3} className="whiteBox shadow">
        <div
          className="pad20"
          style={{
            textAlign: 'center',
            justifyContent: 'center',

          }}
        >
          <Typography variant="h5" style={{ color: '#22075e', marginTop: "16px" }} >
            {('Customer Preview')}
          </Typography>

          {isLoading ? (
            <CircularProgress />
          ) : (
            <div style={{ display: 'grid', justifyContent: 'center' }}>
              <LinearProgress
                variant="determinate"
                value={newCustomer}
                sx={{
                  height: '135px',
                  width: '220px',
                  borderRadius: '50%',
                  color: '#1890ff', // Customize the color as needed
                  margin: '10px',
                  padding: '10px',
                }}
              />
              <Typography variant="body1" style={{ marginTop: 10 }}>
                {(`New Customer this Month: ${newCustomer}`)}
              </Typography>
              <Divider sx={{ marginY: 2 }} />
              <Typography variant="h6">
                {('Active Customer')}
              </Typography>
              {/* <Typography variant="h4" color={activeCustomer > 0 ? 'success.dark' : activeCustomer < 0 ? 'error.dark' : 'text.primary'}>
                {activeCustomer}
              </Typography> */}
              <Typography sx={{ display: "flex", justifyContent: "center" }} variant="subtitle1" color={activeCustomer > 0 ? 'success.dark' : activeCustomer < 0 ? 'error.dark' : 'text.primary'}>
                {activeCustomer > 0 ? (
                  <ArrowUpwardIcon />
                ) : activeCustomer < 0 ? (
                  <ArrowDownwardIcon />
                ) : null}
                {activeCustomer > 0 ? `${activeCustomer}%` : null}
              </Typography>
            </div>
          )}
        </div>
      </Paper>
    </Grid >
  );
}
