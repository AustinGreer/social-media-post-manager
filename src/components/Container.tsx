import React from 'react'

function Container({ children, additionalClassNames = ''}) {
  return (
    <div className={`container ${additionalClassNames}`.trim()}>
      {children}
    </div>
  )
}

export default Container