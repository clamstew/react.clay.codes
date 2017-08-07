import React, { PureComponent } from 'react';

import './Spinner.css';
import spinnerImgSvg from './rotating-squares.svg';

export class Spinner extends PureComponent {
  render = () => {
    return (
      <div className="SpinnerWrap">
        <img src={spinnerImgSvg} className="Spinner" alt="logo" />
      </div>
    );
  };
}