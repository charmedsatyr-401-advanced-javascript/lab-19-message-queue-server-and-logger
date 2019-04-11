'use strict';

const Q = require('@nmq/q/client');

const files = new Q('files');
const db = new Q('database');

// Subscribe to `files` events
files.subscribe('create', payload => console.log('create in `files`:', payload));

files.subscribe('read', payload => console.log('read in `files`:', payload));

files.subscribe('update', payload => console.log('update in `files`:', payload));

files.subscribe('delete', payload => console.log('delete in `files`:', payload));

// Subscribe to `db` events
db.subscribe('save', payload => console.log('save in `db`:', payload));
db.subscribe('error', payload => console.log('error in `db`:', payload));

// See all subscriptions
console.log(files.subscriptions());

console.log(db.subscriptions());
