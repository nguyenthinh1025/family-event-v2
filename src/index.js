import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import Pagination from "rc-pagination";
import 'react-toastify/dist/ReactToastify.css';
/* The following line can be included in your src/index.js or App.js file */
import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
// import { enableRipple } from '@syncfusion/ej2-base';
// import { setCulture } from '@syncfusion/ej2-base';
// import { setLicenseKey } from '@syncfusion/ej2-base';
// setLicenseKey('Mgo+DSMBaFt+QHFqVkNrWU5FfkBAXWFKblF8QWVTfV9gBShNYlxTR3ZbQ1VjSn5Xc0NkWnda;Mgo+DSMBPh8sVXJ1S0d+X1RPc0BDVXxLflF1VWFTe1h6dlRWESFaRnZdQV1nSHZTdUVnXHlZdn1R;ORg4AjUWIQA/Gnt2VFhhQlJBfVpdXGtWfFN0RnNbdVp2fldHcC0sT3RfQF5jTX9bdkZjXXpYeHRTQg==;MTc1NzkxNUAzMjMxMmUzMTJlMzMzNWZxVStJZVcvMnFQelpLUnFPSFFOc1NrQjFqL2FDRzhWZ2lJajNnaVJEams9;MTc1NzkxNkAzMjMxMmUzMTJlMzMzNU9lZllhVzJORVU1Sm5wdnBJdTdCNlQ2cVpPWDVLWi9Ta0ttRis4aVpmUE09;NRAiBiAaIQQuGjN/V0d+XU9Hc1RHQmJBYVF2R2BJfVR0cl9EYUwgOX1dQl9gSXpSfkVgWXtbdn1QRWQ=;MTc1NzkxOEAzMjMxMmUzMTJlMzMzNVFCVHRmR2l6ZFo0S1hKUUsvMlZOQzQ0VzhnQXppenJrTzc5L3g2SDI2bTg9;MTc1NzkxOUAzMjMxMmUzMTJlMzMzNUYvSzE2MzRQbFZVOFFMcDQvNUxpc1ROcnU1cTRVQTEvVzZvbHZJNTRmQTA9;Mgo+DSMBMAY9C3t2VFhhQlJBfVpdXGtWfFN0RnNbdVp2fldHcC0sT3RfQF5jTX9bdkZjXXpZcHVTQg==;MTc1NzkyMUAzMjMxMmUzMTJlMzMzNURZa01vMHpPVytNMlN6aENaWXBCck81ZmRxWk9PQ3ZkK0t5bk83d0FEU0U9;MTc1NzkyMkAzMjMxMmUzMTJlMzMzNW1oQmkzelpxQUsxN0dkSUJMbnNXRVJUL012ckk1aWJNSWVGNkVGMGpTb3M9;MTc1NzkyM0AzMjMxMmUzMTJlMzMzNVFCVHRmR2l6ZFo0S1hKUUsvMlZOQzQ0VzhnQXppenJrTzc5L3g2SDI2bTg9');
// enableRipple(true);


// setCulture('en-US');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
