import styled from 'styled-components'
import MyLayout from '../components/layout'
import { getPostBySlug } from '../utils/api'
import PageTitle from '../components/post-title'

const HomePage = ({ mdx }) => {
    return (
        <>
          <PageTitle img={mdx.data.cover.img} css="min-height: 35em">
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
    //console.log(mdx)
  return {
    props: { mdx }, // will be passed to the page component as props
  }
}

export default HomePage