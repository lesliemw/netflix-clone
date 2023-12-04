import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    width: 20%;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 00;
    text-align: center;
  `,
  medium: css`
    font-size: 1.6rem;
    width: 120px;
    padding: 1.2rem 1.6rem;
    width: 150px;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.8rem;
    width: 30%;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-light-black);
    background-color: var(--color-white);
    width: 120px;

    &:hover {
      background-color: var(--color-dark-white);
    }
  `,
  secondary: css`
    color: var(--color-pure-white);
    background: var(--color-dark-white-opacity);

    &:hover {
      background: var(--color-dark-white-moreOpacity);
    }
  `,
};

const StyledButton = styled.button`
  border-radius: 3px;
  border: none;
  height: 45px;
  margin: 2rem 2rem 0 0;
  display: flex;
  align-items: center;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]};
`;

StyledButton.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default StyledButton;
