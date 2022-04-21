import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  width: 80%;
  background-color: #1a3a53;
  background-image: url('img/arrow-down.svg');
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 14px;
  border: 0;
  padding: 10px 23px;
  border-radius: 30px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 95.6%;
  color: #ffffff;

  @media (min-width: 450px) {
    max-width: 273px;
  }
`

export const Label = styled.span`
  min-width: 70px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 95.6%;
`
