import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


function NavigationBar() {
  const { t, i18n } = useTranslation();

  const changeLangToEN = () => {
    i18n.changeLanguage("en");
  }

  const changeLangToEE = () => {
    i18n.changeLanguage("ee");
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Mihkel's webshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
              <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
              <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
              <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <img className="lang" onClick={changeLangToEN} src="/english.png" alt="" />
                <img className="lang" onClick={changeLangToEE} src="/estonian.png" alt="" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavigationBar