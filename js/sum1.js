//your Profit
//sumation end product price
function sum1() {
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
    });

}
