$(document).ready(function() {
    // brand kateqoriyalari - sol menyu
    let brands = ["Acer", "Asus", "Casper", "Dell", "Fujitsu", "HP", "Lenovo", "LG", "Nexus", "Samsung"];
    // brand-lerin mehsullari - massivler
    let acer = [
        { photo: "acer.jpg", model: "Acer 1", description: "Acer 1 desc", price: "578", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 2", description: "Acer 2 desc", price: "451", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 3", description: "Acer 3 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 4", description: "Acer 4 desc", price: "1345", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 5", description: "Acer 5 desc", price: "1644", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 6", description: "Acer 6 desc", price: "1454", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 7", description: "Acer 7 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 8", description: "Acer 8 desc", price: "1254", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 9", description: "Acer 9 desc", price: "1235", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 10", description: "Acer 10 desc", price: "1654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 11", description: "Acer 11 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 12", description: "Acer 12 desc", price: "785", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 13", description: "Acer 13 desc", price: "1520", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 14", description: "Acer 14 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 15", description: "Acer 15 desc", price: "789", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 16", description: "Acer 16 desc", price: "3214", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 17", description: "Acer 17 desc", price: "452", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 18", description: "Acer 18 desc", price: "3210", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 19", description: "Acer 19 desc", price: "1204", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 20", description: "Acer 20 desc", price: "5470", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 21", description: "Acer 21 desc", price: "650", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 22", description: "Acer 22 desc", price: "3540", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 23", description: "Acer 23 desc", price: "2450", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 24", description: "Acer 24 desc", price: "2500", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 25", description: "Acer 25 desc", price: "4523", status: "Xeyr", phone: "055-324-3434" },
        { photo: "acer.jpg", model: "Acer 26", description: "Acer 26 desc", price: "4523", status: "Xeyr", phone: "055-324-3434" }
    ];
    let asus = [
        { photo: "asus.jpg", model: "Asus 1", description: "Asus 1 desc", price: "578", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 2", description: "Asus 2 desc", price: "451", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 3", description: "Asus 3 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 4", description: "Asus 4 desc", price: "1345", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 5", description: "Asus 5 desc", price: "1644", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 6", description: "Asus 6 desc", price: "1454", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 7", description: "Asus 7 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 8", description: "Asus 8 desc", price: "1254", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 9", description: "Asus 9 desc", price: "1235", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 10", description: "Asus 10 desc", price: "1654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 11", description: "Asus 11 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 12", description: "Asus 12 desc", price: "785", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 13", description: "Asus 13 desc", price: "1520", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 14", description: "Asus 14 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 15", description: "Asus 15 desc", price: "789", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 16", description: "Asus 16 desc", price: "3214", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 17", description: "Asus 17 desc", price: "452", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 18", description: "Asus 18 desc", price: "3210", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 19", description: "Asus 19 desc", price: "1204", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 20", description: "Asus 20 desc", price: "5470", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 21", description: "Asus 21 desc", price: "650", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 22", description: "Asus 22 desc", price: "3540", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 23", description: "Asus 23 desc", price: "2450", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 24", description: "Asus 24 desc", price: "2500", status: "Xeyr", phone: "055-324-3434" },
        { photo: "asus.jpg", model: "Asus 25", description: "Asus 25 desc", price: "4523", status: "Xeyr", phone: "055-324-3434" }
    ];
    let dell = [
        { photo: "dell.jpg", model: "Dell 1", description: "Dell 1 desc", price: "578", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 2", description: "Dell 2 desc", price: "451", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 3", description: "Dell 3 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 4", description: "Dell 4 desc", price: "1345", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 5", description: "Dell 5 desc", price: "1644", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 6", description: "Dell 6 desc", price: "1454", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 7", description: "Dell 7 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 8", description: "Dell 8 desc", price: "1254", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 9", description: "Dell 9 desc", price: "1235", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 10", description: "Dell 10 desc", price: "1654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 11", description: "Dell 11 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 12", description: "Dell 12 desc", price: "785", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 13", description: "Dell 13 desc", price: "1520", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 14", description: "Dell 14 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 15", description: "Dell 15 desc", price: "789", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 16", description: "Dell 16 desc", price: "3214", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 17", description: "Dell 17 desc", price: "452", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 18", description: "Dell 18 desc", price: "3210", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 19", description: "Dell 19 desc", price: "1204", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 20", description: "Dell 20 desc", price: "5470", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 21", description: "Dell 21 desc", price: "650", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 22", description: "Dell 22 desc", price: "3540", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 23", description: "Dell 23 desc", price: "2450", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 24", description: "Dell 24 desc", price: "2500", status: "Xeyr", phone: "055-324-3434" },
        { photo: "dell.jpg", model: "Dell 25", description: "Dell 25 desc", price: "4523", status: "Xeyr", phone: "055-324-3434" }
    ];
    let hp = [
        { photo: "hp.jpg", model: "HP 1", description: "HP 1 desc", price: "578", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 2", description: "HP 2 desc", price: "451", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 3", description: "HP 3 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 4", description: "HP 4 desc", price: "1345", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 5", description: "HP 5 desc", price: "1644", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 6", description: "HP 6 desc", price: "1454", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 7", description: "HP 7 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 8", description: "HP 8 desc", price: "1254", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 9", description: "HP 9 desc", price: "1235", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 10", description: "HP 10 desc", price: "1654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 11", description: "HP 11 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 12", description: "HP 12 desc", price: "785", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 13", description: "HP 13 desc", price: "1520", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 14", description: "HP 14 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 15", description: "HP 15 desc", price: "789", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 16", description: "HP 16 desc", price: "3214", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 17", description: "HP 17 desc", price: "452", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 18", description: "HP 18 desc", price: "3210", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 19", description: "HP 19 desc", price: "1204", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 20", description: "HP 20 desc", price: "5470", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 21", description: "HP 21 desc", price: "650", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 22", description: "HP 22 desc", price: "3540", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 23", description: "HP 23 desc", price: "2450", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 24", description: "HP 24 desc", price: "2500", status: "Xeyr", phone: "055-324-3434" },
        { photo: "hp.jpg", model: "HP 25", description: "HP 25 desc", price: "4523", status: "Xeyr", phone: "055-324-3434" }
    ];
    let lenovo = [
        { photo: "lenovo.jpg", model: "Lenovo 1", description: "Lenovo 1 desc", price: "578", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 2", description: "Lenovo 2 desc", price: "451", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 3", description: "Lenovo 3 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 4", description: "Lenovo 4 desc", price: "1345", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 5", description: "Lenovo 5 desc", price: "1644", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 6", description: "Lenovo 6 desc", price: "1454", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 7", description: "Lenovo 7 desc", price: "787", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 8", description: "Lenovo 8 desc", price: "1254", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 9", description: "Lenovo 9 desc", price: "1235", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 10", description: "Lenovo 10 desc", price: "1654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 11", description: "Lenovo 11 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 12", description: "Lenovo 12 desc", price: "785", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 13", description: "Lenovo 13 desc", price: "1520", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 14", description: "Lenovo 14 desc", price: "654", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 15", description: "Lenovo 15 desc", price: "789", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 16", description: "Lenovo 16 desc", price: "3214", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 17", description: "Lenovo 17 desc", price: "452", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 18", description: "Lenovo 18 desc", price: "3210", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 19", description: "Lenovo 19 desc", price: "1204", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 20", description: "Lenovo 20 desc", price: "5470", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 21", description: "Lenovo 21 desc", price: "650", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 22", description: "Lenovo 22 desc", price: "3540", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 23", description: "Lenovo 23 desc", price: "2450", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 24", description: "Lenovo 24 desc", price: "2500", status: "Xeyr", phone: "055-324-3434" },
        { photo: "lenovo.jpg", model: "Lenovo 25", description: "Lenovo 25 desc", price: "4523", status: "Xeyr", phone: "055-324-3434" }
    ];
    // default massiv
    let brandArray = acer;
    // ul yaradilmasi ve append olunmasi
    let category = document.createElement("ul");
    category.classList.add("list-group", "category", "mt-3");
    $(".left-menu").append(category);
    // li-lerin yaradilmasi ve append
    for (let i = 0; i < brands.length; i++) {
        let catItem = document.createElement("li");
        catItem.classList.add("list-group-item", "cat-item");
        if (i == 0) {
            catItem.classList.add("active");
        }
        catItem.innerText = brands[i];
        $(".category").append(catItem);
    }
    // default olaraq sehifede acer modelin gosterilmesi
    $(".area").empty();
    // sag bolme - (acer) mehsullar bolmesinin yaradilmasi
    for (let i = 0; i < 15; i++) {
        itemCreator(brandArray[i].photo, brandArray[i].model, brandArray[i].description, brandArray[i].price, brandArray[i].status, brandArray[i].phone);
    }
    // sol menyudan brand-e click edildikde hemin brand mehsullarinin sag terefde gosterilmesi
    $(".cat-item").click(function() {
        $(".area").empty();
        $(".cat-item").removeClass("active");
        $(this).addClass("active");
        // sag bolme - mehsullar bolmesinin yaradilmasi

        if ($(this).text().toLowerCase() == "asus") {
            brandArray = asus;
        } else if ($(this).text().toLowerCase() == "acer") {
            brandArray = acer;
        } else if ($(this).text().toLowerCase() == "dell") {
            brandArray = dell;
        } else if ($(this).text().toLowerCase() == "hp") {
            brandArray = hp;
        } else if ($(this).text().toLowerCase() == "lenovo") {
            brandArray = lenovo;
        }
        // mehsullar yaradan funksiya
        for (let i = 0; i < 15; i++) {
            itemCreator(brandArray[i].photo, brandArray[i].model, brandArray[i].description, brandArray[i].price, brandArray[i].status, brandArray[i].phone);
        }
    });
    // sehifenin scroll-unda kontent yuklenmesi
    let lastItem = 0;
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            $(".spinnerio").removeClass("d-none");
            const myTimeout = setTimeout(function() {
                let childrenCount = $(".area").children().length; //15
                let arrayLength = brandArray.length; //25
                lastItem = childrenCount + 5; //20
                if (lastItem > arrayLength) {
                    lastItem = lastItem - (lastItem - arrayLength);
                    // clearTimeout(myTimeout);
                    $(".spinnerio").addClass("d-none");
                }
                for (let i = childrenCount; i < lastItem; i++) {
                    itemCreator(brandArray[i].photo, brandArray[i].model, brandArray[i].description, brandArray[i].price, brandArray[i].status, brandArray[i].phone);
                }
            }, 3000);

        }
    });
    // function
    function itemCreator(photo, model, desc, price, status, phone) {
        // w-20
        let w20 = document.createElement("div");
        w20.classList.add("w-20", "p-2");
        // box
        let box = document.createElement("div");
        box.classList.add("box", "bg-light", "p-2", "rounded");
        // box content
        let img = document.createElement("img");
        img.setAttribute("src", `../img/shopping/${photo}`);
        let pName = document.createElement("p");
        pName.innerHTML = `<span>Ad:</span> ${model}`;
        let pDesc = document.createElement("p");
        pDesc.innerHTML = `<span>Təsvir:</span> ${desc}`;
        let pPrice = document.createElement("p");
        pPrice.innerHTML = `<span>Qiymət:</span> ${price}`;
        let pStatus = document.createElement("p");
        pStatus.innerHTML = `<span>Yeni:</span> ${status}`;
        let pPhone = document.createElement("p");
        pPhone.innerHTML = `<span>Telefon:</span> ${phone}`;
        // append
        box.appendChild(img);
        box.appendChild(pName);
        box.appendChild(pDesc);
        box.appendChild(pPrice);
        box.appendChild(pStatus);
        w20.appendChild(box);
        $(".area").append(w20);
        // class adding for bootstrap badge style
        $(".area .w-20 span").addClass("bg-info");
        $(".area .w-20 span").addClass("badge");
    }
    // function - 1
    function brandArraySelector(catItem) {
        let brandArray = [];
        if (catItem.toLowerCase() == "asus") {
            brandArray = asus;
        } else if (catItem.toLowerCase() == "acer") {
            brandArray = acer;
        } else if (catItem.toLowerCase() == "dell") {
            brandArray = dell;
        } else if (catItem.toLowerCase() == "hp") {
            brandArray = hp;
        } else if (catItem.toLowerCase() == "lenovo") {
            brandArray = lenovo;
        }
    }

});