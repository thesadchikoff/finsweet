import PostsSection from '@/components/PostsSection'
import WelcomeSection from '@/components/WelcomeSection'
import AboutUs from '@/components/AboutUs'
import ChooseCategory from '@/components/ChooseCategory'
import WhyWeStarted from '@/components/WhyWeStarted'
import ListOfAuthors from '@/components/ListOfAuthors'
import FeaturedIn from '@/components/FeaturedIn'
import JoinNow from '@/components/JoinNow'

export default function Home() {
  return (
    <div>
      <WelcomeSection/>
      <PostsSection/>
      <AboutUs/>
      <ChooseCategory/>
      <WhyWeStarted/>
      <ListOfAuthors/>
      <FeaturedIn/>
      <JoinNow/>
    </div>
  )
}
