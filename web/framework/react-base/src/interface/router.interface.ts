import { UserType } from 'constants/enum';
import { IKV } from 'interface';

export interface IRouter<T = any> {
  key: string;
  parentKey?: string;
  title: string;
  icon?: string;
  iconType?: 'font' | 'img';
  path: string;
  component?: T;
  exact?: boolean;
  // 不显示在导航菜单
  noNav?: boolean;
  // 不显示在layout内
  outside?: boolean;
  children?: IRouter[];
  type?: UserType;
}

export interface IRouterTree<T> extends IRouter<T> {
  children?: IRouterTree<T>[];
}

export type LayoutRouter = (JSX.Element | null)[];

export interface IRouterComponent<T> {
  readonly router: IRouter<T>[];
  readonly routerComponents: IKV;

  // routerRenderer: () => LayoutRouter | { common: LayoutRouter; outside?: LayoutRouter };
  // redirectRenderer: () => JSX.Element;
  handlePermissions?: () => void;

  updateCurrentRouterComponentInfo?: () => void;
}
