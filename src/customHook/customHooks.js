function useTitle() {

    return (title) => {
        document.title = `${title} | E-Store`
    }
}



export { useTitle };