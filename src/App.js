/* eslint-disable no-unused-vars */
import {
  Hero,
  Header,
  Footer,
  Pluses,
  CommunitySaying,
  WhatGetting,
} from "./components/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Pluses />
      <CommunitySaying />
      {/* <WhatGetting /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
