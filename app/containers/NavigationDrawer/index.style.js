export default function(theme) {
  return {
    root: {
      background: theme.palette.background.paper,
      padding: '0',
      margin: '0 auto',
    },
    rootOpen: {
      padding: '20px 8px',
    },
    drawer: {
      width: 300,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      marginTop: '3rem',
      padding: '5',
    },
    paper: {
      top: 65,
      background: theme.palette.common.paleGrey,
    },
    button: {
      border: `1px solid ${theme.palette.divider}`,
      padding: '15px 10px',
      width: '100%',
      maxWidth: '85px',
    },
    buttonClose: {
      padding: '35px 10px',
      border: 'none',
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    drawerOpen: {
      width: 300,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    activeOpen: {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      color: theme.palette.common.pureWhite,
      '&:hover': {
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
      },
    },
    activeClose: {
      color: theme.palette.primary.main,
    },
    hide: {
      display: 'none',
    },
    noScroll: {
      overflow: 'hidden',
    },
    scrollable: {
      overflow: 'auto',
      marginBottom: '4rem',
    },
    hr: {
      background: theme.palette.common.paleGrey,
    },
  };
}
