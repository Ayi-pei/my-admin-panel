import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

/**
 * @param {Function} onPerfEntry - Function to handle performance entries.
 */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
