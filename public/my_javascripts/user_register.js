function checkPassword() {
  let confirm_password = $("#confirm_password").val();
  let password = $("#password").val();
  if (password === confirm_password) {
    return true;
  } else {
    return false;
  }
}

async function checkEmail() {
  let email = $("#email").val();
  user = await $.getJSON("/user/all_rest");
  let i;
  console.log("hii");
  for (i = 0; i < user.length; i++) {
    console.log("heyyyyyy");
    if (email === user[i].email) {
      return true;
      break;
    } else {
      return false;
    }
  }
}

$(document).ready(function() {
  $("#confirm_password").keyup(function(e) {
    if (checkPassword()) {
      $("#message").html('<h4 style = "color : green">Password  Matched</h4>');
    } else {
      $("#message").html('<h4 style = "color : red">Password Not Matched</h4>');
    }
  });

  $("#myform").submit(function(e) {
    if (!checkPassword()) {
      e.preventDefault();
      alert("Passwords Do Not Matched");
    }
    // else if (checkEmail()) {
    //   e.preventDefault();
    //   alert("Email already exist");
    // }
  });
});
