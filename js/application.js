var updateItemTotal = function (ele) {
  var quantitySelect = parseFloat($(ele).find('.quantity input').val());
  var priceSelect = parseFloat($(ele).children('.price').text());
        
  var itemTotal = quantitySelect * priceSelect;
  $(ele).children('.total').text("$" + itemTotal);

  return itemTotal;
};

$(document).ready(function () {
  $('tbody tr').each(function (i, ele) {
    //updateItemTotal(ele);    
    });
});