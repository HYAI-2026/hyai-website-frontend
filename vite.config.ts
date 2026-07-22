import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite-react-ssg 는 vite 설정의 `ssgOptions` 를 읽습니다.
// (타입 증강이 config 컨텍스트에 로드되지 않으므로 로컬 타입으로 명시)
const config: UserConfig & {
  ssgOptions?: {
    entry?: string
    dirStyle?: 'flat' | 'nested'
    script?: 'sync' | 'async' | 'defer' | 'async defer'
  }
} = {
  plugins: [react()],
  // 커스텀 도메인(www.hyai.kr) 배포이므로 루트 base 사용
  base: '/',
  assetsInclude: ['**/*.mov'],
  // CJS 패키지들이 SSG(SSR) 렌더 시 default import interop 문제가 없도록
  // Vite 가 직접 변환하도록 강제합니다.
  ssr: {
    noExternal: ['hamburger-react', 'embla-carousel-react', 'embla-carousel-autoplay'],
  },
  ssgOptions: {
    entry: 'src/main.tsx',
    // /foo -> /foo/index.html 로 생성 (GitHub Pages 딥링크/새로고침 대응)
    dirStyle: 'nested',
    script: 'async',
  },
}

// https://vitejs.dev/config/
export default defineConfig(config)
