$(document).ready(function() {
  $.getJSON("data.json", function(response) {
    $.each(response, function(i, item) {
      let longitude = item.location[0];
      let latitude = item.location[1];
      var $tr = $("<tr>").append(
        $("<td>").text(item.name),
        $("<td>").text(item.description),
        $("<td>").append(
          `<a class='btn btn-primary btn-sm' href='https://www.google.com/maps?q=${longitude},${latitude}'>Google Maps</a>`
        )
      );
      $tr.appendTo(".table");
    });
  });
});
