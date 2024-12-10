import React from 'react'

interface BlogDetailProps {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async (
  { params }: BlogDetailProps
) => {

  const slug = (await params).slug

  return {
    title: `Blog: ${slug}`,
  }
}

const BlogDetail = async ({ params }: BlogDetailProps) => {
  const slug = (await params).slug

  return (
    <div>BlogDetail: {slug}</div>
  )
}

export default BlogDetail