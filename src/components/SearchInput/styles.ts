import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 2rem;
`

export const Input = styled.input`
  width: 100%;

  background-color: #1a3a53;
  border: 0;
  padding: 10px 23px;
  border-radius: 30px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 95.6%;
  color: #ffffff;
  opacity: 0.5;

  @media (min-width: 450px) {
    max-width: 273px;
  }
`
