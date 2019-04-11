'use strict';

const Q = require('@nmq/q/server');
Q.start();

const files = new Q('files');
files.monitorEvent('save');
files.monitorEvent('error');

const db = new Q('database');
db.monitorEvent('create');
db.monitorEvent('read');
db.monitorEvent('update');
db.monitorEvent('delete');
