/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState ,useEffect} from 'react';
import * as React from 'react';
import { useNavigate } from 'react-router';
import { fetchData } from 'api/apiUtils';
import { deleteData } from 'api/apiUtils';
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

// ----------------------------------------------------------------------
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ImportContacts } from '@mui/icons-material';
import { checkTokenAndRedirect } from 'views/Cookies/cookies';

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
// const handleCreateEvent=()=>{
//   navigate('/dashboard/Events/CreateEvent');
// }
// ----------------------------------------------------------------------
const leadData = [
  {
    id: 1,
    
    name: "",
    category: "",
   
    
  }
];

const CompleteEventList = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const [mode, setMode] = useState('');
  const [rowData, setRowData] = useState()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [categories, setCategories] = useState([]);
  const [Id, setId] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    // Use fetchData to fetch categories
    const response=fetchData('http://localhost:3001/CreateEventapi/CompleteEventList', setCategories, setError);
    checkTokenAndRedirect();
  }, []);
  if (error) {
    console.log(error);
  }


  
  const handleOpenAdd = (rowData) => {
    setOpenAdd(true);
    setRowData(rowData);
  };
  

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
      {/* <JoinList open={openAdd} handleClose={handleCloseAdd} mode={mode} data={rowData} categories={categories} /> */}
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Complete Event List</Typography>
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
                <StyledTableCell >Category</StyledTableCell>
                {/* <StyledTableCell align="right">Attende Status&nbsp;</StyledTableCell>
                <StyledTableCell align="right">Status&nbsp;</StyledTableCell>
                <StyledTableCell align='center'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Action</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.Event_Name}
                  </StyledTableCell>
                  <StyledTableCell >{row.Event_Category}</StyledTableCell>
                  {/* <StyledTableCell align="right">{row.Image}</StyledTableCell> */}
                  {/* <StyledTableCell align="right"> {row.Attendee_Status}</StyledTableCell>
                  <StyledTableCell align="right">{row.Status}</StyledTableCell> */}
                  {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
                  {/* <StyledTableCell align="right" style={{ display: 'flex', gap: '10px' }}> */}
                    {/* <Button variant="outlined" onClick={() => handleShow(row)}>
                      Show
                    </Button> */}
                    {/* <Button variant="outlined" onClick={() => { setMode('edit'); handleOpenAdd(); handleClose(); setRowData(row._id); }}>
                      Edit
                    </Button>
                    <Button variant="outlined" onClick={() => { handleClose(); handleClickOpen(); setRowData(row._id) }}>
                      Delete
                    </Button>
                  </StyledTableCell> */}
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

export default CompleteEventList;
