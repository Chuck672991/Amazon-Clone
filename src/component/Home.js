import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        className="banner-img"
        alt="amazon-bg"
      />

      <div class="product-container">
        <div class="row ">
          <div class="col">
            <Product
              title="Toy Car"
              description={
                "Zoom into the world of fun with our Toy Car! This sleek and speedy racer is designed for hours of imaginative play. It features realistic details, working wheels, and vibrant colors that will delight kids as they race to victory."
              }
              price={10}
              image="https://bachaaparty.com/cdn/shop/files/DSC02221_03fb1167-5e28-4eba-8f09-a0961844a433_540x.jpg?v=1692941462"
              rating={5}
              id={21}
            />{" "}
          </div>
          <div class="col">
            <Product
              title="T-shirt"
              description={
                "Elevate your style with our classic T-shirt! Crafted from soft and breathable fabric, our T-shirt is a wardrobe essential. It offers a comfortable fit, a timeless design, and a variety of colors to match your unique fashion sense."
              }
              price={5}
              image="https://www.kayazar.com/images/product_gallery/1650896673_Akatsuki-kayazar-men-t-shirts-A4-white.webp"
              rating={5}
              id={20}
            />{" "}
          </div>
        </div>

        <div class="row ">
          <div class="col">
            <Product
              title="Electronic Fan"
              id={11}
              description={
                "Stay cool and comfortable with our Electronic Fan! This high-performance fan is a lifesaver during hot summer days. It offers adjustable speed settings, a quiet motor, and a convenient remote control, making it the ideal choice for any room."
              }
              price={110}
              image="https://cdn.britannica.com/38/122038-004-95F22382/fan.jpg"
              rating={5}
            />{" "}
          </div>
          <div class="col">
            <Product
              id={91}
              title="Mercury Gym"
              description={
                "A t-shirt, often referred to simply as a tee  is a versatile and universally popular item of clothing. Typically constructed from comfortable, breathable materials like cotton, t-shirts are characterized by their short sleeves, round neckline, and straightforward design. T-shirts come in various styles, from classic crewneck to V-neck, and can be found in a wide range of colors, patterns, and graphic prints."
              }
              price={10}
              image="https://media.naheed.pk/catalog/product/cache/fd6f1e57839b9b324771e8de21428b3f/1/1/1166658-1.jpg"
              rating={5}
            />{" "}
          </div>
          <div class="col">
            <Product
              id={92}
              title="Brown Teddy"
              description={
                "Meet our cuddly Teddy Bear! With soft, plush fur and a friendly smile, this teddy bear is the perfect companion for children of all ages. Whether it's naptime or playtime, our bear is always ready for a hug and adventure."
              }
              price={90}
              image="https://wallmantra.com/wp-content/uploads/frantic-trading-pvt-ltd-soft-toys-bow-tie-soft-premium-coffee-brown-big-teddy-bear-32318678433958.png"
              rating={5}
            />{" "}
          </div>
        </div>

        <div class="row">
          <div class="col">
            <Product
              id={27}
              title="Stationary Box"
              description={
                "Discover a world of creativity with our Stationaries set! This comprehensive collection includes everything you need to bring your ideas to life. From vibrant markers and precision pens to sketchbooks and erasers, our stationaries are your artistic toolkit."
              }
              price={40}
              image="https://live.staticflickr.com/1417/1305105866_9bab6af9c1_b.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
