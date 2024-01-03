import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
            <img
               src="https://imatrix.com/wp-content/uploads/sites/12/2021/03/ecommerce.jpg"
               alt=""
               className="home__image"/>

           <div className="home__row">
              <Product 
              id="123"
              title="Benner Mystic 15.6inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for 
              Men and Women."
              price={11.96}
              rating={5}
              image="https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 

              />
              <Product 
              id="1234"
              title="2023 Acer Predator with 11th gen Intel core i9-10750H Processor Gaming Laptop"
              price={1500}
              rating={3}
              image="https://images.acer.com/is/image/acer/predator_triton17_x_ksp01_beyond%20performance?$responsive$" 
              />
            </div>

            <div className="home__row">
              <Product 
               id="12345"
               title="Samsung Z2 Flip Phone with Snapdragon 890 offering the ultimate performance in your hands."
               price={999}
               rating={2}
               image="https://images.samsung.com/is/image/samsung/p6pim/in/2208/gallery/in-galaxy-z-flip4-f721-bespoke-edition-yellow-front-color-431633-sm-f721b7xeinu-thumb-533233734?$172_172_PNG$" 
              
              />
              <Product 
               id="1234567"
               title="The New Generation Mackbook Pro with the latest M3 chip. Experience the Beast"
               price={2100}
               rating={2}
               image="https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large_2x.jpg"
              
              />
              <Product 
               id="12345678"
               title="LG W1978 65-inch(164cm) 4K QUAD-HD Android TV with four speakers and 2000 nits for the best viewing experience."
               price={1499}
               rating={5}
               image="https://www.lg.com/in/images/tvs/md07554866/gallery/65UQ9000PSD-D-01-v1.jpg" 
              
              />
            </div>

            <div className="home__row">
              <div className="lastrow">
              <Product 
               id="12"
               title="Benner Mystic 15.6inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for 
               Men and Women."
               price={22}
               rating={4}
               image="https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
