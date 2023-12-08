import { useState } from 'react';
import './App.css';
import { Header, Footer } from "./components";
import { AllRoutes } from './routes/AllRoutes';
import P1001 from "./assets/images/1001.png";
import P1002 from "./assets/images/1002.png";
import P1003 from "./assets/images/1003.png";
import P1004 from "./assets/images/1004.png";
import P1005 from "./assets/images/1005.png";
import P1006 from "./assets/images/1006.png";
function App() {
    const [products, setProducts] = useState([
        { id: 1, name: "Sony Wh-Ch510 Bluetooth Wireless", price: 149, img: P1001 },
        { id: 2, name: "boAt Rockerz 450", price: 49, img: P1002 },
        { id: 3, name: "JBL Tune 760NC", price: 179, img: P1003 },
        { id: 4, name: "Logitech H111 Wired", price: 39, img: P1004 },
        { id: 5, name: "APPLE Airpods Max Bluetooth Headset", price: 199, img: P1005 },
        { id: 6, name: "ZEBRONICS Zeb-Thunder Wired", price: 29, img: P1006 },
    ]);

    const [items, setItems] = useState([]);
    return (
        <div className="App">
            <Header items={items}/>
            <AllRoutes items={items} setItems={setItems} products={products} setProducts={setProducts}/>
            <Footer />
        </div>
    );
}

export default App;
