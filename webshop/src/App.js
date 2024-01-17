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
import Supplier from './pages/admin/Supplier';

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
        {/*   <Route path='product/:MINGI_MUUTUJA' element={ <SingleProduct /> } />
          :MINGI_MUUTUJA ---> selle pean kasutusele võtma SingleProduct.jsx failis
        */}
        <Route path='admin' element={ <AdminHome /> } />
        <Route path='admin/add' element={ <AddProduct /> } />
        <Route path='admin/edit/:product_id' element={ <EditProduct /> } />
        <Route path='admin/products' element={ <MaintainProducts /> } />
        <Route path='admin/categories' element={ <MaintainCategories /> } />
        <Route path='admin/shops' element={ <MaintainShops /> } />
        <Route path='admin/supplier' element={ <Supplier /> } />
        <Route path='*' element={ <NotFound /> } /> 
      </Routes>
    </div>
  );
}

export default App;

  // 13. 29.12 R  09.00-12.15   uue ENG projekti
  // 14. 04.01 N  09.00-12.15   KOJU: AddProduct+SingleProduct
  // 15. 08.01 E  09.00-12.15   localStorage-sse ostukorvi, kujundused, API päringud KOJU: Terve hunniku 11x
  // 16. 15.01 E  09.00-12.15   andmebaas, objekt ostukorvis KOJU: Proovitöö
  // 17. 18.01 N  13.00-16.15   andmebaas, components KOJU: lõpuprojekt
  // 18. 25.01 N   poolik päev 1.5h
  // 19. 01.02??? N   poolik päev 1.5h

  // KODUS:
  // +2 keelt juurde
  // +HomePage --> sorteerimine
  // +MaintainProducts --> samamoodi välja kuvamine nagu HomePages + kustutamine (refreshiga tagasi)
  // +HomePage --> saab ostukorvi lisada
  // +Cart --> saab ostukorvi failist kätte
  //          tühjendamine, ühe kustutamine, ostukorvi kogusumma, dünaamika (kui on tühi siis..., kui on ostukorvis siis...)
  // +NotFound lehe võiks ilusamaks teha (mingi nupp, mis viiks kuhugi, mingi pilt?)
  // +MaintainProducts --> ühe kustutamine
  // +Panna Toastify peale -> toast hüppaks välja toodet kustutades ja toodet ostukorvi lisades
  // +Mõnele teisele projektile (veebipood) ka panna Bootstrap + tõlge
  // +Firebase-i üles(!)
  // +Kõik tõlked lisada

  // +AddProduct (EditProduct järgi, kontrollida eesti keelsest kuidas tulem jäi)
  // -SingleProduct (EditProduct järgi, kontrollida eesti keelsest kuidas tulem jäi)
  // EditProductis dropdown AddProducti järgi

  // +Eesti keelse projekti järgi: võtta .active true/false kasutusele
  // +HomePage --> pilt läheb must-valgeks kui on mitteaktiivne, 
  // +             lisa ostukorvi nupp ära peita kui on mitteaktiivne
  // +MaintainProducts --> taust on helepunane kui on mittaktiivne, taust on heleroheline kui on aktiivne
  // SingleProduct --> kirjutada tekst "Toode on mitteaktiivne" kui ta on mitteaktiivne
