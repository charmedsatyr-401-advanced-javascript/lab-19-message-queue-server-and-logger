![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 19 | Message Queue Server and Logger

### Author: Joseph Wolfe

### Links and Resources
* [repo](https://github.com/charmedsatyr-401-advanced-javascript/lab-19-message-queue-server-and-logger)
* [travis](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-19-message-queue-server-and-logger)

#### Documentation
N/A

### Modules
#### `server.js`
* Monitors `save` and `error` events in the `files` namespace.
* Monitors `create`, `read`, `update`, and `delete` events in the `database` namespace.

#### `logger.js`
* Subscribes to and logs `save` and `error` events in the `files` namespace.
* Subscribes to and logs `create`, `read`, `update`, and `delete` events in the `database` namespace.

### Setup
#### `.env` requirements
* `PORT` - Port Number

#### Running the app
* `node server`, then
* `node logger`

#### Tests
N/A

#### UML
N/A