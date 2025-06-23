import FeatMain from "./FeatMain/FeatMain";
import FeatLast from "./FeatLast/FeatLast";
import logo1 from "../../assets/001.png"
import logo2 from "../../assets/002.png"
import logo3 from "../../assets/003.png"
import logo4 from "../../assets/logo4.svg"
import logo5 from "../../assets/logo5.svg"
import logo6 from "../../assets/logo6.svg"
import FeatFinish from "./FeatFinish/FeatFinish";


function Features() {
  return (
    <>
      <FeatMain />
      <div className="all">
      <div className="first-logos">
      <FeatLast
        logo={logo1}
        thrTitle="100% Responsive"
        para="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
      />
      <FeatLast
        logo={logo2}
        thrTitle="No Photo Upload Limit"
        para="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
      />
      <FeatLast
        logo={logo3}
        thrTitle="Available to Embed"
        para="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
      />
      </div>
      <div className="second-logos">
        <FeatLast
        logo={logo4}
        thrTitle="Custom Domain"
        para="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
      />
      <FeatLast
        logo={logo5}
        thrTitle="Boost Your Exposure"
        para="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
      />
      <FeatLast
        logo={logo6}
        thrTitle="Drag & Drop Image"
        para="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
      />
      </div>
      </div>
      <FeatFinish/>
    </>
  );
}

export default Features;
