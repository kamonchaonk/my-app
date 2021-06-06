import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TableFooter from '@material-ui/core/TableFooter';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TablePagination from '@material-ui/core/TablePagination';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));



const TablePaginationActions = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}  >
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};
const useConferenceManagement = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [txtFilter, setTxtFilter] = useState('');

    const rows = [
        { id: '1', RoomName: 'Room Name1', Accounts: 'Accounts', CreatedAt: 'Created At', UpdatedAt: 'Updated At' },
        { id: '2', RoomName: 'Room Name1', Accounts: 'Accounts', CreatedAt: 'Created At', UpdatedAt: 'Updated At' },
        { id: '3', RoomName: 'Room Name1', Accounts: 'Accounts', CreatedAt: 'Created At', UpdatedAt: 'Updated At' },
        { id: '4', RoomName: 'Room Name1', Accounts: 'Accounts', CreatedAt: 'Created At', UpdatedAt: 'Updated At' },
        { id: '5', RoomName: 'Room Name1', Accounts: 'Accounts', CreatedAt: 'Created At', UpdatedAt: 'Updated At' },
        { id: '6', RoomName: 'Room Name1', Accounts: 'Accounts', CreatedAt: 'Created At', UpdatedAt: 'Updated At' }

    ];



    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const handleFilter = () => {
        console.log(`txtFilter`, txtFilter)
    }

    const onCreate = () => { console.log(`goto popup`) }
    const onClickRow = () => { console.log(`goto detail`) }


    return {
        onClickRow, rows, handleChangePage, handleChangeRowsPerPage, rowsPerPage, page, txtFilter, setTxtFilter, handleFilter, onCreate
    }
}
const useStyles2 = makeStyles({
    table: {
        minWidth: 500,
    },
});

const ViewConferenceManagement = (props) => {
    const { onClickRow, onCreate, rows, handleChangePage, handleChangeRowsPerPage, rowsPerPage, page, txtFilter, setTxtFilter, handleFilter } = props
    const classes = useStyles2();
    return (<>

        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Grid container style={{ padding: '20px' }}>
                    <Grid item xs={6} >Room (Total {rows.length} Results)</Grid>
                    <Grid container item xs={6} justify="flex-end">
                        <Grid item  >
                            <TextField id="txtFilter" label=" filter" value={txtFilter}
                                onChange={
                                    (e) => setTxtFilter(e.target.value)
                                }
                                style={{ padding: 0 }}
                            />

                            <Button onClick={handleFilter} variant="outlined" color="primary">Search</Button>
                            <Button onClick={onCreate} variant="outlined" color="primary">Create</Button>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} style={{ margin: '20px' }}>

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">RoomName</TableCell>
                                <TableCell align="center">Accounts</TableCell>
                                <TableCell align="center">Created At</TableCell>
                                <TableCell align="center">Updated At</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id} onClick={onClickRow}>
                                    <TableCell align="center">{row.RoomName}</TableCell>
                                    <TableCell align="center">{row.Accounts}</TableCell>
                                    <TableCell align="center">{row.CreatedAt}</TableCell>
                                    <TableCell align="center">{row.UpdatedAt}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow style={{ textAlign: 'right' }}>
                                <TablePagination

                                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                    colSpan={4}
                                    count={rows.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    SelectProps={{
                                        inputProps: { 'aria-label': 'rows per page' },
                                        native: true,
                                    }}
                                    onChangePage={handleChangePage}
                                    onChangeRowsPerPage={handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Grid>

        </Grid>




    </>)
}

const ConferenceManagement = () => {
    const conferenceManagement = useConferenceManagement()


    return <ViewConferenceManagement {...conferenceManagement} />
}

export default ConferenceManagement