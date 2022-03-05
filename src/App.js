import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Page from "./components/Page";

function App() {
  const [pages] = useState([
    "Home",
    "About",
    "Projects",
    "Resume",
    "Contact"
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  
  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
      <main>
      <Page currentPage={currentPage} />
      </main>

    </div>
  );
}

export default App;

