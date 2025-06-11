import Main from "./main/Main";
import arrow from '../../assets/arrow.png'
import blackArrow from '../../assets/blackArrow.svg'
import photo1 from '../../assets/1photo.jpg'
import photo2 from '../../assets/2photo.jpg'
import photo3 from '../../assets/3photo.jpg'

function Home(){
    return (
        <>
            <Main title='CREATE AND SHARE YOUR PHOTO STORIES.' para='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.' link='GET AN INVITE' arrow={arrow} photo={photo1}/>
            <Main title='BEAUTIFUL STORIES EVERY TIME' para='We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.' link='VIEW THE STORIES' arrow={blackArrow} photo={photo2} backgroundColor="white" flexDirection='row-reverse' color='black'/>
            <Main title='DESIGNED FOR EVERYONE' para='Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ' link='VIEW THE STORIES' arrow={blackArrow} photo={photo3} backgroundColor="white" color='black'/>
        </>
    )
}

export default Home;