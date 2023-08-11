import styled from 'styled-components';

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
    padding-top: ${({ responsiveTop }) => responsiveTop};
    padding-bottom: ${({ responsiveBottom }) => responsiveBottom};
    padding-left: ${({ responsiveLeft }) => responsiveLeft};
    padding-right: ${({ responsiveRight }) => responsiveRight};
  };
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap};

  & > div {
    flex: ${({ fullWidthChild }) => fullWidthChild && 1};
  };

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: ${({ responsiveFlex }) => responsiveFlex ? 'flex' : 'block'};

    flex-direction: ${({ responsiveDirection }) => responsiveDirection};
    gap: ${({ responsiveGap }) => responsiveGap};
  };
`;

export const Heading = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => {
    switch(size) {
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
      switch(size) {
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
`;

export const IconContainer = styled.a`
  font-size: ${({ size }) => size};
  cursor: pointer;
  color: ${({ color, theme }) => {
    switch(color) {
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
  display: inline-block;
  width: max-content;
  padding: 1rem 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid ${({ theme }) => theme.colors.gray};
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