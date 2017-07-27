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
