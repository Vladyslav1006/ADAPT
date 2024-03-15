import React, { useState } from 'react'
import SectionWrapper from 'root/src/components/section-wrapper'
import hireImg from 'root/public/partials/hire/background.jpg'
import { Col, Row } from 'react-bootstrap'
import Button from 'root/src/components/button'
import { css } from '@emotion/react'
import styled from './style'
import axios from 'axios'

// Replace 'initialPreviewImgUrl' with the actual path to your initial preview image
const initialPreviewImgUrl = 'partials/hire/doc.jpg'

const MansoryNav = ({ setShowNav }) => {
  const [uploadedDoc, setUploadedDoc] = useState(null)
  // Initialize 'docPreview' with the URL of your initial preview image
  const [docPreview, setDocPreview] = useState(initialPreviewImgUrl)
  const [uploadedFileName, setUploadedFileName] = useState('')

  // Handle document upload and preview
  // const handleDocUpload = (event) => {
  //   const file = event.target.files[0]
  //   if (file) {
  //     setUploadedDoc(file)
  //     setUploadedFileName(file.name)
  //     const reader = new FileReader()
  //     // reader.onloadend = () => {
  //     //   setDocPreview(reader.result)
  //     // }
  //     reader.readAsDataURL(file)
  //   }
  // }

  const handleDocUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedDoc(file)
      setUploadedFileName(file.name) // This is just for UI/UX, does not affect functionality
    }
  }

  // const handleStartAnalysis = async () => {
  //   if (!uploadedDoc) {
  //     console.log('No document uploaded.')
  //     return
  //   }

  //   const formData = new FormData()
  //   formData.append('document', uploadedDoc)

  //   try {
  //     // Update the URL to point to your Next.js API route
  //     const response = await axios.post('/api/analyze-document', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     })

  //     // Log the analysis results
  //     console.log('Analysis Results:', response.data)
  //   } catch (error) {
  //     console.error('Error during document analysis:', error)
  //   }
  // }

  const handleStartAnalysis = async () => {
    if (!uploadedDoc) {
      alert('No document uploaded.')
      return
    }

    const formData = new FormData()
    formData.append('document', uploadedDoc)

    try {
      const response = await axios.post('/api/analyze-document', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      // Consider updating the UI with these results
      console.log('Analysis Results:', response.data)
      alert('Analysis complete. Check the console for results.')
    } catch (error) {
      console.error('Error during document analysis:', error)
      alert('Error during document analysis. Check the console for details.')
    }
  }

  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.9);
        z-index: 1050;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
      `}
    >
      <img
        src={docPreview}
        alt='Document preview'
        css={css`
          max-width: 80%;
          max-height: 80vh;
          margin-bottom: 20px;
        `}
      />
      <input
        type='file'
        onChange={handleDocUpload}
        css={css`
          margin-bottom: 20px;
        `}
        accept='.pdf,.doc,.docx'
      />
      <Button
        onClick={() => handleStartAnalysis()}
        css={css`
          background-color: #28a745;
          &:hover {
            background-color: #218838;
          }
          margin-bottom: 20px;
        `}
      >
        Start
      </Button>
      <Button
        onClick={() => setShowNav(false)}
        css={css`
          background-color: #dc3545;
          &:hover {
            background-color: #c82333;
          }
        `}
      >
        Close
      </Button>
    </div>
  )
}

const Hire = (props) => {
  const [showNav, setShowNav] = useState(false)

  return (
    <SectionWrapper
      css={styled.Hire}
      backgroundProps={{
        alt: 'Hire background',
        src: hireImg,
        brightness: '17%',
      }}
      {...props}
    >
      <Row className='_row'>
        <Col className='_wrapper' xs='12' md='8'>
          <h1 className='_title'>Let&apos;s get Started!</h1>
          <p className='_description'>
            Unlock actionable insights from complex documents with a click—start
            your journey now.
          </p>
        </Col>
        <Col className='_wrapper' xs='12' md='4'>
          <div className='_button-wrapper'>
            <Button href='#testimonials' className='_button'>
              Get Started
            </Button>
          </div>
        </Col>
      </Row>
      {showNav && <MansoryNav setShowNav={setShowNav} />}
    </SectionWrapper>
  )
}

export default Hire
