function makeSpotList(spot_offers) {
  $("#spot_offers").html("<h5>Loading</h5>");
  let innerHtml = ``;
  for (let i = 0; i < spot_offers.length; i++) {
    innerHtml += `<div class="col-12 col-md-12 col-lg-12">
    <div>
        <h6 style="font-size:12px">${spot_offers[i].sub_department}</h6>
        <p style="color: #F39C12 ;font-size:12px">${spot_offers[i].production}</p>
        <i class="fa fa-map-marker" style="font-size:16px"></i>&nbsp;<font style="font-size:12px">${spot_offers[i].city}</font>&nbsp;&nbsp;&nbsp;
        <i class="fa fa-suitcase" style="font-size:16px"></i>&nbsp;<font style="font-size:12px">${spot_offers[i].age} years</font>&nbsp;&nbsp;&nbsp;
        <i class='fas fa-coins' style='font-size:16px; color: #FED01F;'></i> <font style="font-size:12px">5000-8000 INR</font>
        <p style="font-size:12px">${spot_offers[i].description}</p>

        <hr>

        <i class="fa fa-file-text" style="font-size:16px"></i>&nbsp;<font style="font-size:12px">5,523 view</font>&nbsp;&nbsp;
        <i class="fa fa-thumbs-up" style="font-size:16px"></i>&nbsp;<font style="font-size:12px">2,345</font>&nbsp;&nbsp;
        <i class="fa fa-thumbs-down" style="font-size:16px"></i>&nbsp;<font style="font-size:12px">351</font>&nbsp;&nbsp;

        <font style="font-size:12px">Posted: 1 hr </font>&nbsp;&nbsp;

        <br>

        <hr>
    </div>
</div>`;
  }
  $("#spot_offers").html(innerHtml);
}

async function loadSpotOffers() {
  spot_offer = await $.getJSON("/spot_offer/all_rest_spot");
  console.log(spot_offer);
  makeSpotList(spot_offer);
}

$(document).ready(function() {
  loadSpotOffers();
});
