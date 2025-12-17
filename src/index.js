import _ from 'lodash';
import parseJSON from './parser.js';

const genDiff = (filepath1, filepath2) => {
  const obj1 = parseJSON(filepath1);
  const obj2 = parseJSON(filepath2);

  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

  const lines = keys.flatMap((key) => {
    const val1 = obj1[key];
    const val2 = obj2[key];

    if (!_.has(obj2, key)) {
      return `  - ${key}: ${val1}`;
    }
    if (!_.has(obj1, key)) {
      return `  + ${key}: ${val2}`;
    }
    if (_.isEqual(val1, val2)) {
      return `    ${key}: ${val1}`;
    }
    return [`  - ${key}: ${val1}`, `  + ${key}: ${val2}`];
  });

  return `{\n${lines.join('\n')}\n}`;
};

export default genDiff;
