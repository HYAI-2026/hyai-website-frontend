import HeroSlider from '../components/home/HeroSlider'
import QuickMenu from '../components/home/QuickMenu'
import JoinButton from '../components/home/JoinButton'
import NewsSection from '../components/home/NewsSection'
import IntroSection from '../components/home/IntroSection'
import GallerySection from '../components/home/GallerySection'
import Seo from '../components/common/Seo'
import StructuredData from '../components/common/StructuredData'
import { SITE } from '../seo/site'

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '한양대학교 ERICA 인공지능학회 HYAI',
  alternateName: 'HYAI',
  url: `${SITE.host}/`,
  description: SITE.defaultDescription,
  inLanguage: 'ko-KR',
}

export default function Home() {
  return (
    <>
      <Seo
        title="한양대학교 ERICA 인공지능학회 HYAI"
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
