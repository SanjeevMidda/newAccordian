import { useState } from "react";
import Block from "./components/Block";

function App() {

  const [status, setStatus] = useState(0);

  function close(){
    setStatus(0);
  }

  return (
    <div className="App">
     <Block title = "A" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt harum recusandae obcaecati? Ullam illum omnis praesentium, possimus molestiae quis rerum porro mollitia nesciunt, soluta, doloribus vel expedita dolorem. Dignissimos?" changeStatus = {() => setStatus(1)} newStatus = {status === 1}/>

     <Block title = "B" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolorem recusandae! Ipsa est, similique mollitia quisquam exercitationem atque amet laudantium aut quae ipsam dignissimos tenetur. Dolore, necessitatibus placeat? Quos, ad?" changeStatus = {() => {setStatus(2)}} newStatus = {status === 2}/>

     <Block title = "C" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, dolorem recusandae! Ipsa est, similique mollitia quisquam exercitationem atque amet laudantium aut quae ipsam dignissimos tenetur. Dolore, necessitatibus placeat? Quos, ad?" changeStatus = {() => {setStatus(3)}} newStatus = {status === 3}/>

     <div className="circle">
      <h1 onClick={close}>C</h1>

     </div>
    </div>
  );
}

export default App;
