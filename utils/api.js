import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import generateLazyImage from './generate-lazy-image'

const postsDirectory = join(process.cwd(), 'content')

export function getPostSlugs(dir) {
  return fs.readdirSync(join(postsDirectory, dir))
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  //console.log(data, content)

  /* 
  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })
  

  return items
  */
 return { data, content}
}

export async function  getAllPosts(dir, fields = []) {
  // dir = /posts
  const slugs = getPostSlugs(dir)
  const posts = slugs
    .map((slug) => {
      // serialize date props
      let { data, content } = getPostBySlug(`${dir}/${slug}/${slug.substr(11,(slug.length-10))}`, fields)
 
      // add customn property
      data.dateFormated = dayjs(data.date).locale('zh-cn').format('MMMM D日, YYYY')
      const tmp = JSON.stringify(replacer(data.date))
      data.date = tmp  // 存在重复
      //console.log(data.dateFormated)
      data.cover.fileName = slug;
      data.timeToRead = readingTime(content)
      return { data, content }
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

function replacer(value) {
  if (typeof value === 'Date') {
    return value.toString();
  }
  return value;
}

function readingTime(post) {
  // 每分钟阅读两百字
  const WORDS_PER_MINUTE = 200
  let result = {}
  let regex=/[\u4e00-\u9fa5]/g // 中文
  if((post || '').match(regex)){
      result.wordCount = (post || '').match(regex).length
  } else {
    regex = /\w+/g // 英文
    result.wordCount = (post || '').match(regex).length
  }

  result.readingTime = 
  Math.ceil(
     result.wordCount / 
     WORDS_PER_MINUTE);
  return result;
}