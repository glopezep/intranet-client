class Client {
  constructor (options) {
    this.options = options || {
      endpoints: {
        projects: 'http://api.intranet.pawadominicana.net/projects',
        offices: 'http://api.intranet.pawadominicana.net/offices',
        users: 'http://api.intranet.pawadominicana.net/users',
        auth: 'http://api.intranet.pawadominicana.net/auth'
      }
    }
  }
}

module.exports = Client
