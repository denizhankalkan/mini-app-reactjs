import { alpha } from '@material-ui/core/styles';

export default function(theme) {
  return {
    root: {
      display: 'flex',
    },
    logoContainer: {
      height: '55px',
      borderRight: `1px solid ${theme.palette.divider}`,
      paddingRight: '10px',
      marginRight: '10px',
      marginLeft: theme.spacing(1.5),
      marginTop: theme.spacing(0.5),
    },
    img: {
      padding: 7,
      width: '100%',
    },
    icon: {
      fontSize: 30,
      color: 'pink',
    },
    spacer: {
      flexGrow: 1,
    },
    appBar: {
      borderBottom: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: theme.palette.divider,
      backgroundColor: '#004346',
      color: 'grey',
      paddingLeft: 2,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      padding: '0px 20px 0 0',
    },
    sidebarToogle: {
      marginLeft: theme.spacing(1.5),
      color: theme.palette.common.waikaGrey,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      ...theme.mixins.toolbar,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(9),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      // paddingTop: theme.spacing(1),
      // paddingRight: theme.spacing(1),
      // paddingBottom: theme.spacing(1),
      // paddingLeft: theme.spacing(10),
      // transition: theme.transitions.create('width'),
      // width: '100%',
      // [theme.breakpoints.up('sm')]: {
      //   width: 120,
      //   '&:focus': {
      //     width: 200,
      //   },
      // },
    },
    actions: {
      width: '100%',
      textAlign: 'right',
      '&>div': {
        display: 'contents',
      },
    },
    bl1: { borderRight: `2px solid ${theme.palette.divider}` },
  };
}
