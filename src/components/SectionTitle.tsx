import { ReactNode } from 'react'

type Props = {
    children: ReactNode
    background: string
    textColor?: string
}


export default function SectionTitle({ children, background, textColor = 'text-heading' }: Props) {
  return (
    <p className={`inline-flex border-l-2 font-medium border-primary1 p-1 mb-2 ${textColor} ${background} `}>
        {children}
        </p>
  )
}