import React, { forwardRef } from 'react';

import styles from './button.module.css';

const Button = forwardRef((props, ref) => {
  return (
      <button className={styles.btn} {...props} ref={ref}>
        { props.children }
      </button>
  );
})

export default Button;
