import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';
import { Button, Divider, Select, MenuItem, Typography, FormControl, FormLabel, TextField, Switch } from '@mui/material';
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

export default function ExpenseCategoryDrawer(props) {
    const { open, handleClose, mode, data } = props;
    console.log("Data", data)
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
                            <Typography variant='h3' style={{ marginLeft: '10px' }}>Expense Category</Typography>
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
                        {mode === "show" ? <>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>name: {data.name}</Typography>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>description: {data.description}</Typography>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>color:  {data.color}</Typography>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>enabled:  {data.enabled}</Typography>
                            </Grid>
                        </> : null}
                        <Button variant='outlined' style={{ margin: "10px" }} >ADD NEW EXPENSE CATEGORY</Button>
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
                                <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Description</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <TextField
                                        id="description"
                                        name="description"
                                        label=""
                                        size="small"
                                        maxRows={10}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Color</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <FormControl fullWidth>
                                        <Select
                                            id="role"
                                            name="role"
                                            size="small"
                                            fullWidth
                                            required
                                        >
                                            <MenuItem value="1">Red</MenuItem>
                                            <MenuItem value="2">Blue</MenuItem>
                                            <MenuItem value="3">Black</MenuItem>
                                            <MenuItem value="4">Yellow</MenuItem>
                                            <MenuItem value="5">Green</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Enabled</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <Switch required />
                                </Grid>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <Button variant='contained' type='submit' style={{ margin: "10px" }}>Submit</Button>
                                </Grid>
                            </form> : null}
                        {mode === "edit" ?
                            <>
                                <Grid style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: '15px', padding: "5px" }}>
                                    <Typography variant='h5' style={{ margin: "10px", paddingTop: "6px" }}> {data.name} </Typography>
                                    <Button variant='text' style={{ margin: "10px" }}><AiTwotoneEdit style={{ margin: "5px" }} /> Edit</Button>
                                    <Button variant='text' style={{ margin: "10px" }}><AiOutlineDelete style={{ margin: "5px" }} /> Remove</Button>
                                </Grid>
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
                                    <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Description</FormLabel>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <TextField
                                            id="description"
                                            name="description"
                                            label=""
                                            size="small"
                                            maxRows={10}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Color</FormLabel>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <FormControl fullWidth>
                                            <Select
                                                id="role"
                                                name="role"
                                                size="small"
                                                fullWidth
                                                required
                                            >
                                                <MenuItem value="1">Red</MenuItem>
                                                <MenuItem value="2">Blue</MenuItem>
                                                <MenuItem value="3">Black</MenuItem>
                                                <MenuItem value="4">Yellow</MenuItem>
                                                <MenuItem value="5">Green</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Enabled</FormLabel>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <Switch required />
                                    </Grid>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <Button variant='contained' type='submit' style={{ margin: "10px" }}>Save</Button>
                                        <Button variant='outlined' type='submit' style={{ margin: "10px" }}>Cancel</Button>
                                    </Grid>
                                </form>
                            </> : null}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}