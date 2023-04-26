import { Github } from "react-bootstrap-icons";

export default function Footer() {

    const gitHubUrl = "https://github.com/megstamp/portfolio"
    const currentYear = new Date().getFullYear();

    return(
        <footer>
        <p className="text-center">
        <a href={ gitHubUrl } 
        target="_blank"
        rel="noreferrer"
            className="button-effect">
            <Github size="60" color="black"/>
            </a>
            <small>&copy;</small> { currentYear }
        </p>
        </footer>
    )
}