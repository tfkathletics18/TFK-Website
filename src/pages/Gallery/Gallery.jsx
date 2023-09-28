import React from 'react'
import "./Gallery.scss"

function Gallery() {
  return (
    <main className="gallery">
      <h1 className="head-text gallery__title">Gallery</h1>
      <iframe src="https://cdn.lightwidget.com/widgets/01dbe653722250edba5ca91c5c37ebaf.html" scrolling="no" allowtransparency="true" className="lightwidget-widget" style={{width: "100%", border: "0", overflow: "hidden"}}></iframe> {/* Instagram feed via LightWidget */}
    </main>
  )
}

export default Gallery