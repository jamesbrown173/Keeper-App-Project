import "./App.css";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Note from "./assets/components/Note";
import notes from "./assets/notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((x) => {
        return <Note key={x.id} title={x.title} content={x.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
