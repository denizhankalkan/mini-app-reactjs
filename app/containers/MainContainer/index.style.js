export default function(theme) {
  return {
    root: {
      display: 'flex',
      overflowX: 'hidden',
    },
    content: {
      flexGrow: 0,
      paddingTop: '1em',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      marginTop: '3em',
    },
    typography: {
      fontWeight: 'bold',
    },
    actionRoot: {
      padding: '8px 8px 8px 16px',
      backgroundColor: '#fddc6c',
    },
    action: {
      margin: 0,
    },
    icons: {
      marginLeft: 'auto',
    },
    expand: {
      padding: '8px 8px',
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    collapse: {
      padding: 16,
    },
    checkIcon: {
      fontSize: 20,
      color: '#b3b3b3',
      paddingRight: 4,
    },
    button: {
      padding: 0,
      textTransform: 'none',
    },
    incomingCall: {
      backgroundColor: '#d0d0d0',
    },
    incomingCallTitle: {
      padding: '5px',
      backgroundColor: '#d3d3d3',
      margin: 0,
    },
    paper: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.pureWhite,
      minHeight: 100,
      minWidth: 200,
    },
    divider: {
      marginBottom: 10,
    },
  };
}
