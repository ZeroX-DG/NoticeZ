exports.files = {
  javascripts: {
    joinTo: {
      'NoticeZ.js': /src/
    }
  }
};

exports.plugins = {
  babel: {presets: ['latest']}
};

exports.paths = {
  public: 'dist/'
}