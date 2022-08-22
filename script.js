let c = (el) => document.querySelector(el);
let cs = (el) => document.querySelectorAll(el);

pizzaJson.map((item, index) => {
  let pizzaItem = c(".models .pizza-item").cloneNode(true);
  //  O Clone node serve para clonar o item selecionado.
  //  Sem ele, apenas o primeiro item é reproduzido.

  pizzaItem.setAttribute("data-key", index);

  pizzaItem.querySelector(".pizza-item--img img").src = item.img;
  pizzaItem.querySelector(
    ".pizza-item--price"
  ).innerHTML = `R$ ${item.price.toFixed(2)}`;
  pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
  pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;

  pizzaItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();

    let key = e.target.closest(".pizza-item").getAttribute("data-key");

    c(".pizzaBig img").src = pizzaJson[key].img;
    c(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
    c(".pizzaInfo--desc").innerHTML = pizzaJson[key].description;
    c(".pizzaInfo--actualPrice").innerHTML = pizzaJson[key].price;

    c(".pizzaWindowArea").style.opacity = "0";
    c(".pizzaWindowArea").style.display = "flex";
    setTimeout(() => {
      c(".pizzaWindowArea").style.opacity = "1";
    }, 100);

    cs(".pizzaInfo--size").forEach((size, sizeIndex) => {
      size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex];
    });
  });

  c(".pizza-area").append(pizzaItem);
});
