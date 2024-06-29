
//product category
$(document).on('click', '.catProduct', function () {
    if ($(".productsCategory").is(":visible")) {
        $(".productsCategory").slideUp(200);
        $(".productsCategorySUB").slideUp(200);
        $('.cat_ic').removeClass('fa-angle-up');
        $('.cat_ic').addClass('fa-angle-down');
    } else {
        $(".productsCategory").slideDown(200);
        $('.cat_ic').removeClass('fa-angle-down');
        $('.cat_ic').addClass('fa-angle-up');
    }
});
$(document).on('click', '.prCt1', function () {
    $('.productsCategorySUB').css("display", "none");
    attributlink = $(this).attr('atr_l');
    subContents = document.getElementsByClassName('productsCategorySUB');
    for (i = 0; i < subContents.length; i++) {
        subContent_attr = subContents[i].getAttribute('atr_s');
        if (subContent_attr == attributlink) {
            $(subContents[i]).slideDown();
        }

    }
});

function shownPriceInSlide() {
    const priceElements = document.querySelectorAll('.price');
    priceElements.forEach(priceElement => {
        let price = priceElement.textContent;
        price = parseInt(price).toLocaleString('fa-IR');
        priceElement.textContent = price;
    });

    const realPrice = document.querySelectorAll('.real_price');
    realPrice.forEach(realPrice => {
        let Price2 = realPrice.textContent;
        Price2 = parseInt(Price2).toLocaleString('fa-IR');
        realPrice.textContent = Price2;
    });


}
shownPriceInSlide();


//add to cart on slider
$(document).on('click', '.addDNum', function () {
    var cartNum = parseInt($(".cartNum").text());
    var inputNUM = parseInt($(this).parent('.DTN').siblings('.chooseNum_in_dtn').find('.ch_i_d_input').val());
    inputNUM = 0;
    inputNUM += 1;
    $(this).parent('.DTN').siblings('.chooseNum_in_dtn').find('.ch_i_d_input').val(inputNUM);
    cartNum += 1;
    $(".cartNum").text(cartNum);
    var cartNum2 = parseInt($(".cartNum2").text());
    cartNum2 += 1;
    $(".cartNum2").text(cartNum2);
    $(this).parent('.DTN').hide();
    $(this).parent('.DTN').siblings('.chooseNum_in_dtn').slideDown(200);
    $(this).parent('.DTN').siblings('.go_to_cart').slideDown(100);
});
//add to cart plus button
$(document).on('click', '.cart_plus', function () {
    var cartNum = parseInt($(".cartNum").text());
    var inputNUM = parseInt($(this).siblings(".ch_i_d_input").val());
    inputNUM += 1;
    $(this).siblings(".ch_i_d_input").val(inputNUM);
    cartNum += 1;
    $(".cartNum").text(cartNum);
    var cartNum2 = parseInt($(".cartNum2").text());
    cartNum2 += 1;
    $(".cartNum2").text(cartNum2);

});
//add to cart minus button
$(document).on('click', '.cart_minus', function () {
    var cartNum = parseInt($(".cartNum").text());
    var inputNUM = parseInt($(this).siblings(".ch_i_d_input").val());
    if (inputNUM > 1) {
        inputNUM -= 1;
        $(this).siblings(".ch_i_d_input").val(inputNUM);
        cartNum -= 1;
        $(".cartNum").text(cartNum);
        var cartNum2 = parseInt($(".cartNum2").text());
        cartNum2 -= 1;
        $(".cartNum2").text(cartNum2);
    } else if (inputNUM == 1) {
        cartNum -= 1;
        $(".cartNum").text(cartNum);
        var cartNum2 = parseInt($(".cartNum2").text());
        cartNum2 -= 1;
        $(".cartNum2").text(cartNum2);
        $(this).parent('.p_and_m').parent('.chooseNum_in_dtn').slideUp(200);
        $(this).parent('.p_and_m').parent('.chooseNum_in_dtn').siblings('.go_to_cart').hide();
        $(this).parent('.p_and_m').parent('.chooseNum_in_dtn').siblings('.DTN').slideDown();
    } else {
        $(this).parent('.p_and_m').parent('.chooseNum_in_dtn').slideUp(200);
        $(this).parent('.p_and_m').parent('.chooseNum_in_dtn').siblings('.go_to_cart').hide();
        $(this).parent('.p_and_m').parent('.chooseNum_in_dtn').siblings('.DTN').slideDown();
    }

});



