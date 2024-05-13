/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { fetchData } from 'api/apiUtils';
import { deleteData } from 'api/apiUtils';

import * as React from 'react';
// @mui
import { Stack, Button, Container, Typography, Box, Card } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


import Iconify from 'ui-component/iconify/Iconify';
import TableStyle from 'ui-component/TableStyle';
import Popover from '@mui/material/Popover';
import { AiOutlineEye } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import EventListShow2 from './EventList';

import { useNavigate } from 'react-router';


// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Dashboard } from '@mui/icons-material';
import DashboardEventList from '../Default/DashboardEventList';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



// -----------------------------------------------------------------------
const leadData = [
  {
    id: 1,

    name: 'Aman Kushwah',
    category: "Codecamp",
    image: "___",
    status: "Active"
  }
];

const DashboardEventList2 = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [mode, setMode] = useState('');
  const [rowData, setRowData] = useState()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [categories, setCategories] = useState([]);
  const [Id, setId] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();



  useEffect(() => {

    fetchData('http://localhost:3001/CreateEventapi/ViewEvent', setCategories, setError);
  }, []);

  if (error) {
    console.log(error);
  }
  //  delete functionality  start
  const deleteCategory = async (id) => {
    try {
      const response = await deleteData(`http://localhost:3001/CreateEventapi/DeleteEvent/${id}`);
      handleCloseDialog();
      setCategories(response);
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };
  //  delete functionality  end
  const handleOpenAdd = (rowData) => {
    setOpenAdd(true);
    setRowData(rowData);
  };
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCreateCategory = () => {
    navigate('/dashboard/Events/CreateEvent');
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;




  const [openDialog, setOpenDialog] = React.useState(false);
  const [customerName, setCustomerName] = useState('');
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };





  // const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  return (
    <>
      {/* <AddClient open={openAdd} handleClose={handleCloseAdd} /> */}
      <EventListShow2 open={openAdd} handleClose={handleCloseAdd} mode={mode} data={rowData} categories={categories} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Event List</Typography>
          <Stack direction="row" alignItems="center" justifyContent={'flex-end'} spacing={2}>
            <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={() => { handleCreateCategory() }}>
              Create Event
            </Button>
          </Stack>
        </Stack>

        {/* New table start */}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Event Name</StyledTableCell>
                <StyledTableCell align="right">Event Category</StyledTableCell>
                <StyledTableCell align="right">Image&nbsp;</StyledTableCell>
                <StyledTableCell align="right">Status&nbsp;</StyledTableCell>
                <StyledTableCell align='center'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.Event_Name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Event_Category}</StyledTableCell>
                  {/* <StyledTableCell align="right">{row.Image}</StyledTableCell> */}
                  <StyledTableCell align="right">
                    <img src={`http://localhost:3001/public/uploads/${row.Image}`} alt='alt' style={{ width: '50px', height: '50px' }} />
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.Status}</StyledTableCell>
                  {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                  <StyledTableCell align="right" style={{ display: 'flex', gap: '10px' }}>
                    {/* <Button variant="outlined" onClick={() => handleShow(row)}>
                      Show
                    </Button> */}
                    <Button variant="outlined" onClick={() => { setMode('edit'); handleOpenAdd(); handleClose(); setRowData(row._id); }}>
                      Edit
                    </Button>
                    <Button variant="outlined" onClick={() => { handleClose(); handleClickOpen(); setRowData(row._id) }}>
                      Delete
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* New table End */}
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
            Are you sure you want to delete : {customerName}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleCloseDialog}>Cancel</Button>
          <Button variant='contained' onClick={() => { deleteCategory(rowData); }} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};


export default DashboardEventList2;


