import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import ContactUs from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import SingleProduct from './pages/global/SingleProduct';
import NotFound from './pages/global/NotFound';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLangToEN = () => {
    i18n.changeLanguage("en");
  }

  const changeLangToEE = () => {
    i18n.changeLanguage("ee");
  }

  return (
    <div className="App">

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
      
      <Routes>
        <Route path='' element={ <HomePage /> } /> 
        <Route path='cart' element={ <Cart /> } /> 
        <Route path='contact' element={ <ContactUs /> } /> 
        <Route path='shops' element={ <Shops /> } /> 
        <Route path='product' element={ <SingleProduct /> } /> 
        <Route path='*' element={ <NotFound /> } /> 
        <Route path='admin' element={ <AdminHome /> } />
        <Route path='admin/add' element={ <AddProduct /> } />
        <Route path='admin/edit' element={ <EditProduct /> } />
        <Route path='admin/products' element={ <MaintainProducts /> } />
        <Route path='admin/categories' element={ <MaintainCategories /> } />
        <Route path='admin/shops' element={ <MaintainShops /> } />
      </Routes>
    </div>
  );
}

export default App;

  // 13. 29.12 R  09.00-12.15   uue ENG projekti
  // 14. 04.01 N  09.00-12.15
  // 15. 08.01 E  13.00-16.15
  // 16. 11.01 N  13.00-16.15
  // 17. 15.01 E  13.00-16.15
  // 18. 22.01 E   poolik päev 1.5h
  // 19. 29.01 E   poolik päev 1.5h

  // KODUS:
  // 2 keelt juurde
  // Mõnele teisele projektile (veebipood) ka panna Bootstrap + tõlge
  // HomePage --> sorteerimine
  // MaintainProducts --> samamoodi välja kuvamine nagu HomePages + kustutamine (refreshiga tagasi)
  // HomePage --> saab ostukorvi lisada
  // Cart --> saab ostukorvi failist kätte
  //          tühjendamine, ühe kustutamine, ostukorvi kogusumma, dünaamika (kui on tühi siis..., kui on ostukorvis siis...)
  // Panna Toastify peale -> toast hüppaks välja toodet kustutades ja toodet ostukorvi lisades
  // NotFound lehe võiks ilusamaks teha (mingi nupp, mis viiks kuhugi, mingi pilt?)
  // Firebase-i üles
  // Kõik tõlked lisada
