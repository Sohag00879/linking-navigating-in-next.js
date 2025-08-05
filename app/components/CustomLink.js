"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function CustomLink({path,children,prefetch=true}) {
    const pathname = usePathname();
    const active = pathname === path;
  return (
   <Link prefetch={prefetch} href={path} scroll={false} className={active ? "text-blue-500":""}>{children}</Link>
  )
}
export default CustomLink