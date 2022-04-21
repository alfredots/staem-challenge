import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 74px;
`

export const Text = styled.h4`
  min-width: 252px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 95.6%;
  color: #ffffff;
  padding-left: 9px;
  padding-right: 19px;
`

export const BarLeft = styled.div`
  width: 50px;
  height: 10px;
  background: #214b6b;
  border-radius: 0px 20px 20px 0px;
`

export const BarRight = styled.div`
  width: 100%;
  max-width: 127px;
  height: 10px;
  background: #214b6b;
  border-radius: 20px 0px 0px 20px;

  @media (min-width: 1024px) {
    border-radius: 20px;
  }
`
