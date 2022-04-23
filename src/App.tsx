import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { TransactionsModal } from "./components/TransactionsModal";

Modal.setAppElement('#root');

export function App() {

  const [openModal, setOpenModal] = useState(false)

  function toggleModal(){
      setOpenModal(!openModal)
  }
  return (
      <>
      
      <TransactionsModal isOpen={openModal} onRequestClose={() => toggleModal()}/>
      <Header onRequestOpenModal={toggleModal} />
      <Dashboard/>
      <GlobalStyle />
      
      </>
  );
}