import React from 'react'
import { FormControl, FormLabel, Grid, Select, TextField, MenuItem, Switch, Button } from '@mui/material'


function CurrencySettingForm() {
    return (
        <form encType="multipart/form-data">
            <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={12} md={12}>
                    <FormLabel required>Currency Name: </FormLabel>
                    <TextField name="currencyName" type="text" size="small"
                        fullWidth required></TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <FormLabel required>Currency Symbol: </FormLabel>
                    <TextField name="currencySybol" type="text" size="small"
                        fullWidth required></TextField>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <FormControl fullWidth>
                        <FormLabel required>Currency Position: </FormLabel>
                        <Select required name="currencyPosition" size="small" >
                            <MenuItem value="Before">Before</MenuItem>
                            <MenuItem value="After">After</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <FormLabel required>Decimal Separator: </FormLabel>
                    <TextField name="decimalSeparator" type="text" size="small"
                        fullWidth required></TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <FormLabel required>Thousand Separator: </FormLabel>
                    <TextField name="thousandSeparator" type="text" size="small"
                        fullWidth required></TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <FormLabel required>Cent Precision: </FormLabel>
                    <TextField name="companyRegNumber" type="number" size="small"
                        fullWidth required></TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <FormLabel required>Zero Format: </FormLabel>
                    <Switch name="zeroFormat" required></Switch>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >

                    <Button style={{ margin: "5px" }} variant="contained" color="primary" type="submit">Save</Button>
                    <Button style={{ margin: "5px" }} variant="outlined" color="primary" >Cancel</Button>

                </Grid>
            </Grid>
        </form>
    )
}

export default CurrencySettingForm