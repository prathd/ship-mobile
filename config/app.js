export default {
  name: 'Ship',
  logging: {
    level: ['production'].indexOf(process.env.NODE_ENV) < 0 ? 'debug' : 'info',
    debugSQL: false,
    apolloLogging: ['production'].indexOf(process.env.NODE_ENV) < 0,
  },
  stackFragmentFormat: 'vscode://file/{0}:{1}:{2}',
};
