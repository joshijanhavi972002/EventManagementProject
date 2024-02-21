import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';
import { Button, Divider, Select, MenuItem, Typography, FormControl, FormLabel, TextField } from '@mui/material';
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import InputAdornment from '@mui/material/InputAdornment';

export default function CompanyDrawer(props) {
    const { open, handleClose, mode, data } = props;
    console.log("Mode", mode);

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={open}
                        onClose={handleClose}

                    >
                        <Grid style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '10px' }}>
                            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
                            <Typography variant='h3' style={{ marginLeft: '10px' }}> Company </Typography>
                        </Grid>
                        <Divider orientation='horizontal' style={{ marginTop: '10px' }} />
                        <Grid style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '15px', padding: "5px" }}>
                            {/* <TextField variant='outlined' placeholder='Enter a search ' /> */}
                            <FormControl fullWidth style={{ margin: "10px", width: "200px" }}>
                                <Select
                                    id="search"
                                    name="search"
                                    size="small"
                                    fullWidth
                                >
                                    <MenuItem value="Website Referrals">Website Referrals</MenuItem>
                                    <MenuItem value="Advertising">Advertising </MenuItem>
                                    <MenuItem value="Social Media">Social Media </MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant='outlined' style={{ margin: "10px" }}>+</Button>
                        </Grid>
                        {mode === "show" ? <Grid style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: '15px', padding: "5px" }}>
                            <Typography variant='h5' style={{ margin: "10px", paddingTop: "6px" }}> {data.name}</Typography>
                            <Button variant='text' style={{ margin: "10px" }}><AiTwotoneEdit style={{ margin: "5px" }} /> Edit</Button>
                            <Button variant='text' style={{ margin: "10px" }}><AiOutlineDelete style={{ margin: "5px" }} /> Remove</Button>
                        </Grid> : null}
                        <Divider orientation='horizontal' style={{ marginTop: '10px' }} />
                        {mode === "show" ? <> <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                            <Typography variant='h5' style={{ margin: "10px" }}>name: {data.name}</Typography>
                        </Grid>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>Contact:  {data.contact}</Typography>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>country:  {data.country}</Typography>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>phone:  {data.phone}</Typography>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>email:  {data.email}</Typography>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>website:  {data.website}</Typography>
                            </Grid>
                        </> : null}
                        <Button variant='outlined' style={{ margin: "10px" }} >ADD NEW COMPANY</Button>
                        {mode === "add" ?
                            <form>
                                <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Name</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        label=""
                                        size="small"
                                        maxRows={10}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Contact</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <FormControl fullWidth>
                                        <Select
                                            id="contact"
                                            name="contact"
                                            size="small"
                                            fullWidth
                                            placeholder='Search Here'
                                        >
                                            <MenuItem value="5555555">5555555</MenuItem>
                                            <MenuItem value="1235686">1235686</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Country</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <FormControl fullWidth >
                                        <Select
                                            id="country"
                                            name="country"
                                            size="small"
                                            fullWidth
                                        >
                                            <MenuItem value="People">1</MenuItem>
                                            <MenuItem value="Company">2</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Phone</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <TextField
                                        id="phone"
                                        name="phone"
                                        label=""
                                        size="small"
                                        maxRows={10}
                                        fullWidth
                                    />
                                </Grid>
                                <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Email</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label=""
                                        size="small"
                                        maxRows={10}
                                        fullWidth
                                    />
                                </Grid>
                                <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Website</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <TextField
                                        id="website"
                                        name="website"
                                        label=""
                                        size="small"
                                        maxRows={10}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">http://</InputAdornment>,
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <Button variant='contained' type='submit' style={{ margin: "10px" }}>Submit</Button>
                                </Grid>
                            </form> : null}
                        {mode === "edit" ?
                            <form>
                                <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Name</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        label=""
                                        size="small"
                                        maxRows={10}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Contact</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <FormControl fullWidth>
                                        <Select
                                            id="contact"
                                            name="contact"
                                            size="small"
                                            fullWidth
                                            placeholder='Search Here'
                                        >
                                            <MenuItem value="5555555">5555555</MenuItem>
                                            <MenuItem value="1235686">1235686</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Country</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <FormControl fullWidth >
                                        <Select
                                            id="country"
                                            name="country"
                                            size="small"
                                            fullWidth
                                        >
                                            <MenuItem value="People">1</MenuItem>
                                            <MenuItem value="Company">2</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Phone</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <TextField
                                        id="phone"
                                        name="phone"
                                        label=""
                                        size="small"
                                        maxRows={10}
                                        fullWidth
                                    />
                                </Grid>
                                <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Email</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label=""
                                        size="small"
                                        maxRows={10}
                                        fullWidth
                                    />
                                </Grid>
                                <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Website</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <TextField
                                        id="website"
                                        name="website"
                                        label=""
                                        size="small"
                                        maxRows={10}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">http://</InputAdornment>,
                                        }}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <Button variant='contained' type='submit' style={{ margin: "10px" }}>Save</Button>
                                    <Button variant='outlined' type='submit' style={{ margin: "10px" }}>Cancel</Button>

                                </Grid>
                            </form> : null}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}