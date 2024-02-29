import { useState } from "react";
import "./Blog.css";
import blogs from "./data";
const Blog = () => {
  const [toggleShow, setToggleShow] = useState(false);
  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <div className="blog">
          <h5 className="blog-tag">{blog.tag}</h5>
          <p className="blog-text">{blog.text}</p>
        </div>
      ))}
      <div className="blog">
        <h5 className="blog-tag">Kashmir Animal Welfare Network & Partners</h5>
        <p className="blog-text">
          KAWFCares works very hard to ensure that at least a few of the many
          animals in Kashmir receive timely help and treatment. Unfortunately,
          due to the escalating number of rescues we receive each day, and the
          lack of resources or people who can help us out, we might be a little
          delayed in responding to the rescue calls or messages from all of you
          out there who want to help. Nevertheless, we strive to respond back
          when we are free and so do leave a message - your name and contact,
          details or the rescue case - preferably with photos - and the exact
          location that we need to reach. We will try our best to be as quick as
          possible in helping you out. If we don’t respond as quickly as the
          situation desires, then feel free to contact our partners who are all
          very enthusiastically involved in animal rescues as well. You can
          contact them, and if they don’t respond either they are also probably
          busy. Leave a message with all the details as previously stated and
          stay strong. 1.{" "}
          <a href="https://www.instagram.com/animal_rescue_kashmir/">
            Animal Rescue Kashmir (ARK)
          </a>
          2. <a href="https://www.instagram.com/p/Cx8FAMgyTj-/"> Strayworld</a>
          3.{" "}
          <a href="https://www.instagram.com/animal_aid_kashmir/?hl=en">
            Animal aid Kashmir
          </a>
          4.{" "}
          <a href="https://www.instagram.com/asrkashmir/">
            Animal Salvation & Relief - Kashmir
          </a>
          5.{" "}
          <a href="https://www.instagram.com/_hopeforstrays/followers/mutualOnly">
            Hope Hope Baramulla
          </a>
          6. <a href="">J&K Animal Care Center </a>
          7.{" "}
          <a href="https://www.instagram.com/animal_protectors_baramulla/">
            Animal Protectors Baramulla
          </a>
          8.{" "}
          <a href="https://www.instagram.com/tales_of_pawprints/">
            Tales of Pawprints
          </a>
          And many volunteers Refer to these emergency first-aid guidelines for
          animals:
          <a href="https://maps.app.goo.gl/xJBkH6TBDbawKGei9">
            List of Veterinary centers in Srinagar area{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Blog;
