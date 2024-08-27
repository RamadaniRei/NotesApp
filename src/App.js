import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import NoteInput from "./Components/NoteInput";
function App() {
  return (
    <div className={"container"}>
      <Header />
      <NoteInput />
      <Content />
    </div>
  );
}

export default App;
