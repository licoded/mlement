import Progress from './progress';
import Span from './span';
import ToggleDiv from './toggle-div';

const components = [
  Progress,
  Span,
  ToggleDiv,
];

const install = (Vue) => {
  components.forEach((component) => component.install(Vue));
};

export default {
  install,
  Progress,
  Span,
  ToggleDiv,
};
