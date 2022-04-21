var sum = function (acc, x) {
  return acc + x;
};

var updateItemTotal = function (ele) {
  var priceNumber = parseFloat($(ele).children('.price').text());
  var quantityNumber = parseFloat($(ele).children('.quantity').text());
  var totalPrice = priceNumber * quantityNumber;
  $(ele).children('.total').html(totalPrice);
  
  return totalPrice;
}

var addEverything = function () {
  var totalBill = [];

  $('tbody tr').each(function (i, ele) {
    var itemTotal = updateItemTotal(ele);
    totalBill.push(itemTotal);
  });

    var addEmUp = totalBill.reduce(sum);
    $('.completeTotal').html(addEmUp);
};

$(document).ready(function () {
  addEverything();

  $('.btn.remove').on('click', function (event) {
    $(this).closest('tr').remove();
    addEverything();
  });
});