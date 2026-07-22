type StructuredDataProps = {
  data: Record<string, unknown>
}

// JSON-LD 를 정적으로 빌드된 HTML 에 <script type="application/ld+json"> 로 직접 포함시킵니다.
// (useEffect / document.head 를 쓰지 않으므로 크롤러가 초기 HTML 에서 바로 읽을 수 있습니다.)
// '<' 를 유니코드 이스케이프하여 </script> 주입 등 XSS 를 방지합니다.
export default function StructuredData({ data }: StructuredDataProps) {
  const json = JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
