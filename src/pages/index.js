import React from "react"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`peritos`, `documentoscopia`, `poligrafo`]} />
    <Container className="text-center">
      <Row className="justify-content-center my-3">
        <Col>
          <h1>HOME</h1>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
