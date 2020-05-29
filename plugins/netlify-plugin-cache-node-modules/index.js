module.exports = {

  async onPreBuild({ utils }) {
    await utils.cache.restore('node_modules')
  },
  async onPostBuild({ utils }) {
    await utils.cache.save('node_modules', {
      digests: ['yarn.lock']
    })
  },
}
