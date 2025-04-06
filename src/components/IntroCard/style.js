const useStyles = () => ({
    container: {
        width: '100%',
        '& *': {
            textAlign: 'center'
        }
    },
    avatar: {
        '& img': {
            height: '100px',
            width: 'auto',
            borderRadius: '51px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            transition: 'box-shadow .5s',
            '&:hover': {
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            }
        }
    }
})

export { useStyles };