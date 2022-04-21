import styled from 'styled-components'
export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const CardsContainer = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`
