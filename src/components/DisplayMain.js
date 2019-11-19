import React, { useState } from 'react'

const DisplayMain = props => {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.floor(Math.random() * 100))

  const updateHue = eventData => {
    setHue(eventData.target.value)
  }

  const updateSaturation = eventData => {
    setSaturation(eventData.target.value)
  }

  const updateLightness = eventData => {
    setLightness(eventData.target.value)
  }
  const randomInteger = max => {
    return Math.floor(Math.random() * Math.floor(max))
  }
  const randomColor = () => {
    const intHue = randomInteger(360)
    const intSaturation = randomInteger(100)
    const intLightness = randomInteger(100)
    console.log('Return number', intHue, intSaturation, intLightness)
    setHue(intHue)
    setSaturation(intSaturation)
    setLightness(intLightness)
  }

  return (
    <main>
      <section className="main-first-section">
        <h2>Display Color</h2>
        <p className="text-in-color">
          Color: hsl({hue}, {saturation}%, {lightness}%)
        </p>
        <section
          className="display-color-section"
          style={{
            backgroundColor:
              'hsl(' + hue + ',' + saturation + '%,' + lightness + '%)',
          }}
        ></section>
        <button onClick={randomColor}>Random Color</button>
      </section>
      <section className="main-second-section">
        <section className="sliders-section">
          <p>Hue</p>
          <input
            type="range"
            className="hue-input"
            min="0"
            max="360"
            onChange={updateHue}
          ></input>
          <p>Saturation</p>
          <input
            type="range"
            className="saturation-input"
            min="0"
            max="100"
            onChange={updateSaturation}
          ></input>
          <p>Lightness</p>
          <input
            type="range"
            className="lightness-input"
            min="0"
            max="100"
            onChange={updateLightness}
          ></input>
          <p>Alpha</p>
          <input type="range" className="alpha-input" min="0" max="100"></input>
        </section>
      </section>
    </main>
  )
}

export default DisplayMain
