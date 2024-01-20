import './index.css';
import Start from './Start';
import 'animate.css';
import DOMPurify from 'dompurify';

/** @type {HTMLDivElement} */
const DOM = document.getElementById('app');

if (DOM) {
    const userContent = "<img src=x onerror=alert('XSS')>";

    const sanitizedContent = DOMPurify.sanitize(userContent);

    Start(DOM, sanitizedContent);
}

// XSS Purifier 
