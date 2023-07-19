import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { h } from 'hastscript'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
  },
}

const mdxMeta = defineNestedType(() => ({
  name: 'MDXMeta',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
}))

export const ExampleMDX = defineDocumentType(() => ({
  name: 'EventPost',
  filePathPattern: `events/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    cover: {
      type: 'string',
      required: true,
    },
    mdxMeta: {
      required: true,
      type: 'nested',
      of: mdxMeta,
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'src/example-data',
  documentTypes: [ExampleMDX],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          properties: {
            class: 'anchor-link',
            ariaHidden: true,
            tabindex: -1,
          },
          content: [h('span.hashtag', '#')],
        },
      ],
    ],
  },
})
