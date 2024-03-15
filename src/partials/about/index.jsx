/*
This is the About section
*/

import { Row, Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import Button from 'root/src/components/button'
import aboutImg from 'root/public/partials/about/picture.jpg'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import styled from './style'
// import styled, { keyframes } from 'styled-components'

import Hire from 'root/src/partials/hire'

const About = (props) => (
  <SectionWrapper
    css={styled.About}
    headerData={{
      title: 'About',
      productname: 'ADAPT',
      description: 'Advanced Document Analysis & Processing Tool',
    }}
    {...props}
  >
    <div className='row align-items-center'>
      {/* Image part - Displays profile image */}
      <Col xs='12' lg='5' className=' _image'>
        <Image
          className='img-thumbnail'
          sizes='
            (max-width: 992px) 250px,
            (min-width: 992px) 41.66vw
          '
          alt='About Picture'
          src={aboutImg}
        />
      </Col>

      {/* Text part - Displays name, description, contact details */}
      <Col xs='12' lg='7'>
        {/* Information part */}
        <h2 className='_subtitle'>Introduction</h2>

        <h2 className='_title'>
          ADAPT (Advanced Document Analysis & Processing Tool)
        </h2>

        <div className='_description'>
          <p>
            In today's data-driven landscape, the challenge of managing and
            interpreting vast amounts of unstructured information is more
            daunting than ever. Enter ADAPT, a revolutionary tool designed to
            bridge the gap between data complexity and clarity, offering a
            seamless pathway to transform unstructured data into actionable
            insights. By leveraging advanced algorithms and machine learning
            techniques, ADAPT excels at analyzing, processing, and extracting
            valuable information from a myriad of document formats, including
            PDFs, text files, and images. It's not just about data extraction;
            ADAPT offers comprehensive analysis capabilities, from sentiment
            analysis to trend identification, making it an indispensable tool
            across various industries. Whether you're in finance, healthcare,
            education, or any sector in need of deep document analysis, ADAPT
            stands as a beacon of efficiency, turning the tedious task of data
            processing into a streamlined, insightful experience. With ADAPT,
            users unlock the potential to make informed decisions quickly,
            harnessing the true power of their data in an ever-evolving digital
            world. This adaptability ensures that ADAPT is not only a tool for
            today but a foundation for the future, continuously evolving to meet
            the changing needs of its users.
          </p>
        </div>

        <address className='_address'>
          <Row>
            <Col className='_info' xs='10' md='15'>
              <span>Service:</span>
              <p>Transformative Document Analysis Solutions</p>
            </Col>
          </Row>
        </address>
      </Col>
    </div>
  </SectionWrapper>
)

export default About
