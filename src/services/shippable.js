export default {
  detect () {
    return !!process.env.SHIPPABLE
  },

  configuration () {
    // http://docs.shippable.com/en/latest/config.html#common-environment-variables
    console.log('    Shippable CI Detected')
    return {
      service: 'shippable',
      build: process.env.BUILD_NUMBER,
      build_url: process.env.BUILD_URL,
      pr: process.env.PULL_REQUEST,
      commit: process.env.COMMIT,
      branch: process.env.BRANCH,
      slug: process.env.REPO_NAME,
    }
  },
}
