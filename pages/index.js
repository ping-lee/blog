import styled from 'styled-components'
import MyLayout from '../components/layout'
import { getPostBySlug } from '../utils/api'
import PageTitle from '../components/post-title'
import LazyImage from '../components/lazy-img'
import generateLazyImage from '../utils/generate-lazy-image'

const HomePage = ({ mdx, lyimg }) => {
    return (
        <>
          <PageTitle lyimg={lyimg} css="min-height: 35em">
              ss
          </PageTitle>
        </>
    )
}

HomePage.Layout = MyLayout

export async function getStaticProps(context) {
    // 存在的问题：
    // 1.获取静态文件，比如图片
    // 2.获取markdown文件路径
    // 3.图片组件
    let mdx = getPostBySlug('landing')
    const { data, content } = mdx
    const lyimg = await generateLazyImage('/pages/loading/oeschinen-lake.jpg')
    //console.log(lyimg)
  return {
    props: { mdx, lyimg }, // will be passed to the page component as props
  }
}

export default HomePage