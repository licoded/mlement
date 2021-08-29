import Status from './src/status';

/* istanbul ignore next */
Status.install = (Vue) => {
  Vue.component(Status.name, Status);
};

export default Status;
