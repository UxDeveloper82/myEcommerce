var months = ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var sArr = ["AK"];



function buildSelects() {
    for(var i in sArr) {
       $("#state, #stateB").append($('<option>'+sArr[i]+'</option>'));
    }
    for(var i in months) {
        $("#expiresM").append($('<option>'+months[i] + '</option>'));
    }
    for(var y=2015; y<2020; y++)
    {
        $("#expiresY").append($('<option>'+y+'</option>'));
    }
}

function updateAddr() {
    var cb = $("#cbSame");
    if (cb.prop("checked")) {
    $("#nameB").val($("#name").val());
    $("#addrB").val($("#addr").val());
    $("#cityB").val($("#city").val());
    $("#stateB").val($("#state").val());
    $("#zipB").val($("#zip").val());
    $("#addrB, #cityB, #stateB, #zipB").prop("disabled", "disabled");
}else {
    $("#addrB, #cityB, #stateB, #zipB").prop("disabled", "");
    }
}

function updatePaymentType() {
    if(this.id == "ppal") {
           $("#ccInfo").hide();
           $("#ppInfo").show();
           $('#ppEmail').focus();
       }else {
           $("#ppInfo").hide();
           $("#ccInfo").show();
           $('#cardNum').focus();
       }
}

$(document).ready(function() {
    console.log("ready");
   $("#ppInfo").hide();
   // Create Function
   buildSelects();
   $("#cbSame").click(updateAddr);
   $("input:radio").click(updatePaymentType);
   $("form").submit(function (e) {
      alert("Sorry. Not yet Implemented.");
      e.preventDefault();
   });
   $("#resetB").click(function(e) {
      if(confirm('Are you sure?'))
      {
          $("form").get(0).reset();
      }
   });

});