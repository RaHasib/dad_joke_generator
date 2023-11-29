function footer() {
    const currentYear = new Date().getFullYear();

    const footerStyle = {
        paddingBottom: '10px',
        color: 'white',
    };

    return (
        <div style={footerStyle}>
            Raisul Amin Hasib
            &copy;
            <span id="copyright">
             {currentYear}
         </span>

        </div>
    )
}

export default footer;
