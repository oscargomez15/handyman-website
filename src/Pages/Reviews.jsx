import React from 'react'
import { ReviewsWidget } from '../Components/ReviewsWidget'
export const Reviews = () => {
    const widgetSource = `<script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
<div class="elfsight-app-17850326-1ef1-4e3c-863e-1c8e5a43b18c" data-elfsight-app-lazy></div>`
  return (
    <section className='page review-page'>
        <div className='sub-heading'>
            <h1>What our <span>customers</span> say</h1>
            <p>Don't take our words, take thems.</p>
        </div>
        <div className="widget-container">
            <ReviewsWidget/>
        </div>
    </section>
  )
}
