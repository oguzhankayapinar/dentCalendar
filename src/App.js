import { useEffect } from "react";

import { signUp, signIn } from "./config/firebase";

function App() {

  useEffect(() => {
    signIn("oguz@oguz.com", "123456").then(() => {
      console.log("Done")
    }).catch((e) => { console.log(e) })
  }, []);





  return (
    <div >
      <h1>Dent Calendar</h1>
    </div>
  );
}

export default App;
