import * as assert from 'assert';

// target
import * as conf from '../../config/manager';

suite('Manager Test Suite', () => {
  test('getDefaultPath', () => {
    let val = conf.getDefaultPath();
    assert.strictEqual(val, '~/.vscode/vsboiler');
  });
});