
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';

import routes from './Routes';
import './styles/admin_template.css';
import './styles/styles.css';
import './styles/date_picker.scss';
import './styles/common.scss';


render(
  routes,
  document.getElementById('root')
);

registerServiceWorker();
