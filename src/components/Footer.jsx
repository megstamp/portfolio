export default function Footer() {

    const currentYear = new Date().getFullYear();
    const gitHubLink = "https://github.com/megstamp/portfolio"

    return(
        <>
        <div><small>&copy;</small> { currentYear }
        <br />
        <a href={ gitHubLink } target="blank"
        rel="noreferrer">Code in Github </a>

        </div>
        </>
    )
}