//berger menu
$(document).on('click', '.berger', function () {
    if ($("nav").is(":visible")) {
        $("nav").slideUp(300);
    } else {
        $("nav").slideDown(600);
    }
});
//common questions
$(document).on('click', '.questions_1', function () {
    $('.questions_1').removeClass('acttive_questions_1');
    $(this).addClass('acttive_questions_1');
    $('.answers_1').removeClass('acttive_answers_1');
    var question_1 = $(this).attr('quest');
    var answers_element = document.getElementsByClassName('answers_1');
    for (i = 0; i < answers_element.length; i++) {
        var answers1_attr = answers_element[i].getAttribute('ans');
        console.log(answers1_attr)
        if (answers1_attr == question_1) {
            $(answers_element[i]).addClass('acttive_answers_1');
        }
    }
});
//
$(document).on('click', '.blog_cats_1', function () {
    $('.blog_cats_1').removeClass('blog_cats_1_active');
    $(this).addClass('blog_cats_1_active');
    $('.blog_cat_slides').removeClass('acttive_blog_cat_slides');
    var categoryLink = $(this).attr('blgT');
    var blog_element = document.getElementsByClassName('blog_cat_slides');
    for (i = 0; i < blog_element.length; i++) {
        var blog_attr = blog_element[i].getAttribute('blgs');
        if (blog_attr == categoryLink) {
            $(blog_element[i]).addClass('acttive_blog_cat_slides');
        }
    }
});
//



// فرمت اعداد قیمت
function priceFormat() {
    var realPrice = document.getElementsByClassName('price');
    var pricecart = document.getElementsByClassName('cart_price1');
    for (var i = 0; i < priceElements.length; i++) {
        var numberElement = priceElements[i];
        var number = parseInt(numberElement.innerText);
        var formattedNumber = new Intl.NumberFormat('fa-IR', { useGrouping: true }).format(number);
        numberElement.innerText = formattedNumber;
    }
    for (var i = 0; i < pricecart.length; i++) {
        var singlePriceCart = pricecart[i];
        var spc = parseInt(singlePriceCart.innerText);
        var formattedCartPrice = new Intl.NumberFormat('fa-IR', { useGrouping: true }).format(spc);
        singlePriceCart.innerText = formattedCartPrice;
    }

}
/* captcha */
let r = (Math.random() + 1).toString(36).substring(9);
$('#mainCaptcha').text(r);

$(document).on('click', '#refresh', function (e) {
    let r = (Math.random() + 1).toString(36).substring(9);
    $('#mainCaptcha').text(r);
});



//complete shoping validation
$(document).on('click', '.cfcs_B', function () {

    let name = $('.important_feild_name').val();
    let lastName = $('.important_feild_lastname').val();
    let state = $('.imp_fe_state').val();
    let city = $('.imp_fe_city').val();
    let address = $('.important_feild_address').val();
    let postalCode = $('.important_feild_postalCode').val();
    let phoneNumber = $('.important_feild_phoneNumber').val();
    let captcha = $('.capcha_code').text();
    let userCaptcha = $('#txtInput').val();


    var error = $('.feild_empty_error');

    if (name == "") {
        $(error).slideDown();
        $(error).text('لطفا نام خود را وارد کنید');
    } else if (lastName == '') {
        $(error).slideDown();
        $(error).text('لطفا نام خانوادگی خود را وارد کنید');
    } else if (state == '0') {
        $(error).slideDown();
        $(error).text('لطفا استان خود را وارد کنید');
    } else if (city == '0') {
        $(error).slideDown();
        $(error).text('لطفا شهر خود را وارد کنید');
    } else if (address == '') {
        $(error).slideDown();
        $(error).text('لطفا ادرس خود را وارد کنید');
    } else if (postalCode == '' || postalCode.length != 10) {
        $(error).slideDown();
        $(error).text('لطفا کدپستی خود را وارد کنید');
    }
    else if (phoneNumber == '' || phoneNumber.length != 11) {
        $(error).slideDown();
        $(error).text('لطفا شماره تماس خود را وارد کنید');
    } else if (captcha !== userCaptcha) {
        $(error).slideDown();
        $(error).text('لطفا کد امنیتی را به صورت صحیح وارد کنید');
    }
    else {
        $(error).hide();
    }

});

//choose color
$(document).on('click', '.pdc_c', function () {
    $('.pdc_c').removeClass('pdc_c_active');
    $(this).addClass('pdc_c_active');
})

//star rating
let stars = document.querySelectorAll(".ratings span");
let products = document.querySelectorAll(".ratings");
let ratings = [];
for (let star of stars) {
    star.addEventListener("click", function () {
        this.setAttribute("data-clicked", "true");
        let rating = this.dataset.rating;
        let productId = this.parentElement.dataset.productid;
        console.log(rating, productId);
        let data = {
            "stars": rating,
            "product-id": productId
        }
        ratings.push(data);
        localStorage.setItem("rating", JSON.stringify(ratings));
    });
}
//product detailes add to cart
function psp_det_price() {
    let det_price = parseInt($('.psp_det_price').text());

    $('.psp_det_price').text(det_price.toLocaleString());

}
psp_det_price();

