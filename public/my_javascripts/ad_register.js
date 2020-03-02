let action = [
  {
    name: "spot_call"
  },
  {
    name: "audition"
  },
  {
    name: "workshop"
  },
  {
    name: "event"
  }
];

function spot_register() {
  $("#spot_register").html("<h5>Loading</h5>");
  let innerHtml = ``;
  innerHtml += `<tr>
    <td>Select Department:</td>
    <td><select id = 'department' name="department"  style=" border-radius: 6px;" required>
            <option  value="undefined">select</option> 
            <option  value="artist">Artist</option>
            <option  value="art">Art</option> 
            <option class="department" value="direction">Direction</option> 
            <option class="department" value="art">Art</option> 
            <option class="department" value="camera">Camera</option>
            <option class="department" value="music">Music</option> 
            <option class="department" value="editing">Editing</option> 
            <option class="department" value="story">Story-Screenplay</option> 
            <option class="department" value="lyrics">Lyrics</option> 
            <option class="department" value="production">Production</option>
            <option class="department" value="costume">Costume</option> 
            <option class="department" value="singers">Singers</option> 
            <option class="department" value="dubbing">Dubbing,Mixing,and Recording</option> 
            <option class="department" value="ufx">UFX, Coloring, Graphics, and Animation</option> 
            <option class="department" value="choreagraphy">Choreagraphy</option>
            <option class="department" value="unit">Unit and Light</option> 
            <option class="department" value="producers">Producers</option> 
            <option class="department" value="fight">Fight</option> 
            <option class="department" value="visual">Visual</option> 
            <option class="department" value="modeling">Modeling</option>
            <option class="department" value="publicity">Publicity</option> 
            <option class="department" value="technicians">Technicians(Post-Production)</option> 
            <option class="department" value="studios">Studios</option> 
            <option class="department" value="shooting">Shooting Spots</option>    
        </select> 
    </td> </tr>	
  <tr><td>Looking For:</td> <td>  <input type="text" name="sub_department" placeholder="" required> </td></tr>	
  <tr><td>Age:</td> <td>  <input type="text" name="age" placeholder="" required> </td></tr>	
  <tr><td>Shooting Type:</td> <td>  <input type="text" name="shooting" placeholder="" required> </td></tr>	
  <tr><td>Movie Name</td> <td>  <input type="text" name="movie" placeholder="" required> </td></tr>	
  <tr><td>Production House</td> <td>  <input type="text" name="production" placeholder="" required> </td></tr>	
  <tr><td>Selected Profile Only</td> <td>  <input type="text" name="selected_profile" placeholder="" required> </td></tr>	
  <tr><td>Date of Start</td> <td>  <input type="text" name="start_date" placeholder="" required> </td></tr>	
  <tr><td>Date of End</td> <td>  <input type="text" name="end_date" placeholder="" required> </td></tr>	
  <tr><td>start Timing:</td> <td>  <input type="text" name="start_time" placeholder="" required> </td></tr>
  <tr><td>End Timing:</td> <td>  <input type="text" name="end_time" placeholder="" required> </td></tr>	
  <tr><td>Address:</td> <td>  <input type="text" name="address"  placeholder="" required> </td></tr>	
  <tr><td>City:</td> <td>  <input type="text" name="city"  placeholder="" required> </td></tr>	
  <tr><td>State:</td> <td>  <input type="text" name="state"  placeholder="" required> </td></tr>	
  <tr><td>Pincode:</td> <td>  <input type="tel" name="pincode" placeholder="" required> </td></tr>	
  <tr><td>Name:</td> <td>  <input type="text" name="name" placeholder="" required> </td></tr>	
  <tr><td>Email:</td> <td>  <input type="text" name="email" placeholder="" required> </td></tr>	
  <tr><td>Phone number:</td> <td>  <input type="tel" name="phone" placeholder="" required> </td></tr>	
  <tr><td>Write Something about Your AD:</td> <td>  <input type="text" name="description" placeholder="" required> </td></tr>`;
  $("#spot_register").html(innerHtml);
}

$("#action").click(() => {
  console.log("hiiiiii");
  let filtered_action = action.filter(item => item.name == $("#action").val());

  if (filtered_action == "spot_call") {
    spot_register();
  }
});
