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
    name: "Orzly Accessories Bundle Compatible with Nintendo Switch (NOT OLED Model) Geek...",
    rating: "4.5",
    votes: "14,251",
    price: "$49.99",
    prime: true,
  },
  {
    img: "./imgs/product_2.jpg",
    name: "UFOPETIE 12 in 1 Games Card Case for Nintendo Switch Game Card,Compatible with...",
    rating: "5",
    votes: "2",
    price: "$12.99",
    prime: true,
  },
  {
    img: "./imgs/product_3.jpg",
    name: "UFOPETIE 12 in 1 Games Card Case for Nintendo Switch Game Card,Compatible with...",
    rating: "5",
    votes: "2",
    price: "$12.99",
    prime: true,
  },
  {
    img: "./imgs/product_4.jpg",
    name: "UFOPETIE 12 in 1 Games Card Case for Nintendo Switch Game Card,Compatible with...",
    rating: "5",
    votes: "2",
    price: "$12.99",
    prime: true,
  },
  {
    img: "./imgs/product_5.jpg",
    name: "UFOPETIE 12 in 1 Games Card Case for Nintendo Switch Game Card,Compatible with...",
    rating: "5",
    votes: "2",
    price: "$12.99",
    prime: true,
  },
  {
    img: "./imgs/product_6.jpg",
    name: "Nintendo Switch Gaming Accessories Bundle Kit - Includes Nintendo Switch Hard EVA...",
    rating: "4",
    votes: "29",
    price: "$16.95",
    prime: true,
  },
  {
    img: "./imgs/product_7.jpg",
    name: "UFOPETIE 12 in 1 Games Card Case for Nintendo Switch Game Card,Compatible with...",
    rating: "5",
    votes: "2",
    price: "$12.99",
    prime: true,
  },
  {
    img: "./imgs/product_8.jpg",
    name: "HEIYING Custom Cover for Nintendo Switch Dock,Replacement Housing Shell...",
    rating: "5",
    votes: "7",
    price: "$8.99",
    prime: true,
  },
  {
    img: "./imgs/product_9.jpg",
    name: "UFOPETIE 12 in 1 Games Card Case for Nintendo Switch Game Card,Compatible with...",
    rating: "5",
    votes: "2",
    price: "$12.99",
    prime: true,
  },
  {
    img: "./imgs/product_10.jpg",
    name: "UFOPETIE 12 in 1 Games Card Case for Nintendo Switch Game Card,Compatible with...",
    rating: "5",
    votes: "2",
    price: "$12.99",
    prime: true,
  },
  {
    img: "./imgs/product_11.jpg",
    name: "UFOPETIE 12 in 1 Games Card Case for Nintendo Switch Game Card,Compatible with...",
    rating: "5",
    votes: "2",
    price: "$12.99",
    prime: true,
  },
  {
    img: "./imgs/product_12.jpg",
    name: "CAMWAY Game Accessories Bundle for Nintendo Switch Joy-Con With Switch...",
    rating: "3",
    votes: "4",
    price: "$29.99",
    prime: true,
  },
  {
    img: "./imgs/product_13.jpg",
    name: "UFOPETIE 12 in 1 Games Card Case for Nintendo Switch Game Card,Compatible with...",
    rating: "0.5",
    votes: "2",
    price: "$12.99",
    prime: true,
  },
  {
    img: "./imgs/product_14.jpg",
    name: "Accessories Bundle for Nintendo Switch OLED Model, MENEEA Carrying Case & Screen...",
    rating: "4.5",
    votes: "4",
    price: "$29.99",
    prime: true,
  },
  {
    img: "./imgs/product_14.jpg",
    name: "Accessories Bundle for Nintendo Switch OLED Model, MENEEA Carrying Case & Screen...",
    rating: "4.5",
    votes: "4",
    price: "$29.99",
    prime: true,
  },
];

let uppervalue = 5;
let lowervalue = 0;
const slide = document.getElementsByClassName("carousel")[0];
const fillSlideShow = () => {
  slide.innerHTML = "";
  const prev = document.createElement("button");
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
      productImg.classList.add("smallimg");
      name.textContent = item.name;
      name.href = "#";
      name.classList.add("link");
      rating.classList.add("carouselrating");
      rating.src = ratingImg(item);
      votes.textContent = item.votes;
      votes.classList.add("carouselvotes");
      price.textContent = item.price;
      price.classList.add("carouselprice");
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
    }
  });
  const next = document.createElement("button");

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