import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;

  img {
    width: 100%;
  }

  .splide {
    padding-bottom: 5rem;
  }

  .splide__pagination {
    gap: 17px;
  }

  .splide__pagination__page {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  .splide__pagination__page.is-active {
    background: #fff;
    opacity: 1;
    z-index: 1;
  }

  @media (min-width: 1024px) {
    .splide__pagination {
      gap: 23px;
    }

    .splide {
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 6rem;
    }

    .splide__slide {
      img {
        display: block;
        width: 100%;
        border-radius: 8px;
        transition: transform 400ms;
        transform: scale(0.5);
        transform-origin: center center;
      }
    }
    // Active Slide
    .splide__slide.is-active {
      img {
        transform: scale(1);
      }
    }

    .splide__slide.is-prev,
    .splide__slide.is-next {
      filter: brightness(0.4);
    }
  }
`
