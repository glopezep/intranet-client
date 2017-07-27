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

    return Promise.resolve(request(options))
  }

  getProjectCategory (id, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.projects}/category/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  getProjectCategories (callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.projects}/category/list`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  updateProjectCategory (id, data, callback) {
    const options = {
      method: 'PUT',
      uri: `${this.options.endpoints.projects}/category/${id}`,
      json: true,
      body: data,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  deleteProjectCategory (id, callback) {
    const options = {
      method: 'DELETE',
      uri: `${this.options.endpoints.projects}/category/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  saveProject (project, callback) {
    const options = {
      method: 'POST',
      uri: `${this.options.endpoints.projects}/save`,
      json: true,
      body: project,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  getProject (id, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.projects}/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }
  getProjects () {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.projects}/list`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  getProjectsByProjectCategory (id, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.projects}/category/${id}/projects`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  updateProject (id, data, callback) {
    const options = {
      method: 'PUT',
      uri: `${this.options.endpoints.projects}/${id}`,
      json: true,
      body: data,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  deleteProject (id, callback) {
    const options = {
      method: 'DELETE',
      uri: `${this.options.endpoints.projects}/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  saveOffice (office, callback) {
    const options = {
      method: 'POST',
      uri: `${this.options.endpoints.offices}/save`,
      json: true,
      body: office,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  getOffice (id, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.offices}/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  getOffices (callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.offices}/list`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  updateOffice (id, data, callback) {
    const options = {
      method: 'PUT',
      uri: `${this.options.endpoints.offices}/${id}`,
      json: true,
      body: data,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  deleteOffice (id, callback) {
    const options = {
      method: 'DELETE',
      uri: `${this.options.endpoints.offices}/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  savePosition (position, callback) {
    const options = {
      method: 'POST',
      uri: `${this.options.endpoints.users}/position/save`,
      json: true,
      body: position,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  getPosition (id, callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.users}/position/${id}`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

  getPositions (callback) {
    const options = {
      method: 'GET',
      uri: `${this.options.endpoints.users}/position/list`,
      json: true,
      resolveWithFullResponse: true
    }

    return Promise.resolve(request(options))
  }

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
