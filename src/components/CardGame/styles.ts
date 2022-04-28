import styled from 'styled-components'

export const Container = styled.div`
  background-color: #17202d;
  border-radius: 30px;
  width: 100%;
  max-width: 1440px;

  a {
    text-decoration: none;
  }

  @media (min-width: 1024px) {
    display: flex;
    min-height: 245px;
  }
`

interface ImageProps {
  src: string
}

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 270px;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  border-radius: 30px 30px 0px 0px;

  @media (min-width: 1024px) {
    border-radius: 30px 0px 0px 30px;
    min-width: 599px;
    width: 599px;
    height: 245px;
  }
`
export const DetailsContent = styled.div`
  width: 100%;
`

export const Details = styled.div`
  padding: 20px;

  @media (min-width: 1024px) {
    width: 80%;
    display: flex;
    padding: 50px 30px 30px 50px;
  }
`

export const Title = styled.h4`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 95.6%;
  color: #ffffff;
  cursor: pointer;
`

export const Tags = styled.div`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 95.6%;
  color: #ffffff;
  opacity: 0.5;
  margin-top: 18px;
`

export const Bar = styled.div`
  width: 100%;
  max-width: 127px;
  height: 10px;
  background: #214b6b;
  border-radius: 20px;
  margin: 18px 0;
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1024px) {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`

export const Platform = styled.img`
  width: 40px;
  height: 40px;
`

export const Price = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 95.6%;
  color: #ffffff;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`
