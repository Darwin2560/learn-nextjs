import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'SEO Description',
    keywords: ['Información', 'Darwin', 'Contact Page'],
}

export default function Contact() {
    return (
        <span className="text-5xl">Contact Page</span>
    )
}