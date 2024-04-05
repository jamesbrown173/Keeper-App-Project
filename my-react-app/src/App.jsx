import React, { useState } from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Note from "./assets/components/Note";
import CreateArea from "./assets/components/CreateArea";

function App() {
  const [titleText, setTitleText] = useState();
  const [contentText, setContentText] = useState();

  function handleTyping() {
    console.log(`function handleTyping()`);
  }

  return (
    <div>
      <Header />
      <CreateArea onType={handleTyping} />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
