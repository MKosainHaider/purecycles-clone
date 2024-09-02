import React from "react"
import styled from "styled-components"
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import SingleSpeedImage from "../../assets/SingleSpeed-Assets/SingleSpeedimg1.jpeg"
import Coaster from "../../components/Products/Coaster"
import PureFixMicroOriginalSeries from "../../components/Products/PureFixMicroOriginalSeries"
import OriginalBike from "../../components/Products/OriginalBike"

const SingleSpeedPage = () => {
  return (
    <div>
      <NavBar bgColor="transparent" textColor="white" />
      <HeroSection>
        <HeroContent>
          <h1 className="text-5xl font-bold text-white">
            FIXED GEAR AND SINGLE SPEED BIKES
          </h1>
        </HeroContent>
      </HeroSection>

      <div className="py-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center px-4 py-2 bg-white border">
            <i className="mr-2 fas fa-filter"></i>Filter
          </button>
          <select className="px-4 py-2 bg-white border">
            <option>Best selling</option>
            <option>Price, low to high</option>
            <option>Price, high to low</option>
            <option>Newest arrivals</option>
          </select>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Coaster />
          <PureFixMicroOriginalSeries />
          <OriginalBike />
        </div>
      </div>

      <Footer />
    </div>
  )
}

const HeroSection = styled.div`
  background: url(${SingleSpeedImage}) center center/cover no-repeat;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -110px;
`

const HeroContent = styled.div`
  text-align: center;
`

export default SingleSpeedPage
