interface IHtttpDecoratorOptions {
  url: string;
  headers?: { [i: string]: string };
  timeout?: number;
  data?: any;
  params?: any;
}

const buildDecorator = (method: string, options: IHtttpDecoratorOptions): MethodDecorator => (
  target,
  propertyKey,
  descriptor
) => {
  const oldVal: any = descriptor.value;
  (descriptor as any).value = (...args: any[]) => {
    // const axiosOpt = {
    //   method,
    //   data: typeof args[0] === 'string' ? null : method === 'get' ? null : args[0],
    //   params: typeof args[0] === 'string' ? null : method === 'get' ? args[0] : null
    // };
    const axiosOpt = {
      method
    };
    if (typeof args[0] !== 'string') {
      if (method === 'get') {
        Object.assign(axiosOpt, { params: args[0] });
      } else {
        Object.assign(axiosOpt, { data: args[0] });
      }
    }

    const arg = Object.assign(axiosOpt, options);
    arg.url = typeof args[0] === 'string' ? `${arg.url}/${args[0]}` : arg.url;

    return oldVal.apply(target, [arg, target]);
  };
};

/**
 * @GET({
 *  url:'/user'
 *  header:{}
 * })
 * @param options
 */
export function GET(options: IHtttpDecoratorOptions) {
  const method = 'get';
  return buildDecorator(method, options);
}

/**
 * @POST({
 *  url:'/user'
 *  header:{}
 * })
 * @param options
 */
export function POST(options: IHtttpDecoratorOptions) {
  const method = 'post';
  return buildDecorator(method, options);
}

/**
 * @PUT({
 *  url:'/user'
 *  header:{}
 * })
 * @param options
 */
export function PUT(options: IHtttpDecoratorOptions) {
  const method = 'put';
  return buildDecorator(method, options);
}

/**
 * @DELETE({
 *  url:'/user'
 *  header:{}
 * })
 * @param options
 */
export function DELETE(options: IHtttpDecoratorOptions) {
  const method = 'delete';
  return buildDecorator(method, options);
}
