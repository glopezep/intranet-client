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

  saveProjectCategory () {}
  getProjectCategory () {}
  getProjectCategories () {}
  updateProjectCategory () {}
  deleteProjectCategory () {}
  saveProject () {}
  getProject () {}
  getProjects () {}
  getProjectsByProjectCateogory () {}
  updateProject () {}
  deleteProject () {}
  saveOffice () {}
  getOffice () {}
  getOffices () {}
  updateOffice () {}
  deleteOffice () {}
  savePosition () {}
  getPosition () {}
  getPositions () {}
  updatePosition () {}
  deletePosition () {}
  saveUser () {}
  getUser () {}
  getUsers () {}
  getUsersByOffice () {}
  updateUser () {}
  deleteUser () {}
  saveDocumentCategory () {}
  getDocumentCategory () {}
  getDocumentCategories () {}
  updateDocumentCategory () {}
  deleteDocumentCategory () {}
  saveDeparment () {}
  getDeparment () {}
  getDeparments () {}
  getDeparmentsByDocumentCategory () {}
  updateDeparment () {}
  deleteDeparment () {}
  saveDocument () {}
  getDocument () {}
  getDocuments () {}
  getDocumentsByDeparment () {}
  updateDocument () {}
  deleteDocument () {}
  authenticate () {}
}

module.exports = Client