$(document).on('click', '.psp_tab_1', function () {
    $('.psp_tab_1').removeClass('psp_tab_active');
    $(this).addClass('psp_tab_active');
    let title = $(this).text();
    if (title == 'جزئیات') {
        $('.psp_det').show();
        $('.psp_comment').hide();
    } else {
        $('.psp_comment').show();
        $('.psp_det').hide();
    }

});
$(document).on('click', '.psp_C_like', function () {
    let disLike_num = parseInt($(this).siblings('.psp_C_dislike').children('.disLikeNum').text());


    if ($(this).hasClass('clicked')) {
        return;
    } else if ($(this).siblings('.psp_C_dislike').hasClass('clicked')) {
        disLike_num -= 1;
        $(this).siblings('.psp_C_dislike').children('.disLikeNum').text(disLike_num);
        $(this).siblings('.psp_C_dislike').removeClass('clicked');

        let like = parseInt($(this).children('.LikeNum').text());
        like += 1;
        $(this).children('.LikeNum').text(like);
        $(this).addClass('clicked');
    } else {
        let like = parseInt($(this).children('.LikeNum').text());
        like += 1;
        $(this).children('.LikeNum').text(like);
        $(this).addClass('clicked');
    }
});

$(document).on('click', '.psp_C_dislike', function () {
    let Like_Num = parseInt($(this).siblings('.psp_C_like').children('.LikeNum').text());

    if ($(this).hasClass('clicked')) {
        return;
    } else if ($(this).siblings('.psp_C_like').hasClass('clicked')) {
        Like_Num -= 1;
        $(this).siblings('.psp_C_like').children('.LikeNum').text(Like_Num);
        $(this).siblings('.psp_C_like').removeClass('clicked');

        let dislike = parseInt($(this).children('.disLikeNum').text());

        dislike += 1;
        $(this).children('.disLikeNum').text(dislike);
        $(this).addClass('clicked');
    } else {
        let dislike = parseInt($(this).children('.disLikeNum').text());

        dislike += 1;
        $(this).children('.disLikeNum').text(dislike);
        $(this).addClass('clicked');
    }
});
//register validation
$(document).on('click', '.register_button', function () {
    let name = $('.reg_name').val();
    let phoneNumber = $('.reg_phoneNumber').val();
    let pass = $('.reg_password').val();
    let repeatPass = $('.reg_password_repeat').val();
    if (name == '') {
        $('.reg_name_error').text('نام خود را وارد کنید');
    } else if (phoneNumber == '' || phoneNumber.length != 11) {
        $('.reg_name_error').text('شماره تلفن صحیح نمیباشد');
    } else if (pass == '') {
        $('.reg_name_error').text('لطفا یک رمز عبور انتخاب کنید');
    } else if (pass.length < 8) {
        $('.reg_name_error').text('رمز عبور باید دارای حداقل 8 کاراکتر باشد');
    } else if (pass != repeatPass) {
        $('.reg_name_error').text('تکرار رمز عبور تطابق ندارد');
    } else {
        $('.reg_name_error').text('');
    }
});
//show password in create acount page
$(document).on('click', '.show_password', function () {
    $(this).siblings('input').attr('type', 'text');
    $(this).hide();
    $(this).siblings('.hide_password').show();
});
$(document).on('click', '.hide_password', function () {
    $(this).siblings('input').attr('type', 'password');
    $(this).hide();
    $(this).siblings('.show_password').show();
});
//sign up
$(document).on('click', '.signup_button', function () {
    let name = $('.reg_name').val();
    let pass = $('.reg_password').val();
    let capcha = $('.capcha_code').text();
    let capcha_intered =$('#txtInput').val();
    if (name == '') {
        $(this).parent('a').attr('href', '#');
        $('.reg_name_error').text('نام خود را وارد کنید');

    } else if (pass == '') {
        $(this).parent('a').attr('href', '#');
        $('.reg_name_error').text('رمز خود را وارد کنید');
    }else if(capcha != capcha_intered){
        $(this).parent('a').attr('href', '#');
        $('.reg_name_error').text(' کد امنیتی را صحیح وارد کنید');
    }
    else {
        $(this).parent('a').attr('href', 'index.html');
    }
});
//show create acount slide
$(document).on('click', '.sign_in', function () {
    $(this).parent('.Reg_Ban').parent('.Reg_1').hide();
    $('.create_ac').show(400).css('display', 'flex');
});
$(document).on('click', '.sign_in_2', function () {
    $(this).parent('.Reg_Ban').parent('.Reg_1').hide();
    $('.sign_in_part').show(400).css('display', 'flex');
});
