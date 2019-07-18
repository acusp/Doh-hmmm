import * as React from 'react';
import { message } from 'antd';
import { userApi } from 'services/user.service';
import { applyMixins } from 'utils/tool';

export class ApiExtends {
  readonly userApi$$ = userApi;
}

// export class ComponentExtends<T = {}, S = {}, SS = any> extends React.Component<T, S, SS> {
//   readonly $message = message;
//   readonly userApi$$ = userApi;
//   readonly messageApi$$ = messageApi;
// }
export class StoreExtends extends ApiExtends {
  readonly $message = message;
}

export class ComponentExtends<T = {}, S = {}, SS = any> extends React.Component<T, S, SS>
  implements ApiExtends, React.Component<T, S, SS> {
  readonly $message = message;
  readonly userApi$$ = userApi;
}

applyMixins(ComponentExtends, [ApiExtends]);
