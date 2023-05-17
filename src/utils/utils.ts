import { ESMap, Map } from "typescript";
import { IMenuItem } from "../components/MenuItem";
import { ISlide } from "../components/Slide";

export const addEventOnElements = function (
  elements: string | any[],
  eventType: any,
  callback: any
): void {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

export const slides: ISlide[] = [
  {
    active: true,
    imageUrl: "./assets/images/hero-slider-1.jpg",
    title1: "For the love of",
    title2: "delicious food",
    subtitle: "Traditional & Hygine",
    text: "Come with family & feel the joy of mouthwatering food",
    linkText: "View Our Menu",
    secondary: false,
  },
  {
    active: false,
    imageUrl: "./assets/images/hero-slider-2.jpg",
    title1: "Flavors inspired by",
    title2: "the seasons",
    subtitle: "Delightful Experience",
    text: "Come with family & feel the joy of mouthwatering food",
    linkText: "View Our Menu",
    secondary: false,
  },

  {
    active: false,
    imageUrl: "./assets/images/hero-slider-3.jpg",
    title1: "Where every flavor",
    title2: "tells a story",
    subtitle: "Amazing and delicious",
    text: "Come with family & feel the joy of mouthwatering food",
    linkText: "View Our Menu",
    secondary: false,
  },
];

export const HomeMenuItems: IMenuItem[] = [
  {
    title: "Greek Salad",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives,and feta cheese",
    imgUrl: "assets/images/menu-1.png",
    price: 49.99,
    alt: "greek salad",
    seasonal: true,
  },
  {
    title: "Lasagne",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    imgUrl: "assets/images/menu-2.png",
    price: 39.99,
    alt: "lasagne",
    seasonal: false,
  },
  {
    title: "Butternut Pumpkin",
    description:
      "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    imgUrl: "assets/images/menu-3.png",
    price: 29.99,
    alt: "Butternut Pumpkin",
    seasonal: false,
  },
  {
    title: "Tokusen Wagyu",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    imgUrl: "assets/images/menu-4.png",
    price: 23.99,
    alt: "Tokusen Wagyu",
    seasonal: false,
    isNew: true,
  },
  {
    title: "Olivas Rellenas",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper",
    imgUrl: "assets/images/menu-5.png",
    price: 23.99,
    alt: "Olivas Rellenas",
    seasonal: false,
  },
  {
    title: "Opu Fish",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    imgUrl: "assets/images/menu-6.png",
    price: 23.99,
    alt: "Opu Fish",
    seasonal: false,
  },
];

const dinnerItems: IMenuItem[] = [
  {
    title: "Greek Salad",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives,and feta cheese",
    imgUrl: "assets/images/menu-1.png",
    price: 49.99,
    alt: "greek salad",
    seasonal: true,
  },
  {
    title: "Lasagne",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    imgUrl: "assets/images/menu-2.png",
    price: 39.99,
    alt: "lasagne",
    seasonal: false,
  },
  {
    title: "Butternut Pumpkin",
    description:
      "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    imgUrl: "assets/images/menu-3.png",
    price: 29.99,
    alt: "Butternut Pumpkin",
    seasonal: false,
  },
  {
    title: "Tokusen Wagyu",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    imgUrl: "assets/images/menu-4.png",
    price: 23.99,
    alt: "Tokusen Wagyu",
    seasonal: false,
    isNew: true,
  },
  {
    title: "Olivas Rellenas",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper",
    imgUrl: "assets/images/menu-5.png",
    price: 23.99,
    alt: "Olivas Rellenas",
    seasonal: false,
  },
  {
    title: "Opu Fish",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices",
    imgUrl: "assets/images/menu-6.png",
    price: 23.99,
    alt: "Opu Fish",
    seasonal: false,
  },
];

const lunchItems: IMenuItem[] = [
  {
    title: "Hot Chicken Cuban Sandwich",
    description:
      "Mayonaise, yellow mustard, ciabatta bread, swiss cheese, dill pickles and rotisserie chicken.",
    imgUrl:
      "https://www.sidechef.com/recipe_comment/9470df42-adc0-441e-b548-c585b18aa91b.jpg",
    price: 24.99,
    alt: "Hot Chicken Cuban Sandwich",
    seasonal: false,
    isNew: false,
  },
  {
    title: "Steak, Mushroom and Potato Kebabs",
    description:
      "Cubed beef, red wine, soy sauce, garlic, baby potatoes and mushrooms.",
    imgUrl:
      "https://www.sidechef.com/recipe/8c77bfa6-2866-4b0c-ada0-59c155a6fad8.jpg?d=1200x560",
    price: 43.99,
    alt: "Steak, Mushroom and Potato Kebabs",
    seasonal: false,
    isNew: false,
  },
  {
    title: "Beef & Onion Soy Sauce Noodles",
    description:
      "Sirloin steak, spaghetti, dark soy sauce, corn starch, onion and soy sauce.",
    imgUrl:
      "https://www.sidechef.com/recipe/7ab69169-3973-4e0a-8f62-4b3c78794cb5.jpeg?d=1200x560",
    price: 52.99,
    alt: "Beef & Onion Soy Sauce Noodles",
    seasonal: false,
    isNew: false,
  },
  {
    title: "Grilled Peanut Butter & Apple Sandwich",
    description:
      "Apples, nut butter, cinnamon, maple syrup, whole wheat bread and coconut oil.",
    imgUrl:
      "https://www.sidechef.com/recipe/ccfc5242-7e27-44bf-b833-8ade08350c3d.jpg?d=1200x560",
    price: 24.99,
    alt: "Grilled Peanut Butter & Apple Sandwich",
    seasonal: false,
    isNew: true,
  },
  {
    title: "Grilled Halloumi Burgers",
    description:
      "Flat bread, halloumi cheese, Tzatziki, lettuce, tomatoes and pickled red onions.",
    imgUrl:
      "https://www.sidechef.com/recipe/f0512e69-9c05-43ec-a938-658d3439ed12.jpg?d=1200x560",
    price: 19.99,
    alt: "Grilled Halloumi Burgers",
    seasonal: false,
    isNew: false,
  },
  {
    title: "Vegan Breakfast Burrito",
    description:
      "Jalapenos, black beans, Vegan egg yolk mix, soy milk, vegan cheese, vegan meat, avocado and salsa.",
    imgUrl:
      "https://rainbowplantlife.com/wp-content/uploads/2021/05/vegan-breakfast-burrito-closeup-updated-1-of-1-1.jpg",
    price: 29.99,
    alt: "Vegan Breakfast Burrito",
    seasonal: false,
    isNew: true,
  },
];

const breakfastItems: IMenuItem[] = [
  {
    title: "The Rock Pancakes",
    description:
      "Eggs, whole milk, coconut, bananas, vanilla extracts and spices.",
    imgUrl:
      "https://www.sidechef.com/recipe/a6a2f64c-3315-4c80-b822-2cc7b5c83eda.jpg?d=1200x560",
    price: 23.99,
    alt: "The Rock Pancakes",
    seasonal: false,
    isNew: true,
  },
  {
    title: "Breakfast Sandwich with a Hash Brown",
    description:
      "Eggs, whole milk, coconut, bananas, vanilla extracts and spices.",
    imgUrl:
      "https://www.sidechef.com/recipe/54154ff0-db4b-4735-a672-a8205be96c5a.jpeg?d=1200x560",
    price: 18.99,
    alt: "Breakfast Sandwich with a Hash Brown",
    seasonal: false,
    isNew: false,
  },
  {
    title: "Spanish Eggs with Tomatoes and Asparagus",
    description:
      "Asparagus, eggs, smoked sweet paprika, tomatoes, parsley and ground black pepper.",
    imgUrl:
      "https://i0.wp.com/spainonafork.com/wp-content/uploads/2018/12/EGGS2-11.png?fit=750%2C750&ssl=1",
    price: 52.99,
    alt: "Spanish Eggs with Tomatoes and Asparagus",
    seasonal: false,
    isNew: false,
  },
  {
    title: "Grilled Peanut Butter & Apple Sandwich",
    description:
      "Apples, nut butter, cinnamon, maple syrup, whole wheat bread and coconut oil.",
    imgUrl:
      "https://www.sidechef.com/recipe/ccfc5242-7e27-44bf-b833-8ade08350c3d.jpg?d=1200x560",
    price: 24.99,
    alt: "Grilled Peanut Butter & Apple Sandwich",
    seasonal: false,
    isNew: true,
  },
  {
    title: "Grilled Halloumi Burgers",
    description:
      "Flat bread, halloumi cheese, Tzatziki, lettuce, tomatoes and pickled red onions.",
    imgUrl:
      "https://www.sidechef.com/recipe/f0512e69-9c05-43ec-a938-658d3439ed12.jpg?d=1200x560",
    price: 19.99,
    alt: "Grilled Halloumi Burgers",
    seasonal: false,
    isNew: false,
  },
  {
    title: "Vegan Breakfast Burrito",
    description:
      "Jalapenos, black beans, Vegan egg yolk mix, soy milk, vegan cheese, vegan meat, avocado and salsa.",
    imgUrl:
      "https://rainbowplantlife.com/wp-content/uploads/2021/05/vegan-breakfast-burrito-closeup-updated-1-of-1-1.jpg",
    price: 29.99,
    alt: "Vegan Breakfast Burrito",
    seasonal: false,
    isNew: true,
  },
];

const drinksItems: IMenuItem[] = [];

const dessertsItems: IMenuItem[] = [];

const bakeryItems: IMenuItem[] = [];

export const menu: Record<string, IMenuItem[]> = {
  breakfast: breakfastItems,
  lunch: lunchItems,
  dinner: dinnerItems,
  bakery: bakeryItems,
  drinks: drinksItems,
  desserts: dessertsItems,
};
