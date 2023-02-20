import React from 'react';
import UsersContextProvider from './ContactContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddContact from './components/AddContact/AddContact';
import EditContact from './components/EditContact/EditContact';
import ContactList from './components/ContactList/ContactList';
import Details from './components/Details/Details';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <UsersContextProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/users" element={<><AddContact /><ContactList /></>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </UsersContextProvider>
  )
}

export default App