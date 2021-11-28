/* Resize select width according to selected text */
$(document).ready(function () {
  $("#width_tmp_option").html($("#categories option:selected").text());
  $("#categories").width($("#width_tmp_select").width());

  $("#categories").change(function () {
    $("#width_tmp_option").html($("#categories option:selected").text());
    $(this).width($("#width_tmp_select").width());
  });
});

  const carousel = [
    {
      img: "./imgs/product_1.jpg",
      name: "Orzly Accessories Bundle Compatible with Nintendo Switch (NOT OLED Model) Geek Pack: Case & Screen Protector, Joycon Grips & Racing Wheels, Controller Charge Dock, Comfort Grip Case & More - JetBlack",
      rating: "4.5",
      votes: "14,251",
      price: "$49.99",
      prime: true,
    },
    {
      img: "./imgs/product_2.jpg",
      name: "UFOPETIE 12 in 1 Game Card Case for Nintendo Switch Mario Switch Game Case for Nintendo Switch Game Storage,Compatible with Nintendo Switch Game Card -Cloth",
      rating: "5",
      votes: "2",
      price: "$12.99",
      prime: true,
    },
    {
      img: "./imgs/product_3.jpg",
      name: "TOSTAR Grip for Nintendo Switch Fitness Boxing, Handle Grip for Nintendo Switch Joy Con Controller Boxing Game, 2 Packs (Blue and Red)",
      rating: "4.5",
      votes: "41",
      price: "$7.99",
      prime: true,
    },
    {
      img: "./imgs/product_4.jpg",
      name: "Switch Games Accessories - Black Carry Case for Nintendo Switch Joy Con Covers Transparent Switch Hard Cover9H Tempered Glass Screen Protector",
      rating: "4.5",
      votes: "652",
      price: "$20.99",
      prime: true,
    },
    {
      img: "./imgs/product_5.jpg",
      name: "Skywin Game Storage Tower for Nintendo Switch - Nintendo Switch Game Holder Game Disk Rack and Controller Organizer Compatible with Nintendo Switch and Accessories",
      rating: "4.5",
      votes: "2,464",
      price: "$25.99",
      prime: true,
    },
    {
      img: "./imgs/product_6.jpg",
      name: "Nintendo Switch Gaming Accessories Bundle Kit - Includes Nintendo Switch Hard EVA Carrying Case, Silicon Covers for Console & Joy-Con, and Tempered Glass Nintendo Switch Screen Protector (Black Case)",
      rating: "4",
      votes: "29",
      price: "$16.95",
      prime: true,
    },
    {
      img: "./imgs/product_7.jpg",
      name: "Whiteoak Switch Pro Controller Charger for Nintendo Switch Joy-Con Charging Dock Station Stand with LED Charging Indicator, [Upgrade Version] with Free Type C Cable",
      rating: "4.5",
      votes: "402",
      price: "$12.99",
      prime: true,
    },
    {
      img: "./imgs/product_8.jpg",
      name: "HEIYING Custom Cover for Nintendo Switch Dock,Replacement Housing Shell, Compatible with Official Switch Charging Dock - Switch Dock Not Included. (Light Blue)",
      rating: "5",
      votes: "7",
      price: "$8.99",
      prime: true,
    },
    {
      img: "./imgs/product_9.jpg",
      name: "EOVOLA Accessories Kit for Nintendo Switch / Switch OLED Model Games Bundle Wheel Grip Caps Carrying Case Screen Protector Controller",
      rating: "4.5",
      votes: "10,963",
      price: "$47.99",
      prime: true,
    },
    {
      img: "./imgs/product_10.jpg",
      name: "Orzly Steering Wheels for Nintendo Switch & OLED Console JoyCons, Racing Wheels for Mario Kart 8 Deluxe [Mariokart Switch Steering Wheel Joycon Controller Attachment Accessories]-Twin Pack [2X Black]",
      rating: "4.5",
      votes: "1,697",
      price: "$16.99",
      prime: true,
    },
    {
      img: "./imgs/product_11.jpg",
      name: "Orzly Nintendo Switch & OLED Console Steering Wheel, 4 Pack, for Mario Kart 8 Deluxe Nintendo Switch, Mariokart Switch Steering Wheel (Joycon Controller Attachments) (2X Black, 1x Wheel, 1x Red)",
      rating: "4.5",
      votes: "1,757",
      price: "$28.21",
      prime: true,
    },
    {
      img: "./imgs/product_12.jpg",
      name: "CAMWAY Game Accessories Bundle for Nintendo Switch Joy-Con With Switch Grip,Gaming Tennis Racket, Gaming Steering Wheel, Accessories for Mario Tennis Aces Game, Switch Controller Grip Handle Kit",
      rating: "3",
      votes: "4",
      price: "$29.99",
      prime: true,
    },
    {
      img: "./imgs/product_13.jpg",
      name: "Case Compatible with Nintendo Switch, Fit The Dock Station, Protective Accessories Cover Compatible with Joy Con Controller and Console Dockable with a Tempered Glass Screen Protector",
      rating: "4.5",
      votes: "5,464",
      price: "$12.99",
      prime: true,
    },
    {
      img: "./imgs/product_14.jpg",
      name: "Accessories Bundle for Nintendo Switch OLED Model, MENEEA Carrying Case & Screen Protector, Clear Cover Protector, Grips & Charger Dock for Joycons, Steering Wheels, Console Stand & Game Card Case",
      rating: "4.5",
      votes: "4",
      price: "$29.99",
      prime: true,
    },
    {
      img: "./imgs/product_15.jpg",
      name: "Orzly Carrying case for Nintendo Switch OLED and Switch Console - Red Protective Hard Portable Travel case Shell Pouch for Nintendo Switch Console & Accessories",
      rating: "5",
      votes: "56,348",
      price: "$19.91",
      prime: true,
    },
  ];
  
  const slide = document.getElementsByClassName("carousel")[0];

