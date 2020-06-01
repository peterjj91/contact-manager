import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: 20,
    marginBottom: 30,
  },
  back: {
    display: 'flex',

    '& .MuiBox-root': {
      color: 'black',
      display: 'inline-block',
      marginLeft: 10,
      verticalAlign: 'middle',
    },
  },
}));
