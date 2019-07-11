module.exports = {
  name: 'playground-web',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/playground-web',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
