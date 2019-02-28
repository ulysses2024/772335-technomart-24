

  var contact = document.querySelector(".contact-button");
  var popup_contact = document.querySelector(".write-us-window");
  var close_contacts =  document.querySelector(".close-write-us-window");
  var username = document.querySelector(".write-us-window [name=name]");

  var map = document.querySelector(".map-small");
  var popup_map = document.querySelector(".map-popup-window");
  var close_map =  document.querySelector(".close-map-popup");

  var slider_left = document.querySelector(".slider-left-button");
  var slider_right = document.querySelector(".slider-right-button");
  var dreli = document.querySelector(".promo-dreli");
  var perforators = document.querySelector(".promo-perforators");

  var delivery = document.querySelector(".delivery-button");
  var delivery_block = document.querySelector(".delivery");
  var guarantee = document.querySelector(".guarantee-button");
  var guarantee_block = document.querySelector(".guarantee");
  var credit =  document.querySelector(".credit-button");
  var credit_block =  document.querySelector(".credit");

  var basket = document.querySelectorAll(".item-basket-button");
  var popup_basket = document.querySelector(".basket-popup-success");
  var close_basket =  document.querySelector(".close-basket-popup");
  var submit_basket =  document.querySelector(".basket-submit-button");
  var continue_basket = document.querySelector(".basket-continue-button");
  var card = document.querySelectorAll(".catalog-list li");
  var bookmark = document.querySelectorAll(".item-bookmarks-button");
  var bookmarks_head = document.querySelector(".bookmarks");

  if (contact) {
    contact.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup_contact.classList.add("popup-show");
        username.focus();
    });

    close_contacts.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup_contact.classList.remove("popup-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup_contact.classList.contains("popup-show")) {
          popup_contact.classList.remove("popup-show");
        }
      }
    });
  };

  if (map) {
    map.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup_map.classList.add("popup-show");
    });

    close_map.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup_map.classList.remove("popup-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup_map.classList.contains("popup-show")) {
          popup_map.classList.remove("popup-show");
        }
      }
    });
  };

  if (delivery) {
    delivery.addEventListener("click", function (evt) {
        evt.preventDefault();
        delivery.classList.add("active-service");
        guarantee.classList.remove("active-service");
        credit.classList.remove("active-service");

        delivery_block.classList.add("service-block-active");
        guarantee_block.classList.remove("service-block-active");
        credit_block.classList.remove("service-block-active");
    });
    guarantee.addEventListener("click", function (evt) {
        evt.preventDefault();
        guarantee.classList.add("active-service");
        delivery.classList.remove("active-service");
        credit.classList.remove("active-service");

        guarantee_block.classList.add("service-block-active");
        delivery_block.classList.remove("service-block-active");
        credit_block.classList.remove("service-block-active");
    });
    credit.addEventListener("click", function (evt) {
        evt.preventDefault();
        credit.classList.add("active-service");
        delivery.classList.remove("active-service");
        guarantee.classList.remove("active-service");

        credit_block.classList.add("service-block-active");
        delivery_block.classList.remove("service-block-active");
        guarantee_block.classList.remove("service-block-active");
    });
  };

  if (dreli) {
    slider_left.addEventListener("click", function (evt) {
      evt.preventDefault();
      dreli.classList.toggle("promo-active");
      perforators.classList.toggle("promo-active");
    });
    slider_right.addEventListener("click", function (evt) {
      evt.preventDefault();
      dreli.classList.toggle("promo-active");
      perforators.classList.toggle("promo-active");
    });
  };

  if (basket) {
    basket.forEach(function(item, i, basket) {
      item.addEventListener("click", function (evt) {
          evt.preventDefault();
          popup_basket.classList.add("popup-show");
          submit_basket.focus();
      })
    });

    bookmark.forEach(function(item, i, bookmark) {
      item.addEventListener("click", function (evt) {
          evt.preventDefault();
          bookmarks_head.classList.add("bookmarks-full");
      })
    });

    close_basket.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup_basket.classList.remove("popup-show");
    });

    continue_basket.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup_basket.classList.remove("popup-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup_basket.classList.contains("popup-show")) {
          popup_basket.classList.remove("popup-show");
        }
      }
    });
   };
