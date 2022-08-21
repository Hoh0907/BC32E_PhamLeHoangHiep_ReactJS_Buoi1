import Banner from "./component/BaiTapLayoutComponent/Banner";
import Footer from "./component/BaiTapLayoutComponent/Footer";
import Heder from "./component/BaiTapLayoutComponent/Heder";
import Items from "./component/BaiTapLayoutComponent/Items";


function App() {
  return (
    <div className="App">
      <div className=" bg-dark">
        <div className="container"  style={{maxWidth:'1320px'}}><Heder/></div>
      </div>
      <div className='pt-5 container' style={{maxWidth:'1320px'}}><Banner/></div>
      <div className='container'style={{maxWidth:'1320px'}}><Items/></div>
      <div className="bg-dark"><Footer/></div>
    </div>
  );
}

export default App;
