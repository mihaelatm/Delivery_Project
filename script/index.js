modalFunc = () => {
  const modal = document.querySelector(".cart-modal__overlay");
  const cartBtn = document.querySelector("#cart-button");

  const openModal = () => {
    modal.classList.add("open");
  };

  const closeModal = () => {
    modal.classList.remove("open");
  };

  cartBtn.addEventListener("click", () => {
    openModal();
  });

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("cart-modal__overlay") ||
      event.target.closest(".cart-modal__header--close")
    );
    {
      closeModal();
    }
  });
};

const restsFunc = () => {
  const container = document.querySelector("#rests-container");

  const restArray = [
    {
      id: 0,
      title: "Пицца плюс",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest-1.jpg",
    },
    {
      id: 1,
      title: "Тануки ",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest-2.jpg",
    },
    {
      id: 2,
      title: "FoodBand",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest-3.jpg",
    },
    {
      id: 3,
      title: "Жадина-пицца",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest-4.jpg",
    },
    {
      id: 4,
      title: "Точка еды",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest-5.jpg",
    },
    {
      id: 5,
      title: "PizzaBurger",
      time: 50,
      rating: 4.5,
      price: 900,
      type: "Пицца",
      image: "rest-6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      "<p style='width: 100%; text-align: center'>Загрузка</p>";
  };

  const randerRests = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
         <a href="goods.html?id=${card.id}" class="products-card">
                <div class="products-card__image">
                  <img src="./images/rests/${card.image}" alt="${card.title}" />
                </div>
                <div class="products-card__description">
                  <div class="products-card__description-row">
                    <h4 class="products-card__description--title">
                    ${card.title}
                    </h4>
                    <div class="products-card__description--badge">${card.time}</div>
                  </div>
                  <div class="products-card__description-row">
                    <div class="products-card__description-info">
                      <div class="products-card__description--raiting">
                        <img src="./images/icons/star.svg" alt="star" />
                           ${card.rating}
                      </div>
                      <div class="products-card__description-info--price">
                          ${card.price}
                      </div>
                      <div class="products-card__description-info--group">
                           ${card.type}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
        `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      randerRests(restArray);
    }, 1000);
  }
};

const goodsFunc = () => {
  const container = document.querySelector(".products-wrapper");

  const goodsArray = [
    {
      id: 0,
      name: "Ролл угорь стандарт",
      price: 250,
      description: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      image: "good-1.jpg",
    },
    {
      id: 1,
      name: "Калифорния лосось стандарт",
      price: 395,
      description:
        "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      image: "good-2.jpg",
    },
    {
      id: 2,
      name: "Окинава стандарт",
      price: 250,
      description:
        "Рис, креветка отварная, сыр сливочный, лосось, огурец свежий.",
      image: "good-3.jpg",
    },
    {
      id: 3,
      name: "Цезарь маки XL",
      price: 250,
      description:
        "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь.",
      image: "good-4.jpg",
    },
    {
      id: 4,
      name: "Ясай маки стандарт 185 г",
      price: 250,
      description:
        "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг.",
      image: "good-5.jpg",
    },
    {
      id: 5,
      name: "Ролл с креветкой стандарт",
      price: 250,
      description:
        "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы.",
      image: "good-6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      "<p style='width: 100%; text-align: center'>Загрузка</p>";
  };

  const renderGoods = (array) => {
    container.innerHTML = "";

    array.forEach((good) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
            <div class="products-card">
              <div class="products-card__image">
                <img src="./images/goods/${good.image}" alt="${good.name}" />
              </div>
              <div class="products-card__description">
                <div class="products-card__description-row">
                  <h5 class="products-card__description--name">${good.name}</h5>
                </div>
                <div class="products-card__description-row">
                  <p class="products-card__description--text">${good.description}</p>
                </div>
                <div class="products-card__description-row">
                  <div class="products-card__description-controls">
                    <button class="btn btn-primary">
                      В корзину
                      <img src="./images/icons/shopping-cart-white.svg" alt="cart" />
                    </button>
                    <span class="products-card__description-controls--price">
                      ${good.price} ₽
                    </span>
                  </div>
                </div>
              </div>
            </div>
          `
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      renderGoods(goodsArray);
    }, 1000);
  }
};

modalFunc();
restsFunc();
goodsFunc();
