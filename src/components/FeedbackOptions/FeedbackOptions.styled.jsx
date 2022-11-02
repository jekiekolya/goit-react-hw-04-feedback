import styled from '@emotion/styled';

export const Button = styled.button`
  background-color: ${p => p.theme.colors.mainBg};
  font-size: ${p => p.theme.fontsSizes.m}px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 3px;
  cursor: pointer;

  &&.click {
    background-color: ${p => p.theme.colors.accent};
  }
`;
