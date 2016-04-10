if (!global._babelPolyfill) { require('babel-polyfill'); }

import errors from 'feathers-errors';
import makeDebug from 'debug';

const debug = makeDebug('<%= name %>');

class Service {
  constructor(options = {}) {
    this.options = options;
  }

  create(data) {
    return new Promise((resolve, reject) => {
      // Put some code here.
    });
  }
}

export default function init(options) {
  debug('Initializing <%= name %> plugin');
  return new Service(options);
}

init.Service = Service;
