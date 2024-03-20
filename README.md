# session-storage-helper-lib

A utility library for simplifying interactions with the web's session storage, including support for complex objects.

## Installation

Install `session-storage-helper-lib` using npm:

```bash
npm install session-storage-helper-lib
```

## Dependencies

- `lodash`: A modern JavaScript utility library delivering modularity, performance & extras.
- `uuid`: For the creation of RFC4122 UUIDs.

## Usage

Here's how you can use `session-storage-helper-lib`:

```javascript
const SessionStorageHelper = require('session-storage-helper-lib');

// Storing an item
SessionStorageHelper.setItem('myKey', { a: 1, b: 'Text' });

// Retrieving an item
const item = SessionStorageHelper.getItem('myKey');
console.log(item);

// Removing an item
SessionStorageHelper.removeItem('myKey');

// Clearing all items
SessionStorageHelper.clear();

// Generating a unique key
const uniqueKey = SessionStorageHelper.generateUniqueKey();
console.log(uniqueKey);

// Storing an item with a unique key
const key = SessionStorageHelper.storeWithUniqueKey({ c: 3, d: 'Another Text' });
console.log(key);
```
