var plans = {"1B-1":"img/floorplans/1 Bedroom/1.png",
             "1B-2": "img/floorplans/1 Bedroom/2.png",
             "1B-2a":"img/floorplans/1 Bedroom/2a.png",
             "1B-3":"img/floorplans/1 Bedroom/3.png",
             "1B-4":"img/floorplans/1 Bedroom/4.png",
             "2B-1":"img/floorplans/2 Bedroom/1.png",
             "2B-2":"img/floorplans/2 Bedroom/2.png",
             "2B-2a":"img/floorplans/2 Bedroom/2a.png",
             "2B-3":"img/floorplans/2 Bedroom/3.png",
             "2B-3a":"img/floorplans/2 Bedroom/3a.png",
             "2B-4":"img/floorplans/2 Bedroom/4.png",
             "2B-4a":"img/floorplans/2 Bedroom/4a.png",
             "S1":"img/floorplans/Studio/S1.png",
             "S1-a":"img/floorplans/Studio/S1a.png"
             }

$("#roomtype").change(function(){
  value = $( "#roomtype option:selected" ).attr("value")
  console.log($( "#roomtype option:selected" ).attr("value"))
  if(value == 1){
    $("#1-Bedroom").show()
    $("#2-Bedroom").hide()
    $("#Studio").hide()
  }
  if(value == 2){
    $("#1-Bedroom").hide()
    $("#2-Bedroom").show()
    $("#Studio").hide()
  }
  if(value == "S"){
    $("#1-Bedroom").hide()
    $("#2-Bedroom").hide()
    $("#Studio").show()
  }
})

$(".roomplan").click(function(){
  $("#display").attr("src",plans[$(this).text()])
  console.log($(this).text())
})
