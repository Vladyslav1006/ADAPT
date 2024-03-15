import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import 'swiper/css'
import 'swiper/css/pagination'
import { useInsights } from 'root/src/config/InsightsContext'
import style from './style'

// Styled components
const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`

// Add keyframes for the loading spinner animation
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

// Styled component for the loading spinner
const LoadingSpinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #007bff;
  animation: ${spin} 1s linear infinite;

  ${(props) =>
    props.small &&
    css`
      width: 20px;
      height: 20px;
      border-width: 2px;
    `}
`

const Message = styled.p`
  color: ${(props) => (props.onError ? '#ff0000' : '#008000')};
  font-size: 16px;
`

// Your SingleTestimonial component
const Testimonials = (props) => {
  const { setInsights } = useInsights()

  const { data, ...otherProps } = props

  const BACKEND_BASE_URL = 'https://8d65-15-204-240-89.ngrok-free.app' // Adjust as needed
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const [isLoading, setIsLoading] = useState(false) // State to track loading status
  const [uploadSuccess, setUploadSuccess] = useState(false) // New state to track upload success

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
    setUploadSuccess(false) // Reset upload success state when a new file is selected
  }

  const handleUpload = async () => {
    if (!file) {
      setError(true)
      setMessage('Please select a file first!')
      return
    }

    setIsLoading(true) // Start loading
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch(`${BACKEND_BASE_URL}/upload`, {
        method: 'POST',
        body: formData,
      })
      // .then((response) => response.json())
      // .then((data) => {
      //   setInsights(data.insights)
      //   console.log(data.insights)
      //   // Now you have your insights, you can set them to state and render in your component
      // })
      // .catch((error) => console.error('Error:', error))

      const data = await response.json()
      if (response.ok && data.success) {
        setInsights(data.insights)

        console.log(data.insights)

        setError(false)
        setMessage('File uploaded successfully')
        setUploadSuccess(true)
      } else {
        setError(true)
        setMessage('File upload failed')
      }
    } catch (error) {
      setError(true)
      setMessage('Upload error')
      console.error('Upload error:', error)
    } finally {
      setIsLoading(false) // End loading
    }
  }

  return (
    <SectionWrapper
      css={style.Testimonials}
      altBg={true}
      headerData={{
        title: 'Upload Files',
        description: 'You can upload any document files to server.',
      }}
      {...otherProps}
    >
      <Col xs='100' lg='13' className=' _image'>
        <UploadContainer>
          <StyledInput type='file' onChange={handleFileChange} />
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <StyledButton onClick={handleUpload}>Upload File</StyledButton>
          )}

          {message && <Message error={error}>{message}</Message>}
          {/* {uploadSuccess && !isLoading && (
            <StyledButton onClick={console.log('success')}>
              S T A R T
            </StyledButton>
          )} */}
        </UploadContainer>
      </Col>
    </SectionWrapper>
  )
}

export default Testimonials
