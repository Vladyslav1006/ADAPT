/*
Styles for the component
*/

import { css } from '@emotion/react'
import theme from 'root/src/styles/theme'
import bs from 'root/src/styles/bootstrap'

export default {
  Services: css`
    display: block;
    padding-bottom: calc(85px - 30px);
    @media (max-width: ${bs['breakpoint-max-sm']}) {
      padding-bottom: calc(65px - 30px);
    }
  `,
  Service: css`
    text-align: center;
    padding: 38px 24px;
    margin-bottom: 30px;
    background-color: #fff;
    border: 1px solid rgba(214, 214, 214, 0.8);
    ._icon {
      width: 50px;
      fill: ${theme().primary};
      margin-bottom: 22px;
      display: inline-block;
    }
    ._title {
      font-size: 18px;
      font-weight: 700;
      letter-spacing: -0.5px;
      margin-bottom: 12px;
      color: #333;
    }
    ._description {
      margin-bottom: 0;
    }
  `,
  FileUpload: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 80%;
    max-width: 500px;
    margin: auto; // Center the box

    button,
    input[type='file'] {
      margin: 10px 0; // Spacing between buttons and input
    }
  `,
  PreviewImage: css`
    width: 100%; // Make the image responsive
    max-width: 200px; // Limit the size of the image
    height: auto;
    margin-top: 20px; // Space above the image
  `,
  ButtonGroup: css`
    display: flex;
    flex-direction: column;
    width: 100%; // Ensure buttons and input are full width of the container

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-around; // Space buttons nicely on larger screens
    }

    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }

      &:first-of-type {
        margin-bottom: 10px; // Add margin between buttons when in column layout

        @media (min-width: 768px) {
          margin-bottom: 0; // Remove margin in row layout
        }
      }
    }
  `,
}
