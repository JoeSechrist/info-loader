import template from './home.html';
import controller from './home.controller';
import './home.scss';
import '../../theme.css';

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default homeComponent;
