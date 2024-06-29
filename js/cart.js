function shownPriceInCart() {
    let unitPrices = document.getElementsByClassName('UnitPrice');
    let shownPrices = document.getElementsByClassName('shownPrice');

    for (let i = 0; i < shownPrices.length; i++) {
        let shownPriceAttr = shownPrices[i].getAttribute('shp');

        for (let j = 0; j < unitPrices.length; j++) {
            let unitPriceAttr = unitPrices[j].getAttribute('up');

            if (shownPriceAttr === unitPriceAttr) {
                let unitPriceValue = parseInt(unitPrices[j].value, 10);
                shownPrices[i].innerText = unitPriceValue.toLocaleString();
            }
        }
    }
}
shownPriceInCart();

function shownDiscountCart() {
    let inputDis = document.getElementsByClassName('disNum');
    let shownDis = document.getElementsByClassName('discountNumber');

    for (let i = 0; i < shownDis.length; i++) {
        let shownDisAttr = shownDis[i].getAttribute('disc_sh');

        for (let j = 0; j < inputDis.length; j++) {
            let inputDisAttr = inputDis[j].getAttribute('disc');

            if (shownDisAttr == inputDisAttr) {
                let disValue = parseInt(inputDis[j].value, 10);
                shownDis[i].innerText = disValue.toLocaleString();
            }
        }
    }
}
shownDiscountCart();

function showEndProductPrice() {
    let inputendPrice = document.getElementsByClassName('end_price');
    let shownEndPrice = document.getElementsByClassName('end_price_shown');

    for (let i = 0; i < shownEndPrice.length; i++) {
        let shownEndPriceAttr = shownEndPrice[i].getAttribute('end_psh');

        for (let j = 0; j < inputendPrice.length; j++) {
            let inputendPriceAttr = inputendPrice[j].getAttribute('end_pr');

            if (shownEndPriceAttr === inputendPriceAttr) {
                let inputendPriceValue = parseInt(inputendPrice[j].value, 10);
                shownEndPrice[i].innerText = inputendPriceValue.toLocaleString();
            }
        }
    }
}

function factor_show() {
    let Transportation = parseInt($('.Transportation').val());
    $('.Transportation_shown').text(Transportation.toLocaleString());

    let tax = parseInt($('.tax').val());
    $('.tax_text').text(tax.toLocaleString());

    let TOTAL = parseInt($('.TOTAL').val());
    $('.TOTAL_shown').text(TOTAL.toLocaleString());

    let profit = parseInt($('.profit').val());
    $('.profit_shown').text(profit.toLocaleString());

   let yopp = parseInt($('.yopp_input').val());
    $('.yopp_txt').text(yopp.toLocaleString());

    let total = parseInt($('.total_input').val());
    $('.total_txt').text(total.toLocaleString());
/* 
    let discount = parseInt($('.disNum').val());
    $('.discountNumber').text(discount.toLocaleString()); */

}
//
function sumation() {

    let totalDiscount = 0;
    let tot = 0;
    let Transportation = parseInt($('.Transportation').val());
    let tax = parseInt($('.tax').val()) / 100;
    $(".product_in_cart").each(function () {
        var product_unit_price = $(this).find(".UnitPrice").val();
        var product_Num = $(this).find(".chooseNum_input").val();
        var product_discount = $(this).find(".disNum").val();
        var product_endprice_shown = $(this).find(".end_price_shown");
        var product_endprice = $(this).find(".end_price");


        product_unit_price = parseInt(product_unit_price);
        product_Num = parseInt(product_Num, 10);
        product_discount = parseInt(product_discount);

        let totalPrice = product_Num * product_unit_price;
        let discountPrice = totalPrice * product_discount / 100;
        let finalPrice = totalPrice - discountPrice;

        $(product_endprice).val(finalPrice);
        totalDiscount += discountPrice;

        tot += finalPrice;

    });
    $(".profit").val(totalDiscount);
    tax_price = tax * tot;
    console.log(tax_price)
    end_price1 = tax_price + tot;
    end_price2 = end_price1 + Transportation;
    total_1 = $(".TOTAL").val(end_price2);
}

$(document).on("click", ".addBUTTON", function () {
    var firstNum = $(this).siblings('.chooseNum_input');
    var getNum = parseInt(firstNum.val());
    getNum += 1;
    firstNum.val(getNum);
    sumation();
    showEndProductPrice();
    factor_show();

});
$(document).on("click", ".decBUTTON", function () {
    var firstNum = $(this).siblings('.chooseNum_input');
    var getNum = parseInt(firstNum.val());
    if (getNum > 1) {
        getNum -= 1;
        firstNum.val(getNum);
    } else {
        alert('delete')
    }
    sumation();
    showEndProductPrice();
    factor_show();
});

sumation();
showEndProductPrice();
factor_show();

//modal
$(document).on("click", ".removeFromCart", function () {
    $('.modal').css("display", "block");
})
$(document).on("click", ".modal_no", function () {
    $('.modal').hide();
})
$(document).on("click", ".closeModal", function () {
    $('.modal').hide();
})
$(document).on("click", ".modal_yes", function () {
    $(".modal").hide();
})

// alert discount code considered
$(document).on("click", ".confirm_discountCode", function () {
    codeDiscount=$(".discountCode_code").val();
    if(codeDiscount == ''){
        $(".alert_discountCode").text('کد تخفیفی وارد نشده است'); 
        $(".alert_discountCode").slideDown(200);
    }else{
        $(".alert_discountCode").slideDown(200);
        $(".discountCode_code , .discountCode_txt , .confirm_discountCode").hide();
        $(".alert_discountCode").text('کد تخفیف اعمال شد'); 
    }
})
$(document).on("click", ".alert_discountCode_close", function () {
    $(".alert_discountCode").slideUp(200);;
})
