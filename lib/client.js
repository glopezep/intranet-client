const request = require('request-promise-native')
const Promise = require('bluebird')
const defaults = require('../config')

class Client {
  constructor (options) {
    this.options = options || defaults
  }

  saveProjectCategory (projectCategory, callback) {
    const options = {
      method: 'POST',
      uri: `${this.options.endpoints.projects}/category/save`,
      json: true,
      body: projectCategory,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  getProjectCategory (id, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.projects}/category/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  getProjectCategories (callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.projects}/category/list`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  updateProjectCategory (id, data, callback) {
    const options = {
      method: 'PUT',
      uri: `${this.options.endpoints.projects}/category/${id}`,
      json: true,
      body: data,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  deleteProjectCategory (id, callback) {
    const options = {
      method: 'DELETE',
      uri: `${this.options.endpoints.projects}/category/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  saveProject (project, callback) {
    const options = {
      method: 'POST',
      uri: `${this.options.endpoints.projects}/save`,
      json: true,
      body: project,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  getProject (id, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.projects}/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }
  getProjects (callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.projects}/list`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  getProjectsByProjectCategory (id, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.projects}/category/${id}/projects`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  updateProject (id, data, callback) {
    const options = {
      method: 'PUT',
      uri: `${this.options.endpoints.projects}/${id}`,
      json: true,
      body: data,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  deleteProject (id, callback) {
    const options = {
      method: 'DELETE',
      uri: `${this.options.endpoints.projects}/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  saveOffice (office, callback) {
    const options = {
      method: 'POST',
      uri: `${this.options.endpoints.offices}/save`,
      json: true,
      body: office,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  getOffice (id, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.offices}/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  getOffices (callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.offices}/list`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  updateOffice (id, data, callback) {
    const options = {
      method: 'PUT',
      uri: `${this.options.endpoints.offices}/${id}`,
      json: true,
      body: data,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  deleteOffice (id, callback) {
    const options = {
      method: 'DELETE',
      uri: `${this.options.endpoints.offices}/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  savePosition (position, callback) {
    const options = {
      method: 'POST',
      uri: `${this.options.endpoints.users}/position/save`,
      json: true,
      body: position,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  getPosition (id, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.users}/position/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  getPositions (callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.users}/position/list`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  updatePosition (id, data, callback) {
    const options = {
      method: 'PUT',
      uri: `${this.options.endpoints.users}/position/${id}`,
      json: true,
      body: data,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  deletePosition (id, callback) {
    const options = {
      method: 'DELETE',
      uri: `${this.options.endpoints.users}/position/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  saveUser (user, callback) {
    const options = {
      method: 'POST',
      uri: `${this.options.endpoints.users}/save`,
      json: true,
      body: user,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  getUser (username, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.users}/${username}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  getUsers (callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.users}/list`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  getUsersByOffice (officeId, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.users}/office/${officeId}/users`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  updateUser (username, data, callback) {
    const options = {
      method: 'PUT',
      uri: `${this.options.endpoints.users}/${username}`,
      json: true,
      body: data,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  deleteUser (username, callback) {
    const options = {
      method: 'DELETE',
      uri: `${this.options.endpoints.users}/${username}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  saveDocumentCategory (documentCategory, callback) {
    const options = {
      method: 'POST',
      uri: `${this.options.endpoints.projects}/category/save`,
      json: true,
      body: documentCategory,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  getDocumentCategory (id, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.projects}/category/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  getDocumentCategories (callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.projects}/category/list`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  updateDocumentCategory (id, data, callback) {
    const options = {
      method: 'PUT',
      uri: `${this.options.endpoints.projects}/category/${id}`,
      json: true,
      body: data,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

  deleteDocumentCategory (id, callback) {
    const options = {
      method: 'DELETE',
      uri: `${this.options.endpoints.projects}/category/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options)).asCallback(callback)
  }

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
