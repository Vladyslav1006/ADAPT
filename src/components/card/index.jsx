import React from 'react'
import SectionWrapper from 'root/src/components/section-wrapper'

import 'swiper/css'
import 'swiper/css/pagination'

const Blog = (props) => {
  const { insights, ...otherProps } = props

  // Inline styles for cards
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  }

  return (
    <SectionWrapper
      headerData={{
        title: 'Results',
        description: 'You can check document analyze results here.',
      }}
      altBg={false}
      {...otherProps}
    >
      <div className='insights-container' style={{ padding: '20px' }}>
        {insights &&
          insights.map((item, index) => (
            <div key={index} style={cardStyle}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
      </div>
    </SectionWrapper>
  )
}

export default Blog
