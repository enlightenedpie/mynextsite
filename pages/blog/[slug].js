import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
//import glob from 'glob';

export default function BlogPost(props) {
  return (
    <ReactMarkdown source={props.markdownBody} />
  )
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params
  const content = await import(`../../posts/${slug}.md`)
  const config = await import(`../../data/config.json`)
  const data = matter(content.default)

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  // //get all .md files in the posts dir
  // const blogs = glob.sync('posts/**/*.md')

  // //remove path and extension to leave filename only
  // const blogSlugs = blogs.map(file =>
  //   file
  //     .split('/')[1]
  //     .replace(/ /g, '-')
  //     .slice(0, -3)
  //     .trim()
  // )

  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

      return slug
    })
    return data
  })(require.context('../../posts', true, /\.md$/))

  // create paths with `slug` param
  const paths = blogSlugs.map(slug => `/blog/${slug}`)

  return {
    paths,
    fallback: false,
  }
}