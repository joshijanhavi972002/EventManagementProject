import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import ClearIcon from '@mui/icons-material/Clear';
import Grid from '@mui/material/Grid';
import { Button, Divider, Select, MenuItem, Typography, FormControl, FormLabel, TextField, Switch } from '@mui/material';
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { AiOutlineLock } from "react-icons/ai";


export default function AdminDrawer(props) {
    const { open, handleClose, mode, data } = props;
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
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
                            <Typography variant='h3' style={{ marginLeft: '10px' }}>Admin</Typography>
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
                            <Button variant='text' style={{ margin: "10px" }}><AiOutlineDelete style={{ margin: "5px" }} /> Remove</Button>
                            <Button variant='text' style={{ margin: "10px" }}><AiTwotoneEdit style={{ margin: "5px" }} /> Edit</Button>
                            <Button variant='text' style={{ margin: "10px" }}><AiOutlineLock style={{ margin: "5px" }} /> Update Password</Button>
                        </Grid> : null}
                        <Divider orientation='horizontal' style={{ marginTop: '10px' }} />
                        {mode === "show" ? <>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>First Name: {data.firstName}</Typography>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>Last Name: {data.lastName}</Typography>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>Email:  {data.email}</Typography>
                            </Grid>
                            <Grid style={{ display: "flex", justifyContent: "center", width: "100%", }}>
                                <Typography variant='h5' style={{ margin: "10px" }}>Role:  {data.role}</Typography>
                            </Grid>
                        </> : null}
                        <Button variant='outlined' style={{ margin: "10px" }} >ADD NEW ADMIN</Button>
                        {mode === "add" ?
                            <form>
                                <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>First Name</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <TextField
                                        id="firstName"
                                        name="firstName"
                                        label=""
                                        size="small"
                                        maxRows={10}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Last Name</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <TextField
                                        id="lastName"
                                        name="lastName"
                                        label=""
                                        size="small"
                                        maxRows={10}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Email</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label=""
                                        size="small"
                                        maxRows={10}
                                        fullWidth
                                        required
                                    />
                                </Grid>
                                <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Password</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <FormControl fullWidth>
                                        <OutlinedInput
                                            name='password'
                                            id="outlined-adornment-password"
                                            size="small"
                                            maxRows={10}
                                            fullWidth
                                            required
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Grid>
                                <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Enabled</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <Switch />
                                </Grid>
                                <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Role</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <FormControl fullWidth>
                                        <Select
                                            id="role"
                                            name="role"
                                            size="small"
                                            fullWidth
                                        >
                                            <MenuItem value="1">Admin Super Admin</MenuItem>
                                            <MenuItem value="2">Staff Admin Crud</MenuItem>
                                            <MenuItem value="3">Staff CRU</MenuItem>
                                            <MenuItem value="4">Create And Read Only</MenuItem>
                                            <MenuItem value="5">Read Only</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Photo</FormLabel>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <Button
                                        component="label"
                                        role={undefined}
                                        variant="outlined"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                        style={{ margin: 10 }}
                                    >
                                        Click To Upload
                                        <VisuallyHiddenInput type="file" />
                                    </Button>
                                </Grid>
                                <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                    <Button variant='contained' type='submit' style={{ margin: "10px" }}>Submit</Button>
                                </Grid>
                            </form> : null}
                        {mode === "edit" ?
                            <>
                                <Grid style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: '15px', padding: "5px" }}>
                                    <Button variant='text' style={{ margin: "10px" }}><AiOutlineDelete style={{ margin: "5px" }} /> Remove</Button>
                                    <Button variant='text' style={{ margin: "10px" }}><AiTwotoneEdit style={{ margin: "5px" }} /> Edit</Button>
                                    <Button variant='text' style={{ margin: "10px" }}><AiOutlineLock style={{ margin: "5px" }} /> Update Password</Button>
                                </Grid>
                                <form>
                                    <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>First Name</FormLabel>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <TextField
                                            id="firstName"
                                            name="firstName"
                                            label=""
                                            size="small"
                                            maxRows={10}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Last Name</FormLabel>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <TextField
                                            id="lastName"
                                            name="lastName"
                                            label=""
                                            size="small"
                                            maxRows={10}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Email</FormLabel>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <TextField
                                            id="email"
                                            name="email"
                                            label=""
                                            size="small"
                                            maxRows={10}
                                            fullWidth
                                            required
                                        />
                                    </Grid>
                                    <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Password</FormLabel>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <FormControl fullWidth>
                                            <OutlinedInput
                                                name='password'
                                                id="outlined-adornment-password"
                                                size="small"
                                                maxRows={10}
                                                fullWidth
                                                required
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                    <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Enabled</FormLabel>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <Switch />
                                    </Grid>
                                    <FormLabel style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Role</FormLabel>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <FormControl fullWidth>
                                            <Select
                                                id="role"
                                                name="role"
                                                size="small"
                                                fullWidth
                                            >
                                                <MenuItem value="1">Admin Super Admin</MenuItem>
                                                <MenuItem value="2">Staff Admin Crud</MenuItem>
                                                <MenuItem value="3">Staff CRU</MenuItem>
                                                <MenuItem value="4">Create And Read Only</MenuItem>
                                                <MenuItem value="5">Read Only</MenuItem>

                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>Photo</FormLabel>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <Button
                                            component="label"
                                            role={undefined}
                                            variant="outlined"
                                            tabIndex={-1}
                                            startIcon={<CloudUploadIcon />}
                                            style={{ margin: 10 }}
                                        >
                                            Click To Upload
                                            <VisuallyHiddenInput type="file" />
                                        </Button>
                                    </Grid>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <Button variant='contained' type='submit' style={{ margin: "10px" }}>Save</Button>
                                        <Button variant='outlined' type='submit' style={{ margin: "10px" }}>Cancel</Button>
                                    </Grid>
                                </form>
                            </> : null}

                        {
                            mode === "updatePass" ? <>
                                <Grid style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: '15px', padding: "5px" }}>
                                    <Button variant='text' style={{ margin: "10px" }}><AiOutlineDelete style={{ margin: "5px" }} /> Remove</Button>
                                    <Button variant='text' style={{ margin: "10px" }}><AiTwotoneEdit style={{ margin: "5px" }} /> Edit</Button>
                                    <Button variant='text' style={{ margin: "10px" }}><AiOutlineLock style={{ margin: "5px" }} /> Update Password</Button>
                                </Grid>
                                <Grid style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "5px" }}>
                                    <Typography variant='h4' style={{ margin: "10px", }}>Update Password</Typography>
                                </Grid>
                                <form>
                                    <FormLabel required style={{ display: "flex", justifyContent: "start", width: "100%", marginTop: '5px', padding: "5px" }}>New Password</FormLabel>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <FormControl fullWidth>
                                            <OutlinedInput
                                                name='password'
                                                id="outlined-adornment-password"
                                                size="small"
                                                maxRows={10}
                                                fullWidth
                                                required
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid style={{ display: "flex", justifyContent: "start", width: "100%", padding: "5px" }}>
                                        <Button variant='contained' type='submit' style={{ margin: "10px" }}>Save</Button>
                                        <Button variant='outlined' type='submit' style={{ margin: "10px" }}>Cancel</Button>
                                    </Grid>
                                </form>

                            </> : null
                        }
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}