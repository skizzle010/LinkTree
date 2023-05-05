import React from "react";

const profile = () => {
    return(
        <form class="edit-profile-form">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" />
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" />
  </div>
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" />
  </div>
  <div class="form-group">
    <label for="avatar">Avatar URL:</label>
    <input type="text" id="avatar" name="avatar" />
  </div>
  <button type="submit">Update Profile</button>
</form>

    )

}

export default profile;