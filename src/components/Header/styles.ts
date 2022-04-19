import styled from 'styled-components'

export const Container = styled.div`
  padding: 46px 27px;
  display: flex;
  justify-content: space-between;
`
export const Title = styled.h1`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 95.6%;
  color: ${({ theme }) => theme.colors.text};
`
export const ButtonInstall = styled.button`
  width: 153px;
  height: 40px;
  padding: 12px 29px;
  background-color: #214b6b;
  border: 0;
  border-radius: 30px;
  cursor: pointer;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 95.6%;
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  gap: 16px;
  transition: 0.2s;

  &:hover {
    background-color: #1a3c56;
  }
`
