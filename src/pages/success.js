import { Link } from "gatsby";
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Layout from "../components/Layout";
import { useLocation } from "@reach/router";
import { transparentize } from "polished";

const MessageWrapper = styled.div`
  min-height: calc(100vh - 144px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background: ${({ theme }) => transparentize(0.5, theme.primary)};
  text-align: center;

  h1 {
    margin-bottom: 1.5rem;
  }
  a {
    display: inline-block;
    margin-top: 0.5rem;
  }
`;

const SuccessPage = () => {
  return (
    <Layout
      title={"Thanks for your message"}
      description={
        "Thanks for your message! I will get back to you as soon as possible."
      }
    >
      <Container>
        <Row>
          <Col>
            <MessageWrapper>
              <Message>
                <h1>Thanks for your message</h1>
                <p>I will get back to you as soon as possible.</p>
                <Link to={"/"}>Go back</Link>
              </Message>
            </MessageWrapper>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SuccessPage;
