import { Container, Row, Col} from "react-bootstrap"

export default function Skill() {

    return(
        <section>
            <Container>
                <Row>
                    <Col className="text-center">
                    <h2> Skills That I am Learning</h2>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ul>
                            <li>React.js</li>
                            <li>JS</li>
                            <li>Express.js</li>
                            <li>CSS</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </ section>
    )
}