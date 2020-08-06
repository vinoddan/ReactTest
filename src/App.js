import React from 'react';
import logo from './logo.svg';
import './App.css';


const ProductsStatic = [
  {
    name: "Product 1",
    image: "data:image/jpeg;base64,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",
    price: 100,
    available: true,
    purchase: false
  },
  {
    name: "Product 2",
    image: "https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg",
    price: 200,
    available: true,
    purchase: false
  },
  {
    name: "Product 3",
    image: "https://img.freepik.com/free-vector/beauty-skin-care-background_52683-728.jpg?size=626&ext=jpg",
    price: 300,
    available: true,
    purchase: false
  },
  {
    name: "Product 4",
    image: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/04/2-2.jpg",
    price: 400,
    available: true,
    purchase: false
  },
  {
    name: "Product 5",
    image: "https://lh3.googleusercontent.com/proxy/GS21rk9SGSJyWGhlbgNqw2WWEXMQYHOdCbnWrAMC3Icb5cjiChyloD-963dxeu7d-W2mWuhO8NhtMSkNzVsnvNeVx53iBBA4ThytLYCdtcSUFahafCfdE0Xloc-TBC33KgrepgNQcsqNcalRptL7VBnh7lDVu68zrkc6ENA6AmdiHt8SUlm_V_RL1vXHJCAZy17de1FGjcHGQgSD1_V-0-JLFntQJ-ERGdu1P_y0esk5lZGXaYUf7EP66kNGbkS_V3X2Dqx8oN02Dz-B9gYkkae4Itkg",
    price: 20,
    available: true,
    purchase: false
  },
  {
    name: "Product 5",
    image: "https://lh3.googleusercontent.com/proxy/rke78XVvv6UyoRallGAUB8hq9Pe7J2M4Es64XVaTtAKQndtULnSLHlATf5GrFgX6OsZ_CBFP8fqkKAcidqjMBIKFD1hQoI-AWNjkU5CQx6BjJG6pw5FXpXgR3krVypy4Ev0rH9fVUz4",
    price: 50,
    available: true,
    purchase: false
  }
]

function App() {
  const [Products, setProducts] = React.useState(ProductsStatic);

  const [points, setPoints] = React.useState(0)
  const [price, setPrice] = React.useState(0)
  const purchaseProduct = (priceProduct, index) => {
    Products[index].purchase = true
    setProducts(Products)
    let newPrice = price + priceProduct
    setPrice(newPrice)
    calculatePoints(newPrice)
  }

  const removeProduct = (priceProduct, index) => {
    Products[index].purchase = false
    setProducts(Products)
    let newPrice = price - priceProduct
    setPrice(newPrice)
    calculatePoints(newPrice)
  }

  const calculatePoints = (totalPrice) => {
    let points = 0
    if (totalPrice > 100) {
      totalPrice = totalPrice - 100
      points = points + totalPrice * 2 + 50
    } else if (totalPrice > 50) {
      totalPrice = totalPrice - 50
      points = points + totalPrice * 1
    }
    setPoints(points)
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>Total price => {price}</p>
        <p>Your Points => {points}</p>
        <div className="productsWrapper">
          {Products.map((product, index) => (
            <div className="productWrapper">
              <div style={{
                backgroundImage: `url(${product.image})`,

              }} className="imageCss"></div>
              <span className="ml10">{product.name}</span>
              <span className="ml10">price : {product.price}$</span>
              <br />
              {!product.purchase ? <button className="buttonCss ml10" onClick={() => purchaseProduct(product.price, index)}>Purchase</button> : <button className="buttonCss ml10 rejectButton" onClick={() => removeProduct(product.price, index)}>Remove</button>}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
