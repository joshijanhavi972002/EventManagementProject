import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';
import { Button, Divider, Select, MenuItem, Typography, FormControl, FormLabel } from '@mui/material';
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

export default function CustomerDrawer(props) {
    const { open, handleClose, mode, data } = props;

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
                            <Typography variant='h3' style={{ marginLeft: '10px' }}> Client </Typography>
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
                            <Typography variant='h5' style={{ margin: "10px", paddingTop: "6px" }}> {data.name} </Typography>
                            <Button variant='text' style={{ margin: "10px" }}><AiTwotoneEdit style={{ margin: "5px" }} /> Edit</Button>
                            <Button variant='text' style={{ margin: "10px" }}><AiOutlineDelete style={{ margin: "5px" }} /> Remove</Button>
                        </Grid> : null}
                        <Divider orientation='horizontal' style={{ marginTop: '10px' }} />
                        {mode === "show" ? <> <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                            <Typography variant='h5' style={{ margin: "10px" }}>type: {data.type}</Typography>
                        </Grid>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>name:  {data.name}</Typography>
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
                                <Typography variant='h5' style={{ margin: "10px" }}>people:  {data.name}</Typography>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>company:  </Typography>
                            </Grid> </> : null}
                        <Button variant='outlined' style={{ margin: "10px" }} >ADD NEW CLIENT</Button>
                        {mode === "add" ? <form>
                            <Grid style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '15px', padding: "5px" }}>
                                <FormControl fullWidth style={{ margin: "10px", width: "280px" }}>
                                    <FormLabel required>Type</FormLabel>

                                    <Select
                                        id="type"
                                        name="type"
                                        size="small"
                                        fullWidth
                                        required
                                    >
                                        <MenuItem value="People">People</MenuItem>
                                        <MenuItem value="Company">Company</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                <FormControl fullWidth style={{ margin: "10px", width: "280px" }}>
                                    <FormLabel >People</FormLabel>

                                    <Select
                                        id="people"
                                        name="people"
                                        size="small"
                                        fullWidth
                                    >
                                        <MenuItem value="People">1</MenuItem>
                                        <MenuItem value="Company">2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                <FormControl fullWidth style={{ margin: "10px", width: "280px" }}>
                                    <FormLabel>Company</FormLabel>

                                    <Select
                                        id="company"
                                        name="company"
                                        size="small"
                                        fullWidth
                                    >
                                        <MenuItem value="People">1</MenuItem>
                                        <MenuItem value="Company">2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                <Button variant='contained' type='submit' style={{ margin: "10px" }}>Save</Button>
                            </Grid>
                        </form> : null}
                        {mode === "edit" ? <form>
                            <Grid style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '15px', padding: "5px" }}>
                                <FormControl fullWidth style={{ margin: "10px", width: "280px" }}>
                                    <FormLabel required>Type</FormLabel>

                                    <Select
                                        id="type"
                                        name="type"
                                        size="small"
                                        fullWidth
                                        required
                                    >
                                        <MenuItem value="People">People</MenuItem>
                                        <MenuItem value="Company">Company</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                <FormControl fullWidth style={{ margin: "10px", width: "280px" }}>
                                    <FormLabel >People</FormLabel>

                                    <Select
                                        id="people"
                                        name="people"
                                        size="small"
                                        fullWidth
                                    >
                                        <MenuItem value="People">1</MenuItem>
                                        <MenuItem value="Company">2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                <FormControl fullWidth style={{ margin: "10px", width: "280px" }}>
                                    <FormLabel>Company</FormLabel>

                                    <Select
                                        id="company"
                                        name="company"
                                        size="small"
                                        fullWidth
                                    >
                                        <MenuItem value="People">1</MenuItem>
                                        <MenuItem value="Company">2</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                <Button variant='contained' type='submit' style={{ margin: "10px" }}>Save</Button>
                            </Grid>
                        </form> : null}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}