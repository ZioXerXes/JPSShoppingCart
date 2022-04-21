var sum = function (acc, x) {
  return acc + x;
};

var updateItemTotal = function (ele) {
  var priceNumber = parseFloat($(ele).children('.price').text());
  var quantityNumber = parseFloat($(ele).find('.quantity input').val());
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

$(document).on('click', '.btn.remove', function (event) {
  $(this).closest('tr').remove();
  addEverything();
});

$(document).ready(function () {
  addEverything();

  var timeout;
  $(document).on('input', 'tr input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      addEverything();
    }, 250);
  });

  $('.btn.remove').on('click', function (event) {
    $(this).closest('tr').remove();
    addEverything();
  });

  $('#addGrocery').on('submit', function (event) {
    event.preventDefault();
    var name = $(this).children('[name=item]').val();
    var price = $(this).children('[name=price]').val();

    $('tbody').append('<tr>' +
    '<td class="name col-xs-3">' + name + '</td>' +
    '<td class="price col-xs-3">' + price + '</td>' +
    '<td class="quantity col-xs-3"><input type="number" value="0" /></td>' +
    '<td class="total">0</td>' +
    '<td><button class="btn btn-light btn-sm remove">Remove</button></td>' +
    '</tr>');
  });
  });