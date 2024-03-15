import React from 'react'
import { useInsights } from 'root/src/config/InsightsContext' // Adjust path as necessary
import SectionWrapper from 'root/src/components/section-wrapper'
// Ensure Tailwind CSS is properly configured in your project

const Blog = (props) => {
  const { insights } = useInsights()
  const { data, ...otherProps } = props

  // Key for the specific insight you're displaying
  const insightKeys = [
    'What are the top roles this document is best suited for?',
    'What are the top 5 strong points of the document?',
    'What are the top 5 weaknesses of the document?',
    'What are the top industry roles for the document?',
  ]
  // const insightText = insights[insightKey]

  const renderInsightPoints = (text) => {
    const safeText = text || ''
    const points = safeText.split(/\d\. /).filter(Boolean)

    // Return an array of JSX elements for each point, skipping the first empty split
    return points.map((point, index) => (
      <p key={index} className='mb-4'>
        {index === 0 ? (
          // When index is 0, render only the point without the number
          <>{point}</>
        ) : (
          // Otherwise, prepend the point with its number
          <>
            <span className='font-bold'>{index}. </span>
            {point}
          </>
        )}
      </p>
    ))
  }

  return (
    <SectionWrapper
      headerData={{
        title: 'Insightful Results',
        description: 'Explore the deep insights generated from your documents.',
      }}
      altBg={true}
      {...otherProps}
    >
      <div className='container mx-auto px-4 py-8'>
        {insightKeys.map((key, keyIndex) => (
          <div
            key={keyIndex}
            className='mb-10'
            style={{ marginBottom: '80px' }}
          >
            <div className='overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white'>
              <div className='p-4' style={{ backgroundColor: '#bd0606' }}>
                <h3 className='text-white text-2xl mb-2'>{key}</h3>
              </div>
              <div className='p-4'>
                {/* Render insight points for each key */}
                {insights[key] ? (
                  renderInsightPoints(insights[key])
                ) : (
                  <p className='text-gray-700 text-base'>
                    No insights available for this section.
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Blog
