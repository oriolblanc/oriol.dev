/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
// @ts-ignore
import Hero from "@lekoarts/gatsby-theme-minimal-blog/src/texts/hero"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout>
      <section sx={{ mb: [9, 9, 9], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
    </Layout>
  )
}

export default Homepage