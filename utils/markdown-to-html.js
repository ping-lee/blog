import remark from 'remark'
import html from 'remark-html'
import math from 'remark-math'
import htmlKatex from 'remark-html-katex'
import highlight from 'remark-highlight.js'

export default async function markdownToHtml(markdown) {
  const result = await remark()
                         .use(highlight)
                         .use(math)
                         .use(htmlKatex)
                         .use(html)
                         .process(markdown)
  return result.toString()
}