import type { HeroSlide } from '../types'
import carousel1 from '../assets/images/main-carousel/carousel1.jpeg'
import carousel2 from '../assets/images/main-carousel/carousel2.jpeg'
import carousel3 from '../assets/images/main-carousel/carousel3.jpeg'

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: carousel1,
    title: '에리카 유일의\n인공지능 학회',
    description:
      'HYAI는 인공지능에 관심있는 사람들이 모여\n정보를 공유하고 친목을 도모하는 학회입니다.',
  },
  {
    id: 2,
    image: carousel2,
    title: '학우들간의 세미나 및 워크숍',
    description:
      '학우들간의 세미나 및 워크숍을 통해\n다같이 성장하는 학회입니다.',
  },
  {
    id: 3,
    image: carousel3,
    title: '수강자 맞춤형 스터디',
    description:
      '수강자 수준에 맞춰 스터디를 진행하여\n결과물을 만드는데 집중합니다.',
  },
]
