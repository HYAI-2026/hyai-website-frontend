import HeroSlider from '../components/home/HeroSlider'
import QuickMenu from '../components/home/QuickMenu'
import JoinButton from '../components/home/JoinButton'
import NewsSection from '../components/home/NewsSection'
import IntroSection from '../components/home/IntroSection'
import GallerySection from '../components/home/GallerySection'
import Seo from '../components/common/Seo'
import StructuredData from '../components/common/StructuredData'
import { SITE, websiteStructuredData } from '../seo/site'

export default function Home() {
  return (
    <>
      <Seo
        title={SITE.fullName}
        description={SITE.defaultDescription}
        path="/"
        noSuffix
      />
      <StructuredData data={websiteStructuredData} />
      <HeroSlider />
      <QuickMenu />
      <JoinButton />
      <NewsSection />
      <IntroSection />
      <GallerySection />
    </>
  )
}
