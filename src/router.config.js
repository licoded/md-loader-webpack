const loadDocs = function(path) {
  return r => require.ensure([], () =>
    r(require(`./md${path}.md`)),
  'en-US');
};

const originRoute = [
  {
    name: 'Index',
    path: '/',
    component: () => import('./views/index.vue')
  },
  {
    name: 'Select',
    path: '/select',
    component: loadDocs('/select'),
  }
];

export default originRoute;