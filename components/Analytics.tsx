// components/Analytics.tsx
'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    if (!gaId) return
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    // send page_view on route change
    // @ts-ignore
    window.gtag?.('config', gaId, { page_path: url })
  }, [gaId, pathname, searchParams])

  return null
}