import { Switch } from '@/components/ui/switch'
import React from 'react'

const ModeSelector = () => {

  // when we select timer module, a selection section will apper below it, when questoin mode toolbar, selection box will appear 
  return (

    <div className='typing-box-container mode-selector-container'>
      {/* Mode selector */}
      <div className="mode-left-section">
        <div className="timer-question-mode-container">
          <div className="timer-mode-button mode-button">Timer Mode</div>
          <div className="question-mode-button mode-button">Question Mode</div>

        </div>
<div className="just-answer-or-question-selector-container">
{/* if we select timer, then the width will contain box of whether time, or question number if select question  */}
<p className='label'>Type Questions + Answers  </p>
<Switch id="typing-mode-switch" />
</div>
      </div>
      <div className="mode-right-section"></div>
    </div>
  )
}

export default ModeSelector
