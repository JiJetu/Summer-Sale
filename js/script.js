let totalPriceElement = document.getElementById("total-price");
let totalPriceString = totalPriceElement.innerText.split(" ")[0];
let totalPrice = parseFloat(totalPriceString);

// document.getElementById("card").addEventListener("click", function (event){
//     const cardPriceElement = document.getElementById("card-btn");
//     const cardPriceString = cardPriceElement.innerText.split(" ")[0];
//     const cardPrice = parseFloat(cardPriceString);
//     console.log(cardPrice);
// })

function handleClick(target){
    // item price added
    const cardPriceElement = target.innerText;
    const cardPriceString = cardPriceElement.split(" ")[0];
    const cardPrice = parseFloat(cardPriceString);
    
    totalPrice += cardPrice;
    totalPriceElement.innerText = totalPrice.toFixed(2);

    // const applyBtn = document.getElementById("apply-btn");
    // if(totalPrice >= 200){
    //     applyBtn.removeAttribute("disabled");
    // }
    // else{
    //     applyBtn.setAttribute("disabled", true);
    // }

    // item name added
    const listContainer = document.getElementById("list-container")
    const count = listContainer.childElementCount;
    const liItem = target.parentNode.parentNode.childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = `${count+1}. ${liItem}`;
    listContainer.appendChild(li)


    const purchaseBtn = document.getElementById("purchase-btn");
    const purchaseBtnDisabled = document.getElementById("purchase-btn-disabled");

    const totalElement = document.getElementById("total");
    const totalCostString = totalElement.innerText;
    let totalCost = parseFloat(totalCostString);
    if(totalPrice > 0){
        purchaseBtn.removeAttribute("disabled");
        purchaseBtn.style.backgroundColor = "#E527B2";
        purchaseBtnDisabled.setAttribute("href", '#my_modal_8');
        totalElement.innerText = parseFloat(totalPrice).toFixed(2);
    }
    else{
        purchaseBtn.setAttribute("disabled", true);
    }
}


document.getElementById("coupon-field").addEventListener("keyup", function (event){
    const text = event.target.value;
    const coupon = document.getElementById("coupon");
    const applyBtn = document.getElementById("apply-btn");
    if(totalPrice >= 200 && coupon.innerText === text){
        applyBtn.removeAttribute("disabled");
        applyBtn.style.backgroundColor = "#E527B2";
    }
    else{
        applyBtn.setAttribute("disabled", true);
    }
})

document.getElementById("apply-btn").addEventListener("click", function(){
    const discountElement = document.getElementById("discount");
    const discountPriceString = discountElement.innerText;
    let discountPrice = parseFloat(discountPriceString);

    discountPrice += parseFloat((totalPrice*20)/100);
    discountElement.innerText = discountPrice.toFixed(2);

    const totalElement = document.getElementById("total");
    const totalCostString = totalElement.innerText;
    let totalCost = parseFloat(totalCostString);

    totalCost = totalPrice - discountPrice;
    totalElement.innerText = totalCost.toFixed(2);

    
    const couponField = document.getElementById("coupon-field");
    couponField.value = "";
    couponField.disabled = true;
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.setAttribute("disabled", true);
    applyBtn.style.backgroundColor = "black";
})