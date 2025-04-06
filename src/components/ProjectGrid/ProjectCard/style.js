const useStyles = () => ({
    container: {
        width: 400, 
        height: 300,
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent:'space-between',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        transition: 'box-shadow .5s',
        '&:hover': {
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
    }
})

export { useStyles };