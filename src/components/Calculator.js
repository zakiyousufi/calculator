import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const output = { total: '0', next: '', operation: '' };
  const [obj, setObj] = useState(output);

  function operationsHandler(name) {
    const result = calculate(obj, name);
    setObj({ ...obj, ...result });
  }
}

export default Calculator;
