let departments = [
  {
    name: "Artist",
    child: [{ name: "Junior artist" }, { name: "Dubbing artist" }]
  },
  {
    name: "Art54",
    child: [{ name: "Main art director" }, { name: "associate art director" }]
  },
  {
    name: "Art5443",
    child: [
      { name: "Main art  jkertortkj director" },
      { name: "assokjfdijo09u8309886530988095ciate art director" }
    ]
  }
];

$(document).ready(function() {
  $.each(departments, function(index, item) {
    $("#parent12").append(
      $("<option>")
        .text(item.name)
        .val(item.name)
    );
  });
});

$("#parent").change(() => {
  let filtered_department = departments.filter(
    item => item.name == $("#parent").val()
  );

  $("#child").empty();
  $.each(filtered_department[0].child, function(index, item) {
    $("#child").append(
      $("<option>")
        .text(item.name)
        .val(item.name)
    );
  });
});