let uppervalue = 5;
let lowervalue = 0;
const fillSlideShow = () => {
  slide.innerHTML = "";
  const prev = document.createElement("span");
  prev.classList.add("carousel-btn");
  prev.addEventListener("click", () => {
    uppervalue -= 5;
    lowervalue -= 5;
    if (lowervalue < 0) {
      uppervalue = carousel.length;
      lowervalue = uppervalue - 5;
    }
    fillSlideShow();
  });
  slide.appendChild(prev);
  
  makeContainer(carousel);

  const next = document.createElement("span");
  next.classList.add("carousel-btn");

  next.textContent = ">";
  prev.textContent = "<";
  next.addEventListener("click", () => {
    uppervalue += 5;
    lowervalue += 5;
    if (uppervalue > carousel.length) {
      uppervalue = 5;
      lowervalue = uppervalue - 5;
    }
    fillSlideShow();
  });
  slide.appendChild(next);
};
fillSlideShow();

function ratingImg(obj) {
  switch (obj.rating) {
    case "0":
      return "../imgs/0stars.png";
    case "0.5":
      return "../imgs/0.5stars.png";
    case "1":
      return "../imgs/1stars.png";
    case "1.5":
      return "../imgs/1.5stars.png";
    case "2":
      return "../imgs/2stars.png";
    case "2.5":
      return "../imgs/2.5stars.png";
    case "3":
      return "../imgs/3stars.png";
    case "3.5":
      return "../imgs/3.5stars.png";
    case "4":
      return "../imgs/4stars.png";
    case "4.5":
      return "../imgs/4.5stars.png";
    default:
      return "../imgs/5stars.png";
  }
}

function makeContainer(carousel) {
  carousel.forEach((item, index) => {
    const productImg = document.createElement("img");
    const name = document.createElement("a");
    const rating = document.createElement("img");
    const votes = document.createElement("span");
    const price = document.createElement("span");
    const prime = document.createElement("img");
    const container = document.createElement("div");
    const ratingAndVotes = document.createElement("div");
    const priceAndPrime = document.createElement("div");
    if (index >= lowervalue && index < uppervalue) {
      productImg.src = item.img;
      productImg.classList.add("product-img");
      name.textContent = item.name;
      name.href = "#";
      name.classList.add("link");
      name.classList.add("item-name");
      rating.src = ratingImg(item);
      votes.textContent = item.votes;
      votes.classList.add("regular-text");
      votes.classList.add("item-votes");
      price.textContent = item.price;
      price.classList.add("regular-text");
      price.classList.add("item-price");
      prime.src = "../imgs/prime.png";
      prime.classList.add("prime");
      container.classList.add("container");
      ratingAndVotes.classList.add("ratingAndVotes");
      priceAndPrime.classList.add("price-prime");
      container.appendChild(productImg);
      container.appendChild(name);
      ratingAndVotes.appendChild(rating);
      ratingAndVotes.appendChild(votes);
      container.appendChild(ratingAndVotes);
      priceAndPrime.appendChild(price);
      if (item.prime == true) {
        priceAndPrime.appendChild(prime);
      }
      container.appendChild(priceAndPrime);
      slide.appendChild(container);
      container.addEventListener("click", function(){window.location = "#";});
    }
  });
}