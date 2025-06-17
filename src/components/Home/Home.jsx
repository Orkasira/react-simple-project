import Main from "./main/Main";
import arrow from "../../assets/arrow.png";
import blackArrow from "../../assets/blackArrow.svg";
import photo1 from "../../assets/1photo.jpg";
import photo2 from "../../assets/2photo.jpg";
import photo3 from "../../assets/3photo.jpg";
import Main2 from "./Main2/Main2";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import Main3 from "./Main3/Main3";
import logo1 from "../../assets/001.png"
import logo2 from "../../assets/002.png"
import logo3 from "../../assets/003.png"

function Home() {
  return (
    <>
      <Main
        title="CREATE AND SHARE YOUR PHOTO STORIES."
        para="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        link="GET AN INVITE"
        arrow={arrow}
        photo={photo1}
      />
      <Main
        title="BEAUTIFUL STORIES EVERY TIME"
        para="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        link="VIEW THE STORIES"
        arrow={blackArrow}
        photo={photo2}
        backgroundColor="white"
        flexDirection="row-reverse"
        color="black"
      />
      <Main
        title="DESIGNED FOR EVERYONE"
        para="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
        link="VIEW THE STORIES"
        arrow={blackArrow}
        photo={photo3}
        backgroundColor="white"
        color="black"
      />
      <div className="Main2-img-div">
        <Main2 img={img1} secTitle="The Mountains" by="by John Appleseed" />
        <Main2 img={img2} secTitle="Sunset Cityscapes" by="by Benjamin Cruz" />
        <Main2 img={img3} secTitle="18 Days Voyage" by="by Alexei Borodin" />
        <Main2 img={img4} secTitle="Architecturals" by="by Samantha Brooke" />
      </div>

      <div className="all-logos">
        <Main3 logo={logo1} thrTitle="100% Responsive" para="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."/>
        <Main3 logo={logo2} thrTitle="No Photo Upload Limit" para="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."/>
        <Main3 logo={logo3} thrTitle="Available to Embed" para="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "/>
      </div>
    </>
  );
}

export default Home;
