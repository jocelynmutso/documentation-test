import React from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, Theme, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(4),
    color: theme.palette.primary.main
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  iconLink:{
    '&:hover': {
      cursor: 'pointer',
    },
    color: theme.palette.text.primary,
    alignContent: 'center',
    paddingLeft: theme.spacing(5)
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.10),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },
    marginLeft: 1,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(5),
      width: 'auto',
    }
  },
  searchIcon: {
    padding: theme.spacing(1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    // backgroundColor: theme.palette.text.secondary,
    borderColor: theme.palette.text.primary,
    fontWeight: 'bold',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));


interface ShellToolsBarProps {
  drawer: {
    open: boolean;
    onOpen: () => void;
  }
}

const ShellToolsBar: React.FC<ShellToolsBarProps> = ({drawer}) => {
  const classes = useStyles();
  const img = `${process.env.PUBLIC_URL}/images/logo.png`
  return (<div className={classes.root}>    
    <Toolbar>
      <IconButton
        //color="inherit"
        aria-label="open drawer"
        onClick={drawer.onOpen}
        edge="start"
        className={clsx(classes.menuButton, drawer.open && classes.hide)}>
        <MenuIcon color="primary"/>
      </IconButton>

      <img src={img} alt="logo"/>
      <Typography variant="body1" noWrap className={classes.iconLink} style={{ flex: 1 }} >
      </Typography>

      <div className={classes.search}>
        <div className={classes.searchIcon}><SearchIcon color="primary" /></div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </Toolbar>
  </div>);
}

export default ShellToolsBar;