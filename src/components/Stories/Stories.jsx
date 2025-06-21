import Card from "./Cards/Cards";
import Title from "./Title/Title";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";
import img10 from "../../assets/img10.png";
import img11 from "../../assets/img11.png";
import img12 from "../../assets/img12.png";
import img13 from "../../assets/img13.png";
import img14 from "../../assets/img14.png";
import img15 from "../../assets/img15.png";
import img16 from "../../assets/img16.png";

function Stories() {
  return (
    <>
      <Title />
      <div>
        <div className="four">
          <Card
            img={img1}
            secTitle="The Mountains"
            by="by John Appleseed"
            date="April 16th 2020"
          />
          <Card
            img={img2}
            secTitle="Sunset Cityscapes"
            by="by Benjamin Cruz"
            date="April 14th 2020"
          />
          <Card
            img={img3}
            secTitle="18 Days Voyage"
            by="by Alexei Borodin"
            date="April 11th 2020"
          />
          <Card
            img={img4}
            secTitle="Architecturals"
            by="by Samantha Brooke"
            date="April 9th 2020"
          />
        </div>
        <div className="four">
          <Card
            img={img5}
            secTitle="World Tour 2019"
            by="by Timothy Wagner"
            date="April 7th 2020"
          />
          <Card
            img={img6}
            secTitle="Unforeseen Corners"
            by="by William Malcolm"
            date="April 3rd 2020"
          />
          <Card
            img={img7}
            secTitle="King on Africa: Part II"
            by="by Tim Hillenburg"
            date="March 29th 2020"
          />
          <Card
            img={img8}
            secTitle="The Trip to Nowhere"
            by="by Felicia Rourke"
            date="March 21st 2020"
          />
        </div>
        <div className="four">
          <Card
            img={img9}
            secTitle="Rage of The Sea"
            by="by Mohammed Abdul"
            date="March 19th 2020"
          />
          <Card
            img={img10}
            secTitle="Running Free"
            by="by Michelle"
            date="March 16th 2020"
          />
          <Card
            img={img11}
            secTitle="Behind the Waves"
            by="by Lamarr Wilson"
            date="March 11th 2020"
          />
          <Card
            img={img12}
            secTitle="Calm Waters"
            by="by Samantha Brooke"
            date="March 9th 2020"
          />
        </div>
        <div className="four">
          <Card
            img={img13}
            secTitle="The Milky Way"
            by="by Benjamin Cruz"
            date="March 5th 2020"
          />
          <Card
            img={img14}
            secTitle="Night at The Dark Forest"
            by="by  Mohammed Abdul"
            date="March 4th 2020"
          />
          <Card
            img={img15}
            secTitle="Somwarpet’s Beauty"
            by="by Michelle"
            date="March 1st 2020"
          />
          <Card
            img={img16}
            secTitle="Land of Dreams"
            by="by William Malcolm"
            date="February 25th 2020"
          />
        </div>
      </div>
    </>
  );
}

export default Stories;
