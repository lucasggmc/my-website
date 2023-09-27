import styled from 'styled-components';

export const HamburgerMenuContainer = styled.div`
  position: relative;
  margin-top: 0.5rem;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;

  @media (min-width: 700px) {
    display: none;
  }

  @media (max-width: 699px) {
    display: block;
  }

  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;

    /* 
    * Transform all the slices of hamburger
    * into a crossmark.
    */
    &:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(1px, -3px);
      background: black;
    }

    /*
 * But let's hide the middle one.
 */
    &:checked ~ span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    /*
 *the last one should go the other direction
 */
    &:checked ~ span:nth-last-child(2) {
      transform: rotate(-45deg) translate(0, 3px);
    }

    /*
 * And let's slide it in from the left
 */
    &:checked ~ ul {
      transform: none;
    }
  }

  span:first-of-type {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: black;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  /*
 * Make this absolute positioned
 * at the top left of the screen
 */
  ul {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -65px;
    padding: 50px;
    padding-top: 125px;

    background: var(--grey);
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    li {
      padding: 10px 0;
      font-weight: 700;
    }
  }
`;

export const HighlightItem = styled.li`
  a {
    color: var(--green);
  }
`;
