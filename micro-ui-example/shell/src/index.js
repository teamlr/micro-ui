import './styles/main.scss';
import { Microfrontendly } from './../../../lib/microfrontendly.min.js';

(function shell() {
  Microfrontendly('assets/manifest.json').listen();
})();
