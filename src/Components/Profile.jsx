import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img
          className="content__img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIeuxrOyVZWKac7NVVqTaRPWjO_jSot3vMA&usqp=CAU"
          alt="fone"
        />
      </div>
      <div>ava + description</div>
      <div>
        My post
        <div>New post</div>
      </div>
      <div>
        <ul>
          <li>Post 1</li>
          <li>Post 2</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
