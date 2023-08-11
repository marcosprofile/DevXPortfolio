import styled from 'styled-components';

export const ContactForm = styled.form`
  width: 40%;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 90%;
    margin: auto;
  };
`;

export const FormLabel = styled.label`
  color: ${({ theme }) => theme.colors.para_text_color};
`;

export const FormInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid ${({ theme }) => theme.colors.para_text_color};
  color: ${({ theme }) => theme.colors.para_text_color};
  border-radius: 6px;
  padding: 1rem;
  margin-top: 10px;
  min-height: 51px;
  resize: vertical;

  &::placeholder {
    color: ${({ theme }) => theme.colors.para_text_color};
  }
`;