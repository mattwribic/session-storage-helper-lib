const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');

class SessionStorageHelper {
  static setItem(key, value) {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  }

  static getItem(key) {
    const value = sessionStorage.getItem(key);
    return JSON.parse(value);
  }

  static removeItem(key) {
    sessionStorage.removeItem(key);
  }

  static clear() {
    sessionStorage.clear();
  }

  static generateUniqueKey() {
    return uuidv4();
  }

  // Example method to store a complex object with a unique key
  static storeWithUniqueKey(value) {
    const key = this.generateUniqueKey();
    this.setItem(key, value);
    return key;
  }
}

module.exports = SessionStorageHelper;
