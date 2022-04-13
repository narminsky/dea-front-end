$(document).ready(function() {
    let user = localStorage.getItem("span");
    let arrayUserItems = [{
        user: "user01",
        item1: {
            brand: "HP",
            model: "G62",
            price: 548,
            desc: "HP G62 Laptop",
            state: "Beli",
            image: "hp.jpg",
            ram: 8,
            cpu: "Intel Core i7",
            memory: 500
        }
    }];
    for (let i = 0; i < arrayUserItems.length; i++) {
        if (arrayUserItems[i].user == user) {
            let count = $("tbody").children().length;
            let ID = document.createElement("td");
            ID.innerHTML = count + 1;
            let namio = document.createElement("td");
            namio.innerHTML = arrayUserItems[i].item1.brand;
            // image
            let imgtd = document.createElement("td");
            let img = document.createElement("img");
            img.src = `../img/shopping/${arrayUserItems[i].item1.image}`;
            img.setAttribute("width", "35px");
            imgtd.appendChild(img);
            let price = document.createElement("td");
            price.innerHTML = arrayUserItems[i].item1.price;
            // operation buttons
            let buttons = document.createElement("td");
            let button1 = document.createElement("button");
            button1.classList.add("btn", "btn-danger", "me-1");
            button1.innerHTML = "Sil";
            let button2 = document.createElement("button");
            button2.classList.add("btn", "btn-primary");
            button2.innerHTML = "Redaktə";
            buttons.appendChild(button1);
            buttons.appendChild(button2);
            // appendChild
            let tr = document.createElement("tr");
            tr.appendChild(ID);
            tr.appendChild(namio);
            tr.appendChild(imgtd);
            tr.appendChild(price);
            tr.appendChild(buttons);
            $("tbody").append(tr);
        }
    }
});