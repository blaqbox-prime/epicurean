import React from "react";
import Strip from "../components/Strip";
import MenuItem from "../components/MenuItem";
import GridList from "../components/GridList";

function Menu() {
  return (
    <main className="menu-page">
      <header className="menu-header">
        <Strip
          className="breakfast-strip active"
          title="Breakfast"
          subtitle="Start Your Day Right"
          imgUrl="./assets/images/breakfast-strip.jpg"
          link="#breakfast-menu"
        />

        <Strip
          className="lunch-strip"
          imgUrl="./assets/images/lunch-strip.jpg"
          title="Lunch"
          subtitle="Lunch Time With Us"
          link="#lunch-menu"
        />

        <Strip
          imgUrl="./assets/images/dinner-strip.jpg"
          title="Dinner"
          subtitle="Fine Dining Under The Stars"
          className="Dinner-strip"
          link="#dinner-menu"
        />

        <Strip
          className="bakery-strip"
          imgUrl="./assets/images/bakery-strip.jpg"
          title="Bakery"
          subtitle="Scrumptious Moments"
          link="#bakery-menu"
        />
      </header>

      {/* 
      
        Breakfast Menu

      */}

      <section
        className="breakfast-menu menu text-center"
        aria-label="breakfast-menu"
        id="breakfast-menu"
      >
        <div className="container">
          <p className="section-subtitle label-2">
            Rise and Shine with Our Delicious Breakfast Menu
          </p>

          <h2 className="headline-1 section-title">Breakfast</h2>
          <p className="section-text">
            There's nothing like starting your day with a delicious breakfast,
            and our menu has everything you need to get your morning off to a
            great start.
          </p>

          <GridList>
            <MenuItem
              title="Greek Salads"
              description="Tomatoes, green bell pepper, sliced cucumber onion, olives
                          and feta cheese."
              imgUrl="assets/images/menu-1.png"
              price={49.99}
              alt="greek salad"
              seasonal
            />

            <MenuItem
              title="Lasagne"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
              imgUrl="assets/images/menu-2.png"
              price={39.99}
              alt="lasagne"
            />

            <MenuItem
              title="Butternut Pumpkin"
              description="Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
              imgUrl="assets/images/menu-3.png"
              price={29.99}
              alt="Butternut Pumpkin"
            />

            <MenuItem
              title="Tokusen Wagyu"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices."
              imgUrl="assets/images/menu-4.png"
              price={23.99}
              alt="Tokusen Wagyu"
              isNew
            />

            <MenuItem
              title="Olivas Rellenas"
              description="Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper"
              imgUrl="assets/images/menu-5.png"
              price={23.99}
              alt="Olivas Rellenas"
            />

            <MenuItem
              title="Opu Fish"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
              imgUrl="assets/images/menu-6.png"
              price={23.99}
              alt="Opu Fish"
            />
          </GridList>
          <img
              src="assets/images/shape-6.png"
              width={120}
              height={115}
              loading="lazy"
              alt="shape"
              className="shape shape-2"
            />


            <img
              src="assets/images/shape-8.png"
              width={120}
              height={115}
              loading="lazy"
              alt="shape"
              className="shape shape-2"
            />

<img
              src="assets/images/shape-7.png"
              width={120}
              height={115}
              loading="lazy"
              alt="shape"
              className="shape shape-3"
            />
        </div>
      </section>

      {/* 
      
        Lunch Menu

      */}

      <section
        className="lunch-menu menu text-center"
        aria-label="lunch-menu"
        id="lunch-menu"
      >
        <div className="container">
          <p className="section-subtitle label-2">
            Satisfy Your Midday Cravings with Our Flavorful Lunch Menu
          </p>

          <h2 className="headline-1 section-title">Lunch</h2>
          <p className="section-text">
            Come and join us for lunch and experience the ultimate in flavor and
            satisfaction at our restaurant.
          </p>

          <GridList>
            <MenuItem
              title="Greek Salads"
              description="Tomatoes, green bell pepper, sliced cucumber onion, olives
                          and feta cheese."
              imgUrl="assets/images/menu-1.png"
              price={49.99}
              alt="greek salad"
              seasonal
            />

            <MenuItem
              title="Lasagne"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
              imgUrl="assets/images/menu-2.png"
              price={39.99}
              alt="lasagne"
            />

            <MenuItem
              title="Butternut Pumpkin"
              description="Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
              imgUrl="assets/images/menu-3.png"
              price={29.99}
              alt="Butternut Pumpkin"
            />

            <MenuItem
              title="Tokusen Wagyu"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices."
              imgUrl="assets/images/menu-4.png"
              price={23.99}
              alt="Tokusen Wagyu"
              isNew
            />

            <MenuItem
              title="Olivas Rellenas"
              description="Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper"
              imgUrl="assets/images/menu-5.png"
              price={23.99}
              alt="Olivas Rellenas"
            />

            <MenuItem
              title="Opu Fish"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
              imgUrl="assets/images/menu-6.png"
              price={23.99}
              alt="Opu Fish"
            />
          </GridList>

          <img
              src="assets/images/shape-4.png"
              width={120}
              height={115}
              loading="lazy"
              alt="shape"
              className="shape shape-3"
            />

<img
              src="assets/images/shape-2.png"
              width={120}
              height={115}
              loading="lazy"
              alt="shape"
              className="shape shape-1"
            />

        </div>
      </section>

      {/* 
      
        Dinner Menu
      
      */}

      <section
        className="dinner-menu menu text-center"
        aria-label="dinner-menu"
        id="dinner-menu"
      >
        <div className="container">
          <p className="section-subtitle label-2">
            Indulge in an Unforgettable Dining Experience
          </p>

          <h2 className="headline-1 section-title">Dinner</h2>
          <p className="section-text">
            As the sun sets and the evening begins, it's time to treat yourself
            to an unforgettable dining experience at our restaurant. Our dinner
            menu features a tempting selection of dishes, crafted with care by
            our skilled chefs.
          </p>

          <GridList>
            <MenuItem
              title="Greek Salads"
              description="Tomatoes, green bell pepper, sliced cucumber onion, olives
                          and feta cheese."
              imgUrl="assets/images/menu-1.png"
              price={49.99}
              alt="greek salad"
              seasonal
            />

            <MenuItem
              title="Lasagne"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
              imgUrl="assets/images/menu-2.png"
              price={39.99}
              alt="lasagne"
            />

            <MenuItem
              title="Butternut Pumpkin"
              description="Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
              imgUrl="assets/images/menu-3.png"
              price={29.99}
              alt="Butternut Pumpkin"
            />

            <MenuItem
              title="Tokusen Wagyu"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices."
              imgUrl="assets/images/menu-4.png"
              price={23.99}
              alt="Tokusen Wagyu"
              isNew
            />

            <MenuItem
              title="Olivas Rellenas"
              description="Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper"
              imgUrl="assets/images/menu-5.png"
              price={23.99}
              alt="Olivas Rellenas"
            />

            <MenuItem
              title="Opu Fish"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
              imgUrl="assets/images/menu-6.png"
              price={23.99}
              alt="Opu Fish"
            />
          </GridList>
        </div>
      </section>

      {/* 
      
        Drinks Menu
      
      */}

      <section
        className="drinks-menu menu text-center"
        aria-label="drinks-menu"
        id="drinks-menu"
      >
        <div className="container">
          <p className="section-subtitle label-2">
            Raise a Glass to Good Times
          </p>

          <h2 className="headline-1 section-title">Drinks</h2>
          <p className="section-text">
            Whether you're celebrating a special occasion or simply enjoying a
            night out with friends, our specialty drinks menu has everything you
            need to raise a glass and have a great time.
          </p>

          <GridList>
            <MenuItem
              title="Greek Salads"
              description="Tomatoes, green bell pepper, sliced cucumber onion, olives
                          and feta cheese."
              imgUrl="assets/images/menu-1.png"
              price={49.99}
              alt="greek salad"
              seasonal
            />

            <MenuItem
              title="Lasagne"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
              imgUrl="assets/images/menu-2.png"
              price={39.99}
              alt="lasagne"
            />

            <MenuItem
              title="Butternut Pumpkin"
              description="Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
              imgUrl="assets/images/menu-3.png"
              price={29.99}
              alt="Butternut Pumpkin"
            />

            <MenuItem
              title="Tokusen Wagyu"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices."
              imgUrl="assets/images/menu-4.png"
              price={23.99}
              alt="Tokusen Wagyu"
              isNew
            />

            <MenuItem
              title="Olivas Rellenas"
              description="Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper"
              imgUrl="assets/images/menu-5.png"
              price={23.99}
              alt="Olivas Rellenas"
            />

            <MenuItem
              title="Opu Fish"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
              imgUrl="assets/images/menu-6.png"
              price={23.99}
              alt="Opu Fish"
            />
          </GridList>
        </div>
      </section>

      {/* 
      
        Desserts Menu
      
      */}

      <section
        className="desserts-menu menu text-center"
        aria-label="desserts-menu"
        id="desserts-menu"
      >
        <div className="container">
          <p className="section-subtitle label-2">
            Indulge in Sweet Temptations with Our Irresistible Desserts
          </p>

          <h2 className="headline-1 section-title">Desserts</h2>
          <p className="section-text">
            End your meal on a high note with our irresistible desserts menu.
            Our skilled pastry chefs have created a range of delectable treats,
            from classic favorites like creamy cheesecake and warm apple pie to
            inventive creations like chocolate lava cake and seasonal fruit
            tarts.
          </p>

          <GridList>
            <MenuItem
              title="Greek Salads"
              description="Tomatoes, green bell pepper, sliced cucumber onion, olives
                          and feta cheese."
              imgUrl="assets/images/menu-1.png"
              price={49.99}
              alt="greek salad"
              seasonal
            />

            <MenuItem
              title="Lasagne"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
              imgUrl="assets/images/menu-2.png"
              price={39.99}
              alt="lasagne"
            />

            <MenuItem
              title="Butternut Pumpkin"
              description="Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
              imgUrl="assets/images/menu-3.png"
              price={29.99}
              alt="Butternut Pumpkin"
            />

            <MenuItem
              title="Tokusen Wagyu"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices."
              imgUrl="assets/images/menu-4.png"
              price={23.99}
              alt="Tokusen Wagyu"
              isNew
            />

            <MenuItem
              title="Olivas Rellenas"
              description="Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper"
              imgUrl="assets/images/menu-5.png"
              price={23.99}
              alt="Olivas Rellenas"
            />

            <MenuItem
              title="Opu Fish"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
              imgUrl="assets/images/menu-6.png"
              price={23.99}
              alt="Opu Fish"
            />
          </GridList>

          <img
              src="assets/images/shape-4.png"
              width={120}
              height={115}
              loading="lazy"
              alt="shape"
              className="shape shape-2"
            />

<img
              src="assets/images/shape-6.png"
              width={120}
              height={115}
              loading="lazy"
              alt="shape"
              className="shape shape-1"
            />


        </div>
      </section>

      {/* 
      
        Bakery Menu
      
      */}

      <section
        className="bakery-menu menu text-center"
        aria-label="bakery-menu"
        id="bakery-menu"
      >
        <div className="container">
          <p className="section-subtitle label-2">
            Treat Yourself to Freshly Baked Delights from Our Bakery
          </p>

          <h2 className="headline-1 section-title">Bakery</h2>
          <p className="section-text">
            Looking for a sweet or savory snack on the go? Look no further than
            our bakery! Our talented bakers create a range of freshly baked
            treats every day, from flaky croissants and buttery scones to
            indulgent cupcakes and decadent brownies.
          </p>

          <GridList>
            <MenuItem
              title="Greek Salads"
              description="Tomatoes, green bell pepper, sliced cucumber onion, olives
                          and feta cheese."
              imgUrl="assets/images/menu-1.png"
              price={49.99}
              alt="greek salad"
              seasonal
            />

            <MenuItem
              title="Lasagne"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
              imgUrl="assets/images/menu-2.png"
              price={39.99}
              alt="lasagne"
            />

            <MenuItem
              title="Butternut Pumpkin"
              description="Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand."
              imgUrl="assets/images/menu-3.png"
              price={29.99}
              alt="Butternut Pumpkin"
            />

            <MenuItem
              title="Tokusen Wagyu"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices."
              imgUrl="assets/images/menu-4.png"
              price={23.99}
              alt="Tokusen Wagyu"
              isNew
            />

            <MenuItem
              title="Olivas Rellenas"
              description="Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper"
              imgUrl="assets/images/menu-5.png"
              price={23.99}
              alt="Olivas Rellenas"
            />

            <MenuItem
              title="Opu Fish"
              description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices"
              imgUrl="assets/images/menu-6.png"
              price={23.99}
              alt="Opu Fish"
            />
          </GridList>
        </div>
      </section>
    </main>
  );
}

export default Menu;
