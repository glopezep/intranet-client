import test from 'ava'
// import nock from 'nock'
import intranet from '../'

const options = {
  endpoints: {
    projects: 'http://api.intranet.pawadominicana.test/projects',
    offices: 'http://api.intranet.pawadominicana.test/offices',
    users: 'http://api.intranet.pawadominicana.test/users',
    auth: 'http://api.intranet.pawadominicana.test/auth'
  }
}

test.beforeEach(t => {
  t.context.client = intranet.createClient(options)
})

test('Client', t => {
  const client = t.context.client
  t.is(typeof client.saveProjectCategory, 'function', 'saveProjectCategory Should be a function')
  t.is(typeof client.getProjectCategory, 'function', 'getProjectCategory Should be a function')
  t.is(typeof client.getProjectCategories, 'function', 'getProjectCategories Should be a function')
  t.is(typeof client.updateProjectCategory, 'function', 'updateProjectCategory Should be a function')
  t.is(typeof client.deleteProjectCategory, 'function', 'deleteProjectCategory Should be a function')
  t.is(typeof client.saveProject, 'function', 'saveProject Should be a function')
  t.is(typeof client.getProject, 'function', 'getProject Should be a function')
  t.is(typeof client.getProjects, 'function', 'getProjects Should be a function')
  t.is(typeof client.getProjectsByProjectCateogory, 'function', 'getProjectsByProjectCateogory Should be a function')
  t.is(typeof client.updateProject, 'function', 'updateProject Should be a function')
  t.is(typeof client.deleteProject, 'function', 'deleteProject Should be a function')
  t.is(typeof client.saveOffice, 'function', 'saveOffice Should be a function')
  t.is(typeof client.getOffice, 'function', 'getOffice Should be a function')
  t.is(typeof client.getOffices, 'function', 'getOffices Should be a function')
  t.is(typeof client.updateOffice, 'function', 'updateOffice Should be a function')
  t.is(typeof client.deleteOffice, 'function', 'deleteOffice Should be a function')
  t.is(typeof client.savePosition, 'function', 'savePosition Should be a function')
  t.is(typeof client.getPosition, 'function', 'getPosition Should be a function')
  t.is(typeof client.getPositions, 'function', 'getPositions Should be a function')
  t.is(typeof client.updatePosition, 'function', 'updatePosition Should be a function')
  t.is(typeof client.deletePosition, 'function', 'deletePosition Should be a function')
  t.is(typeof client.saveUser, 'function', 'saveUser Should be a function')
  t.is(typeof client.getUser, 'function', 'getUser Should be a function')
  t.is(typeof client.getUsers, 'function', 'getUsers Should be a function')
  t.is(typeof client.getUsersByOffice, 'function', 'getUsersByOffice Should be a function')
  t.is(typeof client.updateUser, 'function', 'updateUser Should be a function')
  t.is(typeof client.deleteUser, 'function', 'deleteUser Should be a function')
  t.is(typeof client.saveDocumentCategory, 'function', 'saveDocumentCategory Should be a function')
  t.is(typeof client.getDocumentCategory, 'function', 'getDocumentCategory Should be a function')
  t.is(typeof client.getDocumentCategories, 'function', 'getDocumentCategorys Should be a function')
  t.is(typeof client.updateDocumentCategory, 'function', 'updateDocumentCategory Should be a function')
  t.is(typeof client.deleteDocumentCategory, 'function', 'deleteDocumentCategory Should be a function')
  t.is(typeof client.saveDeparment, 'function', 'saveDeparment Should be a function')
  t.is(typeof client.getDeparment, 'function', 'getDeparment Should be a function')
  t.is(typeof client.getDeparments, 'function', 'getDeparments Should be a function')
  t.is(typeof client.getDeparmentsByDocumentCategory, 'function', 'getDeparmentsByDocumentCategory Should be a function')
  t.is(typeof client.updateDeparment, 'function', 'updateDeparment Should be a function')
  t.is(typeof client.deleteDeparment, 'function', 'deleteDeparment Should be a function')
  t.is(typeof client.saveDocument, 'function', 'saveDocument Should be a function')
  t.is(typeof client.getDocument, 'function', 'getDocument Should be a function')
  t.is(typeof client.getDocuments, 'function', 'getDocuments Should be a function')
  t.is(typeof client.getDocumentsByDeparment, 'function', 'getDocumentsByDeparment Should be a function')
  t.is(typeof client.updateDocument, 'function', 'updateDocument Should be a function')
  t.is(typeof client.deleteDocument, 'function', 'deleteDocument Should be a function')
  t.is(typeof client.authenticate, 'function', 'authenticate Should be a function')
})