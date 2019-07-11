import React from 'react'
import styled from '@emotion/styled'
import FacebookLogo from '../img/facebook.svg'
import TwitterLogo from '../img/twitter.svg'
import PinterestLogo from '../img/pinterest.svg'

export default ({slug}) => (
  <Wrapper>
    <SocialLink target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://igobyari.com${slug}`}>
      <SocialIcon src={FacebookLogo} />
    </SocialLink>
    <SocialLink target="_blank" href={`https://twitter.com/home?status=https://igobyari.com${slug}`}>
      <SocialIcon src={TwitterLogo} />
    </SocialLink>
    <SocialLink target="_blank" href={`https://pinterest.com/pin/create/button/?url=https://igobyari.com${slug}&media=&description=`}>
      <SocialIcon src={PinterestLogo} />
    </SocialLink>
  </Wrapper>
)

const Wrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

const SocialLink = styled('a')`
  margin: 0px 10px;
  &:hover{
    opacity: .7;
  }
`

const SocialIcon = styled('img')`
  width: 26px;
  height: 26px;
`
