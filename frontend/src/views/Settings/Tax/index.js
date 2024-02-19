/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
// @mui
import { Stack, Button, Container, Typography, Card, Box, Switch } from '@mui/material';
import TableStyle from '../../../ui-component/TableStyle';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import Iconify from '../../../ui-component/iconify';
import Modal from '@mui/material/Modal';
import AddTax from './AddTax';



// ----------------------------------------------------------------------

const documentData = [
    {
        id: 1,
        name: 'VAT',
        value: '15%',
    }
];
const Tax = () => {
    const [openAdd, setOpenAdd] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            cellClassName: 'name-column--cell name-column--cell--capitalize'
        },
        {
            field: 'value',
            headerName: 'Value',
            flex: 1
        },
        {
            field: 'default',
            headerName: 'Default',
            flex: 1,
            renderCell: () => {
                return (
                    <Switch />
                )
            }
        },
        {
            field: 'enabled',
            headerName: 'Enabled',
            flex: 1,
            renderCell: () => {
                return (
                    <Switch />
                )
            }
        },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            renderCell: () => {
                return (
                    <>

                        <Button onClick={() => {
                            handleOpen()
                        }} variant='contained' color='inherit'>
                            ...
                        </Button>
                        {
                            open ? <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Text in a modal
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                    </Typography>
                                </Box>
                            </Modal> : null
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
            <AddTax open={openAdd} handleClose={handleCloseAdd} />
            <Container>
                <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
                    <Typography variant="h4">Taxes List</Typography>
                    <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
                        <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={handleOpenAdd}>
                            Add New Tax
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
        </>
    );
};

export default Tax;
