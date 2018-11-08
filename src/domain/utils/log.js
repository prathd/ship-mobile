import minilog from 'minilog';
import Config from 'react-native-config';
import settings from '../../../settings';

minilog.enable();

const loggerName = typeof window !== 'undefined' ? '[Frontend]' : '[Backend]';

const log = minilog(loggerName);
log.suggest.defaultResult = false;
log.suggest.clear().allow(loggerName, settings.app.logging.level);

if (Config.__DEV__ && Config.__SERVER__) {
  let console_log = global.console.log;
  global.console.log = function() {
    if (
      arguments.length == 1 &&
      typeof arguments[0] === 'string' &&
      arguments[0].match(/^\[(HMR|WDS)\]/)
    ) {
      console_log('[Backend] ' + arguments[0]);
    } else {
      console_log.apply(global.console, arguments);
    }
  };
}

export default log;
