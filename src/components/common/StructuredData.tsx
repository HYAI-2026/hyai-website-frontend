import { useEffect } from 'react'

type StructuredDataProps = {
  data: Record<string, unknown>
}

// 해당 콘텐츠가 실제로 표시되는 페이지에서만 JSON-LD를 <head>에 주입합니다.
// SPA 특성상 다른 라우트로 이동하면 구조화 데이터가 남지 않도록 언마운트 시 제거합니다.
export default function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [data])

  return null
}
