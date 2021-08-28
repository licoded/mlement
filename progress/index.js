import Progress from './src/progress';

/* istanbul ignore next */
Progress.install = (Vue) => {
  Vue.component(Progress.name, Progress);
};

export default Progress;
