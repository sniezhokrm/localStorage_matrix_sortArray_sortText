const sortArr = () => {

  const arr = [{
    ratingRevievs: "264 отзыва",
    price: {
      oldUan: "4 333 грн",
      newUan: "3 799 грн"
    },
    name: "Motorola MOTO G4 (XT1622) Black"
  }, {
    ratingRevievs: "1355 отзывов",
    price: "4 999 грн",
    name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!"
  }, {
    ratingRevievs: "426 отзывов",
    price: "5 199 грн",
    name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!"
  }, {
    ratingRevievs: "403 отзыва",
    price: "4 349 грн",
    name: "Xiaomi Redmi Note 4X 3/32GB Black"
  }, {
    ratingRevievs: "488 отзывов",
    price: "6 199 грн",
    name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!"
  }, {
    ratingRevievs: "198 отзывов",
    price: {
      oldUan: "3 495 грн",
      newUan: "2 995 грн"
    },
    name: "Lenovo K5 (A6020a40) Silver"
  }];

  let temp = JSON.parse(JSON.stringify(arr));

  function clearWords() {
    temp.forEach((item) => {
      item.ratingRevievs = +item.ratingRevievs.replace(/\D/g, "");
      if (typeof(item.price) == 'string') {
        item.price = item.price.replace(/\D/g, "");
      } else {
        item.price.oldUan = item.price.oldUan.replace(/\D/g, "");
        item.price.newUan = item.price.newUan.replace(/\D/g, "");
      }
    });
  }
  clearWords();

  function sortByFeedbacks() {
    temp.sort((a, b) => a.ratingRevievs > b.ratingRevievs ? 1 : -1);
    display(temp);
  }

  function sortByFPricess() {
    temp.sort((a, b) => (a.price.newUan || a.price) > (b.price.newUan || b.price) ? 1 : -1);
    display(temp);
  }

  sortByFPricess(arr);

  function display(data) {
    document.querySelector('.sort').innerHTML = '';
    data.forEach((item) => {
      document.querySelector('.sort').innerHTML += `
    <div class='sort-blocks'>
    <h3>${item.name}</h3>
    <ul>
      <li>${item.price.newUan || item.price} грн.</li>
      <li>${item.ratingRevievs} відгуки</li>
    </ul>
    </div>
    `;
    });
  }
  
  document.querySelector('.price').addEventListener('click', () => {
    sortByFPricess(arr);
  });
  document.querySelector('.rating').addEventListener('click', () => {
    sortByFeedbacks(arr);
  });

};

export default sortArr;
