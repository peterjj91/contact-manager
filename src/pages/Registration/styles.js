import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 400,
    padding: theme.spacing(3),
    border: '1px solid #eeeeee',
    borderRadius: 4,

    '& .MuiTextField-root': {
      width: '100%',
    },
  },
  button: {
    marginTop: 30,
  },
}));
