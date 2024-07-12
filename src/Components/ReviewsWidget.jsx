import React, { useEffect } from 'react'

export const ReviewsWidget = () => {
useEffect( () => {
    const script = document.createElement('script')
    script.src = "https://static.elfsight.com/platform/platform.js"
    script.defer = true;

    document.body.appendChild(script);

    return () => {
        document.body.removeChild(script);
    }
}, []);

  return (
    <div className="elfsight-app-17850326-1ef1-4e3c-863e-1c8e5a43b18c" data-elfsight-app-lazy></div>
  )
}
