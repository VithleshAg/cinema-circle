function makeWorkshopList(workshop) {
  $("#workshop").html("<h5>Loading</h5>");
  let innerHtml = ``;
  for (let i = 0; i < workshop.length; i++) {
    innerHtml += `<div class="col-12 col-md-12 col-lg-12">
    <div>
        <h6 style="font-size:12px">${workshop[i].training}</h6>
        <p style="color: #F39C12 ;font-size:12px">${workshop[i].institute}</p>
        <i class="fa fa-map-marker" style="font-size:16px"></i>&nbsp;<font style="font-size:12px">${workshop[i].city}</font>&nbsp;&nbsp;&nbsp;
        <i class="fa fa-suitcase" style="font-size:16px"></i>&nbsp;<font style="font-size:12px">${workshop[i].start_age}-${workshop[i].end_age} years</font>&nbsp;&nbsp;&nbsp;
        <i class='fas fa-coins' style='font-size:16px; color: #FED01F;'></i> <font style="font-size:12px">5000-8000 INR</font>
        <p style="font-size:12px">${workshop[i].description}</p>

        <hr>

        <i class="fa fa-file-text" style="font-size:16px"></i>&nbsp;<font style="font-size:12px">5,523 view</font>&nbsp;&nbsp;
        <i class="fa fa-thumbs-up" style="font-size:16px"></i>&nbsp;<font style="font-size:12px">2,345</font>&nbsp;&nbsp;
        <i class="fa fa-thumbs-down" style="font-size:16px"></i>&nbsp;<font style="font-size:12px">351</font>&nbsp;&nbsp;

        <font style="font-size:12px">Posted: 1 hr </font>&nbsp;&nbsp;

        <a href="/ad_show/sendprofile">
            <button class="mysendprobtn">Apply</button>
        </a>
        <br>

        <hr>
    </div>
</div>`;
  }
  $("#workshop").html(innerHtml);
}

async function loadWorkshop() {
  workshop = await $.getJSON("/workshop/all_rest_workshop");
  console.log(workshop);
  makeWorkshopList(workshop);
}

$(document).ready(function() {
  loadWorkshop();
});
