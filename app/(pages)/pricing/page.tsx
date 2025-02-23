import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'SEO Description',
    keywords: ['Información', 'Darwin', 'Pricing Page'],
}

export default function Pricing() {
    return (
        <span className="text-5xl">Pricing Page</span>
    )
}