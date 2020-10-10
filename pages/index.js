import styled from 'styled-components'
import MyLayout from '../components/layout'

const Title = styled.h1`
font-size: ${({theme}) => theme.colors.primary};
color: red;
`

const HomePage = () => {
    return (
        <Title>Hello world</Title>
    )
}

HomePage.Layout = MyLayout

export default HomePage