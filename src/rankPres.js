import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {blue} from '@material-ui/core/colors'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: blue[500],
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;



function RankPres(props) {
  const { classes, participants } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <div style={{padding: 16}} >
            <Typography variant="headline">FIFA World Cup 2018</Typography>
          </div>
          <TableRow>
            <CustomTableCell>Participant</CustomTableCell>
            <CustomTableCell numeric>Champion</CustomTableCell>
            <CustomTableCell numeric>Points</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {participants.map(p => {
            return (
              <TableRow className={classes.row} key={`${p.name}-id`}>
                <CustomTableCell component="th" scope="row">
                  {p.name}
                </CustomTableCell>
                <CustomTableCell numeric>{p.champion}</CustomTableCell>
                <CustomTableCell numeric>{p.points}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

RankPres.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RankPres);