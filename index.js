import Progress from './progress';
import Span from './span';
import Status from './status';
import ToggleDiv from './toggle-div';

const components = [
  Progress,
  Span,
  Status,
  ToggleDiv,
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
  Progress,
  Span,
  Status,
  ToggleDiv,
};
