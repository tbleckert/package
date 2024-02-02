import { assert, test } from 'vitest';
import myFunction from "./index.js";

test('myFunction returns "Hello World"', () => {
    assert.equal(myFunction(), 'Hello World');
});
