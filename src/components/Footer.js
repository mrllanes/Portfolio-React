import Logo from "../assets/sslogo.jpg";

export default function Footer() {
    return (
        <footer className="justify-content-center">
            <p>
                &copy; 2020{" "}
                <img
                    src={Logo}
                    alt="Senall Sabres Logo"
                    className="rounded"
                    height="50px"
                />
            </p>
        </footer>
    );
}
