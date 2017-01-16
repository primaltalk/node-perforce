'use strict';

module.exports = {
  _change: {
    cmd: 'Change:',
    type: String,
    category: 'stdin'
  },
  description: {
    cmd: 'Description:',
    type: String,
    category: 'stdin'
  },
  _description: {
    cmd: '-d',
    type: String,
    category: 'mixed'
  },
  clientworkspace: {
    cmd: 'Client:',
    type: String,
    category: 'stdin'
  },
  clientroot: {
    cmd: 'Root:',
    type: String,
    category: 'stdin'
  },
  altroots: {
    cmd: 'AltRoots:',
    type: String,
    category: 'stdin'
  },
  clientview: {
    cmd: 'View:',
    type: String,
    category: 'stdin'
  },
  clientowner: {
    cmd: 'Owner:',
    type: String,
    category: 'stdin'
  },
  clientstream: {
    cmd: 'Stream:',
    type: String,
    category: 'stdin'
  },
  acceptmerged: {
    cmd: '-am',
    category: 'unary'
  },
  add: {
    cmd: '-a',
    category: 'unary'
  },
  edit: {
    cmd: '-e',
    category: 'unary'
  },
  delete: {
    cmd: '-d',
    category: 'unary'
  },
  changelist: {
    cmd: '-c',
    type: Number,
    category: 'mixed'
  },
  shelved: {
    cmd: '-s',
    type: Number,
    category: 'mixed'
  },
  stream: {
    cmd: '-S',
    type: String,
    category: 'mixed'
  },
  filetype: {
    cmd: '-t',
    type: String,
    category: 'mixed'
  },
  _delete: {
    cmd: '-d',
    type: String,
    category: 'mixed'
  },
  _output: {
    cmd: '-o',
    type: String,
    category: 'mixed'
  },
  force: {
    cmd: '-f',
    category: 'unary'
  },
  switch: {
    cmd: '-s',
    category: 'unary'
  },
  unchanged: {
    cmd: '-a',
    category: 'unary'
  },
  files: {
    type: Array,
    category: 'mixed'
  },
  max: {
    cmd: '-m',
    type: Number,
    category: 'mixed'
  },
  client: {
    cmd: '-c',
    type: String,
    category: 'mixed',
    global: true
  },
  long: {
    cmd: '-l',
    category: 'unary'
  },
  trunk: {
    cmd: '-L',
    category: 'unary'
  },
  status: {
    cmd: '-s',
    type: String,
    category: 'mixed'
  },
  time: {
    cmd: '-t',
    category: 'unary'
  },
  user: {
    cmd: '-u',
    type: String,
    category: 'mixed',
    global: true
  },
  custom: {
    cmd: ' ',
    type: String,
    category: 'mixed'
  },
  submitoption: {
    cmd: '-f',
    type: String,
    category: 'mixed'
  },
  quiet: {
    cmd: '-q',
    category: 'unary',
    global: true
  },
  keep: {
    cmd: '-k',
    category: 'unary'
  },
  parallel: {
    cmd: '--parallel',
    type: String,
    category: 'mixed'
  },
  host: {
    cmd: '-H',
    type: String,
    category: 'mixed',
    global: true
  },
  port: {
    cmd: '-p',
    type: String,
    category: 'mixed',
    global: true
  },
  pass: {
    cmd: '-P',
    type: String,
    category: 'mixed',
    global: true
  },
  password: {
    cmd: '',
    type: String,
    category: 'interactive'
  },
  exclude: {
    cmd: '-e',
    category: 'unary'
  }
};
