module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'SingleLineTextField',
      externals: {
        react: 'React'
      }
    }
  }
}
