import { Container, Row, Col } from "react-bootstrap";
// Homepage includes some react-bootstrap components to shape the page, introducing the bootstrap grid.
export default function HomePage() {
    return (
        <div className="homePage">
            <Container>
                <Row style={{marginTop: 1 + 'em'}}>
                    <h2>Welcome to our Florists.</h2>
                </Row>
                <Row>
                    <Col>
                        <img src="https://user-images.githubusercontent.com/118732445/203775030-f6d39588-6b73-42eb-a396-d50098078501.jpg"
                            alt="LOTS OF FLOWERS"
                            className="homeImage"/>
                    </Col>
                    <Col>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis mauris ut velit vestibulum efficitur. Duis nec quam ipsum. Fusce cursus lacus ut elit imperdiet, ut venenatis orci sodales. Etiam et ultricies nulla. Quisque ipsum ex, blandit porta iaculis ut, fringilla at nisl. Maecenas facilisis massa nec ipsum condimentum volutpat. In hac habitasse platea dictumst. Aenean convallis, leo sit amet suscipit tristique, lectus turpis ultricies augue, eu tincidunt nisl libero nec eros. Fusce finibus porttitor arcu, non porttitor ipsum molestie ac. Morbi malesuada dui dolor. Ut id blandit arcu. Cras pharetra fermentum nunc sed venenatis. Morbi gravida elit id tincidunt tempor. Fusce malesuada ut odio sit amet dapibus. Morbi eu tempor velit, nec rhoncus neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Pellentesque quis imperdiet ex, id tempus purus. Fusce ultricies leo quis purus laoreet pulvinar. Fusce vitae fermentum ipsum. Nam a euismod tellus. Vestibulum finibus sollicitudin pellentesque. Curabitur id sem est. Phasellus nulla ipsum, pellentesque rutrum venenatis quis, semper vitae nulla. Duis commodo dui malesuada lorem semper, vel imperdiet lectus tincidunt. Ut urna orci, luctus eu convallis in, aliquam eget ligula.

                        Aliquam facilisis vehicula orci ac semper. Pellentesque vitae augue quis dolor porta maximus ut quis enim. Integer ultrices id lorem vitae fringilla. Mauris aliquet cursus ex et congue. Maecenas maximus ipsum mi, semper hendrerit orci mattis non. Etiam neque orci, accumsan vitae venenatis nec, rutrum non massa. Ut nisl augue, congue sit amet justo quis, gravida commodo turpis.

                        Cras venenatis turpis in tristique maximus. Praesent et aliquet sem. Donec tincidunt justo non massa rhoncus cursus. Etiam imperdiet pulvinar molestie. Maecenas id laoreet ligula, vel pharetra sapien. Maecenas elementum sed libero vel ullamcorper. Cras at risus nec leo euismod sodales. Donec tempor interdum mauris. Maecenas vel leo sollicitudin tellus eleifend iaculis nec et diam. Aliquam faucibus eget felis quis blandit. Aenean non elit et felis posuere posuere. Suspendisse ligula augue, fringilla vitae justo et, consectetur molestie ante. Nam sollicitudin porta tortor, in tempor enim dapibus at. Donec quis tellus nec massa blandit venenatis vehicula non eros. Donec hendrerit velit eu ante cursus, vitae efficitur nisl commodo. Morbi tellus neque, condimentum ut viverra vel, iaculis ut elit.

                        Phasellus non turpis at sem auctor fermentum. Sed quis odio quis dui convallis imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Morbi imperdiet ultricies odio, vel consectetur lectus consectetur sit amet. Donec non nunc a nulla fringilla convallis. Pellentesque sed euismod enim, volutpat tempor nulla. Morbi molestie ac sapien sit amet lacinia. Pellentesque eu diam vitae dui ornare dignissim. 
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
