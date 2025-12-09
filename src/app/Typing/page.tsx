import React, { useState } from 'react'
import ModeSelector from './typing-components/ModeSelector'
import "./typing.css"
import QuestionBox from './typing-components/QuestionBox'

const TypingTestPage = () => {

  
  return (<div>
<div className="typing-container">

<ModeSelector />
<QuestionBox />
</div>
    </div>
  )
}

export default TypingTestPage