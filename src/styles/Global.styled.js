import styled from 'styled-components'

export const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  transform-origin: 0%;
  z-index: 10;
`;

export const MainBody = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding-top: 6rem;
  overflow-x: hidden;
`;

export const Container = styled.div`
  width: calc(100% - 1rem);
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const PaddingContainer = styled.div`
  padding-top: ${( props ) => props.$top};
  padding-bottom: ${( props ) => props.$bottom};
  padding-left: ${({ $responsiveLeft }) => $responsiveLeft};
  padding-right: ${({ $responsiveRight }) => $responsiveRight};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ $responsiveTop }) => $responsiveTop};
    padding-bottom: ${({ $responsiveBottom }) => $responsiveBottom};
    padding-left: ${({ $responsiveLeft }) => $responsiveLeft};
    padding-right: ${({ $responsiveRight }) => $responsiveRight};
  };
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) => $direction };
  justify-content: ${( props ) => props.$justify };
  align-items: ${( props ) => props.$align };
  gap: ${( props ) => props.$gap };
  flex-wrap: ${( props ) => props.$flexWrap };

  & > div {
    flex: ${({ $fullWidthChild }) => $fullWidthChild && 1};
  };

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ $responsiveFlex }) => $responsiveFlex ? 'flex' : 'block'};
    text-align: ${({ $alignCenter }) => $alignCenter ? 'center' : ''};
    flex-direction: ${({ $responsiveDirection }) => $responsiveDirection};
    gap: ${({ $responsiveGap }) => $responsiveGap};
  };
`;

export const Heading = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.white};
  text-align: ${( props ) => props.$align};
  font-size: ${({ size }) => {
    switch (size) {
      case 'h1':
        return '4.5rem';

      case 'h2':
        return '3rem';

      case 'h3':
        return '2rem';

      case 'h4':
        return '1.2rem';

      default:
        return;
    };
  }};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ size }) => {
    switch (size) {
      case 'h1':
        return '4.5rem';

      case 'h2':
        return '2rem';

      case 'h3':
        return '1.5rem';

      case 'h4':
        return '1rem';

      default:
        return;
    };
  }};
  };
`;

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ParaText = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.para_text_color};
  max-width: ${( props ) => props.$mWidth };
  line-height: 24px;
  text-align: ${({ $center }) => $center ? "center" : ""};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile }) {
    font-size: .875rem;
    line-height: 24px;
  }
`;

export const IconContainer = styled.a`
  font-size: ${({ size }) => size};
  max-height: 24px;
  cursor: pointer;
  color: ${({ color, theme }) => {
    switch (color) {
      case 'white':
        return theme.colors.white;

      case 'blue':
        return theme.colors.secondary;

      default:
        return;
    };
  }};
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  width: max-content;
  padding: .75rem 1.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: #FFFFFF20;
  margin-right: ${({ $mr }) => $mr};
  border-radius: .5rem;
  cursor: pointer;
  transition: all .2s linear;

  &.disabled {
    opacity: .4;
    cursor: not-allowed;
  }

  &:not(.disabled):hover {
    color: ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.white};
  };

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    text-align: center;
    margin-left: 0;
    margin-bottom: 1rem;
    font-size: .875rem;
  };
`;

export const Submit = styled(Button).attrs({ as: 'button' })`
`;

export const FadeImage = styled.img`
  height: 468px;
  position: absolute;
  top: ${( props ) => props.$top};
  right: ${( props ) => props.$right};
  left: ${( props ) => props.$left};
  bottom: ${( props ) => props.$bottom};
  transform: ${( props ) => props.$transform};
  z-index: 0;
`;

export const Chip = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
  width: max-content;
  color: #E0E0E0;
  padding: 1.25rem 1rem;
  border-radius: 5rem;
  background: linear-gradient(160deg, rgba(217, 217, 217, 0.04) 13.17%, rgba(255, 255, 255, 0.01) 97.91%);
  font-size: .875rem;
  font-weight: 600;
  box-shadow: 0px 4px 20px 0px rgba(47, 24, 108, 0.10), 0px 4px 20px -1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.10);
  height: 40px;
  cursor: default;
`

export const Image = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: cover;
`

export const FixedContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 2.5rem;
`

export const BackToTop = styled.a`
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .5rem .75rem .5rem .5rem;
  border-radius: 5rem;
  background-color: #131C31;
  text-decoration: none;
  font-size: .875rem;
  font-weight: 600;
  color: #DDD;
  box-shadow: 0 0 4px 1px #7EADFC60;
  transition: all .3s ease-in-out;

  svg { font-size: 1.25rem }

  &:hover {
    transform: translateY(-8px);
  }
`