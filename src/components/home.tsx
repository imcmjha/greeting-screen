import * as React from "react";

import { Card, Col, Row } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import CardTitle from 'reactstrap/lib/CardTitle';
import Greeting from './Greeting';
import Weather from './Weather';

export class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <Row>
          <Col sm={3} lg={3} md={3} />
          <Col sm={6} lg={6} md={6}>
            <Card>
              <CardBody>
                <CardTitle>Hey there </CardTitle>
                <p>
                  <Greeting />
                </p>
                <p>
                  <Weather />
                </p>
              </CardBody>
            </Card>  
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Home;