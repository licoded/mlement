import ToggleDiv from './src/toggle-div';

/* istanbul ignore next */
ToggleDiv.install = (Vue) => {
  Vue.component(ToggleDiv.name, ToggleDiv);
};

export default ToggleDiv;
