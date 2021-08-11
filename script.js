let button = document.querySelector("#gen")
let storeContainer = document.querySelector("#storeContainer");
let limit = 20;
let currentItem = -1;
let Try = document.querySelector("button")

fetch('https://fakestoreapi.com/products?limit=' + limit)
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);

        button.onclick = function(event) {
            event.preventDefault();

            if (currentItem < 20) {
                currentItem++;
            } else if (currentItem == 20) {
                currentItem = 0;
            }

            console.log(currentItem);

            let newDiv = document.createElement("div");
            let prodImage = document.createElement("img");
            let message = document.createElement("p");
            let price = document.createElement("p");
            let itemName = document.createElement("h2");

            newDiv.style.textAlign = "center";
            newDiv.style.border = "double 6px black";
            newDiv.style.borderRadius = "13px";
            newDiv.style.marginLeft = "400px";
            newDiv.style.marginRight = "400px";
            newDiv.style.marginTop = "20px";
            newDiv.style.padding = "15px";

            prodImage.src = myJson[currentItem].image;
            prodImage.style.width = "200px";

            price.style.fontSize = "22px";
            price.style.fontWeight = "bold";

            message.style.fontSize = "20px";
            message.style.fontWeight = "bold";

            message.innerHTML = myJson[currentItem].description;
            price.innerHTML = myJson[currentItem].price;
            itemName.innerHTML = myJson[currentItem].title;

            newDiv.appendChild(prodImage);
            newDiv.appendChild(itemName);
            newDiv.appendChild(price);
            newDiv.appendChild(message);
            storeContainer.appendChild(newDiv);
            
        };
        
    })

// try.onclick = function(event) {
//     event.preventDefault();
// }

