import Progress from '../packages/progress';
import Span from '../packages/span';
import Status from '../packages/status';
import ToggleDiv from '../packages/toggle-div';

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
