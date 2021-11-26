/* Resize select width according to selected text */
$(document).ready(function () {
  $("#width_tmp_option").html($("#categories option:selected").text());
  $("#categories").width($("#width_tmp_select").width());

  $("#categories").change(function () {
    $("#width_tmp_option").html($("#categories option:selected").text());
    $(this).width($("#width_tmp_select").width());
  });
});
