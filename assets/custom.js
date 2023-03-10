/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */


//      document.addEventListener('variant:changed', function(variant) {
//     _VariantsImages(variant);
//   });

//   _VariantsImages:function(variant) {
//    var variantAlt = variant.variant.featured_image.alt
//    var varaintImage = variant.variant.featured_image
//    if (varaintImage != null && variantAlt != null ) {
//     $('[data-alt]').hide();
//     var Images = $('[data-alt="'+ variantAlt +'"]');
//     $(Images).show();
//    }
//    else{
//     $('[data-alt]').show();
//    }
// }
  
   
   

     
 


$('.HorizontalList__Item').click(function() {
    var index = $(this).attr('data-slide-index');

    $('.All_description .varaint_des').addClass('Hide');
    $('.All_description .varaint_des[data-slide-index=' + index + ']').removeClass('Hide');

    
});

window.onload = function(){
  
  $("[data-bsub-selling-plan-input]").click(function(){
    var elem = $(this).parent().parent();
    console.log(elem.find("[data-bsub-per-delivery-price]").html())
    setTimeout(function(){
      $('.atc-price').html(elem.find("[data-bsub-per-delivery-price]").html());
    },1000)
  })
  $('[data-bsub-purchase-option-one-time]').click(function(){
    setTimeout(function(){
      $('.atc-price').html($('.Price.ProductPrice__copy').html());
    },1000)
  })
  $('.bsub-widget__input').click(function(){
    $("[data-bsub-selling-plan-input]:checked").click()
  })  
  // $('.bsub-widget__input').click();
  $(document).on('click','.cart-subs-widget .bsub-widget__plan-header',function(){
    $('.cart-subs-widget .bsub-widget__plan-header').removeClass('active-option')
    $(this).addClass('active-option');
     var key = $(this).attr('data-variantremove');
      var variant = $(this).attr('data-variantadd');
      var selling_plan = $(this).attr('data-selling');
      var quantity = $(this).attr('data-quantity');
      $.ajax({
      type: "POST",
      url: "/cart/change.js",
      dataType: "json",
      data: {
      id: key,
      quantity: 0,
      },
      }).then((data) => {
          $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: "json",
        data: {
        id: variant,
        quantity: quantity,
        selling_plan:selling_plan
        },
        }).then((data) => {
            
        });
      });
  })
    $(document).on('click','.subscribe-cart',function(){
      $(this).hide();
      $(this).prev().show();
    })
   $(document).on('click','.bsub-widget__plan:first-child',function(){
    alert()
    })
}

