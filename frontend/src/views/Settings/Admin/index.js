/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box, Switch } from '@mui/material';
import TableStyle from '../../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import Iconify from '../../../ui-component/iconify';
import Popover from '@mui/material/Popover';
import { AiOutlineEye } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AdminDrawer from './AdminDrawer';


// ----------------------------------------------------------------------

const documentData = [
    {
        id: 1,
        firstName: 'idurar',
        lastName: "admin",
        email: "admin@demo.com",
        role: "superadmin"
    }
];
const Admin = () => {
    const [openAdd, setOpenAdd] = useState(false);
    const [checked, setChecked] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [openDialog, setOpenDialog] = React.useState(false);
    const [roleName, setRoleName] = useState('');
    const handleClickOpen = () => {
        setOpenDialog(true);
    };
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const [mode, setMode] = useState('');
    const [rowData, setRowData] = useState()
    const handleChange = (e) => {
        setChecked(e.target.checked);
    }
    const columns = [
        {
            field: 'firstName',
            headerName: 'First Name',
            flex: 1,
            cellClassName: 'name-column--cell name-column--cell--capitalize'
        },
        {
            field: 'lastName',
            headerName: 'Last Name',
            flex: 1
        },
        {
            field: 'email',
            headerName: 'Email',
            flex: 1
        },
        {
            field: 'role',
            headerName: 'Role',
            flex: 1
        },
        {
            field: 'enabled',
            headerName: 'Enabled',
            flex: 1,
            renderCell: () => {
                return (
                    <Switch checked={checked}
                        onChange={handleChange} />
                );
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            renderCell: (params) => {
                return (
                    <>

                        <Button aria-describedby={id} onClick={handleClick} variant='text' color='info'>
                            ...
                        </Button>
                        {
                            open ? <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Typography id="show" onClick={() => { handleOpenAdd(); handleClose(); setMode('show'); setRowData(params.row) }} sx={{ p: 1, cursor: "pointer" }}><AiOutlineEye /> Show</Typography>
                                <Typography id="edit" onClick={() => { handleOpenAdd(); handleClose(); setMode('edit') }} sx={{ p: 1, cursor: "pointer" }} ><AiTwotoneEdit /> Edit</Typography>
                                <Typography id="updatePass" onClick={() => { handleOpenAdd(); handleClose(); setMode('updatePass') }} sx={{ p: 1, cursor: "pointer" }} ><AiOutlineEye /> Update Password</Typography>
                                <Typography id="delete" onClick={() => { setRoleName(params.row.email); handleClose(); handleClickOpen() }} sx={{ p: 1, cursor: "pointer" }}><AiOutlineDelete /> Delete</Typography>

                            </Popover> : null
                        }
                    </>

                );
            }
            // eslint-disable-next-line arrow-body-style
        }

    ];
    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);
    return (
        <>
            <AdminDrawer open={openAdd} handleClose={handleCloseAdd} mode={mode} data={rowData} />
            <Container>
                <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
                    <Typography variant="h4">Admin List</Typography>
                    <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
                        <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={() => { setMode('add'); handleOpenAdd() }}>
                            Add New Admin
                        </Button>
                    </Stack>
                </Stack>
                <TableStyle>
                    <Box width="100%">
                        <Card style={{ height: '600px', paddingTop: '15px' }}>
                            <DataGrid
                                rows={documentData}
                                columns={columns}
                                checkboxSelection
                                getRowId={(row) => row.id}
                                slots={{ toolbar: GridToolbar }}
                                slotProps={{ toolbar: { showQuickFilter: true } }}
                            />
                        </Card>
                    </Box>
                </TableStyle>
            </Container>
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle variant='h3' id="alert-dialog-title">
                    Delete Confirmation
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete : {roleName}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={handleCloseDialog}>Cancel</Button>
                    <Button variant='contained' onClick={handleCloseDialog} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Admin;
