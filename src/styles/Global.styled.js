import styled from 'styled-components'

export const MainBody = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: auto;
`;

export const PaddingContainer = styled.div`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: ${({ $responsiveTop }) => $responsiveTop};
    padding-bottom: ${({ $responsiveBottom }) => $responsiveBottom};
    padding-left: ${({ $responsiveLeft }) => $responsiveLeft};
    padding-right: ${({ $responsiveRight }) => $responsiveRight};
  };
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ flexWrap }) => flexWrap};

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
  text-align: ${({ align }) => align};
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
  max-width: ${({ mWidth }) => mWidth };
`;

export const IconContainer = styled.a`
  font-size: ${({ size }) => size};
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
  padding: 1rem 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  margin-right: ${({ $mr }) => $mr};
  border-radius: 6px;
  cursor: pointer;
  transition: all .2s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.white};
  };

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    text-align: center;
    margin-left: 0;
    margin-bottom: 1rem;
  };
`;

export const Submit = styled(Button).attrs({ as: 'button' })`
`;

export const FadeImage = styled.img`
  height: 468px;
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  bottom: ${({ bottom }) => bottom};
  transform: ${({ transform }) => transform};
  z-index: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  };
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