import HeroSlider from '../components/home/HeroSlider'
import QuickMenu from '../components/home/QuickMenu'
import JoinButton from '../components/home/JoinButton'
import NewsSection from '../components/home/NewsSection'
import IntroSection from '../components/home/IntroSection'
import GallerySection from '../components/home/GallerySection'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <QuickMenu />
      <JoinButton />
      <NewsSection />
      <IntroSection />
      <GallerySection />
    </>
  )
}
