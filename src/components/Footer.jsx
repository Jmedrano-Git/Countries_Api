const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3 mt-auto">
            <div className="container text-center small">
                Paises · Hecho con React + Vite · {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default Footer;