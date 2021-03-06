'use strict'

/*
  This is the entry point for Webpack to build the bundle from.
  We use the same example code as the html browser example,
  but we inject the Node.js modules of OrbitDB and IPFS into
  the example. 
 */

// Import IPFS module
const IPFS = require('ipfs')

// When 'orbit-db' was installed from npm, use with:
import OrbitDB from 'orbit-db' 

// Example main code
const example = require('./example')

// Call the start function and pass in the 
// IPFS and OrbitDB modules
example(IPFS, OrbitDB)
