module.exports = {
  proxy: {
    '/api': {
      target: 'http://localhost:4000',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}