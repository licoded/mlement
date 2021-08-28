import Span from './src/span';

/* istanbul ignore next */
Span.install = (Vue) => {
  Vue.component(Span.name, Span);
};

export default Span;
