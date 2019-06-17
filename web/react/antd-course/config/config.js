export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            // plugin config
        }],
    ],
    routes: [{
        path: '/',
        component: './HelloWorld',
    }],
};
