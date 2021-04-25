import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src="" type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>unreal Destinations</HeroH1>
                    <HeroP>out of this world</HeroP>
                    <Button>Travel Now</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.dev`
background: #0c0c0c;
display: flex;
justify-content: center;

`

const HeroBg = styled.div``

const VideoBg = styled.video``

const HeroContent = styled.div``
const HeroItems = styled.div``
const HeroH1 = styled.div``
const HeroP = styled.div``