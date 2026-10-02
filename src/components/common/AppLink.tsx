import type { MouseEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface AppLinkProps {
  href: string
  className?: string
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export default function AppLink({ href, className, children, onClick }: AppLinkProps) {
  const isExternal = href.startsWith('http')

  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  )
}
