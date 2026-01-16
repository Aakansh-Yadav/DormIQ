import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='footer-custom'>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; DormIQ - Smart Dormitory Management</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
