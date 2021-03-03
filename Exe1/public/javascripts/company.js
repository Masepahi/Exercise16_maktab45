$(document).ready(function () {
  $("#createNewComp").click(function () {
    $("#myForm").submit();
  });
});

$(document).ready(() => {
  $(".deleteBtn").click(function () {
    $.ajax({
      method: "delete",
      url: `/company/${$(this).attr("companyId")}`,
      success: function (data) {
        window.location.reload();
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
});

$(document).ready(() => {
  $("#updateBtn").click(function () {
    console.log($(this).attr("companyId"));
    $.ajax({
      method: "PUT",
      url: `/company/updateCompany/${$(this).attr("companyId")}`,
      success: function (data) {
        window.location.reload();
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
});
