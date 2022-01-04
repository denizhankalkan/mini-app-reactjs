export default function(theme) {
  return {
    root: {
      width: '%100',
      margin: '1ch',
      height: 'max-content',
      '& p': {
        lineHeight: 'unset !important',
      },
      '& .MuiCardHeader-root': {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px',
        borderBottom: `solid 1px ${theme.palette.divider}`,
      },

      '& .MuiCardHeader-avatar': {
        marginTop: '-5px',
        marginLeft: '10px',
        marginRight: '5px',
      },
      '& .MuiCardHeader-action': {
        marginTop: '-4px',
        marginRight: '16px',
      },
      '& .MuiCardContent-root': {
        padding: '10px',
      },
      '& .MuiCardContent-root:last-child': {
        paddingBottom: '5px',
      },
    },
    rootMd: {
      width: 400,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    cardTitle: {
      fontSize: '0.75rem',
    },
    cardTitleGrid: {
      width: '14ch',
      marginTop: '-7px',
    },
    cardTitleGridWithAvatar: {
      width: '22ch',
      marginTop: '0px',
    },
    strongFontW: {
      fontWeight: 50,
      fontSize: 15,
      marginLeft: '11px',
      marginTop: 10,
    },
    strongFontElement: {
      fontSize: 'large',
    },
    strongFontNumber: {
      fontSize: 'xx-large',
    },
    cardContent: {
      '& .MuiCardHeader-content': {
        marginLeft: '1ch',
      },
    },
  };
}
