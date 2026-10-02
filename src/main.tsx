import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import './assets/font.css'
import './assets/animation.css'
import './assets/styles/index.css'

// vite-react-ssg 엔트리. 빌드 시 정적 HTML 을 생성하고, 브라우저에서 hydration 합니다.
// 별도의 createRoot / BrowserRouter 는 vite-react-ssg 가 내부적으로 처리합니다.
export const createRoot = ViteReactSSG({ routes })
