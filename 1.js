

function quote() {
  $.ajax({
    url: 'https://www.nbrb.by/api/exrates/rates/USD?parammode=2',
    type: 'GET',
    success: function(data) {
      $('#price').html('Exchange rate: ' + data.Cur_OfficialRate + ' BYN');
    },
    error: function() {
      alert('Error fetching exchange rate');
    }
  });
}