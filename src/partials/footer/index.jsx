/*
This is the footer section
*/

import { Col, Row } from 'react-bootstrap'
import * as icons from '@swiftcarrot/react-ionicons'
import { css } from '@emotion/react'
import { darken } from 'polished'
import SectionWrapper from 'root/src/components/section-wrapper'
import styled from './style'

// Single block component to display icon and content
const SingleBlock = (props) => {
  const { cols, Icon, content } = props
  return (
    <Col {...cols}>
      <div css={styled.SingleBlock}>
        {/* Icon to display */}
        <Icon className='_icon' />
        {/* Content to display */}
        <p className='_content'>{content}</p>
      </div>
    </Col>
  )
}

// Social icon component
const SocialIcon = (props) => {
  const { url, Icon, color } = props
  return (
    <a
      href={url}
      css={css`
        background-color: ${color};
        &:focus,
        &:hover {
          background-color: ${darken(0.08, color)};
        }
        ${styled.SocialIcon}
      `}
    >
      {/* Icon to display */}
      <Icon className='_icon' />
    </a>
  )
}

// Footer component
const Footer = (props) => (
  <SectionWrapper css={styled.Footer} {...props}>
    {/* List contact information blocks */}
    <Row className='_contact'>
      <SingleBlock
        Icon={icons.MapSharp}
        content={
          <a
            href='https://www.google.com/maps/d/viewer?mid=1bkfigJOEwttqDsqB80uP7rqiZiw&hl=en_US&ll=38.9698590812706%2C-74.863486&z=13'
            target='_blank'
          >
            Cape May, NJ, United States.
          </a>
        }
        cols={{ xs: '12', sm: '4' }}
      />
      <SingleBlock
        Icon={icons.CallSharp}
        content={<a href='tel:+12019209865'>+1 (201) 920-9865</a>}
        cols={{ xs: '12', sm: '4' }}
      />
      <SingleBlock
        Icon={icons.SendSharp}
        content={<a href='mailto:alex@example.com'>Alin@Alin.com</a>}
        cols={{ xs: '12', sm: '4' }}
      />
    </Row>
    {/* List social media icons and copyright notice */}
    <Row className='_row _mini'>
      <Col xs='12' lg='5' className='_socials'>
        <SocialIcon url='#0' Icon={icons.LogoTwitter} color='#1DA1F2' />
        <SocialIcon url='#0' Icon={icons.LogoInstagram} color='#C32361' />
        <SocialIcon url='#0' Icon={icons.LogoLinkedin} color='#0077B5' />
        <SocialIcon url='#0' Icon={icons.LogoYoutube} color='#c33a38' />
        <SocialIcon url='#0' Icon={icons.LogoGithub} color='#6e5494' />
        <SocialIcon url='#0' Icon={icons.LogoFacebook} color='#3B5998' />
      </Col>
      <Col as='p' xs='12' lg='7' className='_copyright-notice'>
        Copyright © 2024 Thomas, all rights reserved. Developed by{''}
        <a href='' target='_blank' style={{ marginLeft: '5px' }}>
          Thomas
        </a>
        .
      </Col>
    </Row>
  </SectionWrapper>
)

export default Footer
