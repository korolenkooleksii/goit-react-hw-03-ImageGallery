import styled from '@emotion/styled';

export const ListContacts = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ItemContacts = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  font-size: 20px;
  color: ${p => p.theme.colors.dark};
`;

export const ButtonDelete = styled.button`
  /* min-width: 60px;
  padding: 2px;
  margin-left: auto;
  border: 1px solid ${p => p.theme.colors.dark};
  border-radius: 4px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  color: ${p => p.theme.colors.dark};
  box-shadow: ${p => p.theme.colors.shadow};
  background-color: ${p => p.theme.colors.accent};

  transition: box-shadow 250ms ease-in-out, color 250ms ease-in-out,
    border 250ms ease-in-out;

  :hover {
    border: 1px solid ${p => p.theme.colors.white};
    box-shadow: ${p => p.theme.colors.shadowAccent};
    color: ${p => p.theme.colors.white}; */

  width: auto;
  height: auto;
  margin-left: auto;
  cursor: pointer;
  padding: 0;
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: transparent;

  :hover {
    border: 1px solid #3f72e1;
  }

  :hover svg {
    color: #3f72e1;
  }

  svg {
    display: block;
    width: 24px;
    height: 24px;
    color: ${p => p.theme.colors.dark};
  }
`;
