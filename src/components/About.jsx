import { Container, Row, Col } from "react-bootstrap"

export default function About() {

    return(
        <section>
            <Container className="bg-danger">
                <Row>
                    <Col>
                    <img src="https://picsum.photos/300/300"
                    alt="profile pic" />
                    </Col>

                    <Col>
                    <h1>Hi I'm Meghann</h1>
                    <p>I'm a student studying software engineering at Bocacode.</p>
                    <p> contact me : email address</p>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}