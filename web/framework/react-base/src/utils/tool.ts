import loadable from 'react-loadable';
import { Loading } from 'components/Loading';

export function makeLoadableComponent(component: () => Promise<any>) {
  return loadable({
    loader: component,
    loading: Loading,
    delay: 300,
  });
}

export function dynamicImport(component: () => Promise<any>) {
  return loadable({
    loader: component,
    loading: () => null,
  });
}
