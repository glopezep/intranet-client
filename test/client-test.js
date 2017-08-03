import test from 'ava'
import nock from 'nock'
import intranet from '../'
import fixtures from './fixtures'

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
  t.is(typeof client.getProjectsByProjectCategory, 'function', 'getProjectsByProjectCategory Should be a function')
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

test('Save project category', async t => {
  const client = t.context.client
  const projectCategory = fixtures.getProjectCategory()

  nock(options.endpoints.projects)
    .post('/category/save', projectCategory)
    .reply(201, projectCategory)

  const response = await client.saveProjectCategory(projectCategory)

  t.deepEqual(response.body, projectCategory)
})

test('Get project category', async t => {
  const client = t.context.client
  const projectCategory = fixtures.getProjectCategory()

  nock(options.endpoints.projects)
    .get(`/category/${projectCategory.id}`)
    .reply(200, projectCategory)

  const response = await client.getProjectCategory(projectCategory.id)

  t.deepEqual(response.body, projectCategory)
})

test('Get project categories', async t => {
  const client = t.context.client
  const projectCategories = fixtures.getProjectCategories()

  nock(options.endpoints.projects)
    .get(`/category/list`)
    .reply(200, projectCategories)

  const response = await client.getProjectCategories()

  t.deepEqual(response.body, projectCategories)
})

test('Update project category', async t => {
  const client = t.context.client
  const projectCategory = fixtures.getProjectCategory()

  nock(options.endpoints.projects)
    .put(`/category/${projectCategory.id}`, projectCategory)
    .reply(200, projectCategory)

  const response = await client.updateProjectCategory(projectCategory.id, projectCategory)

  t.deepEqual(response.body, projectCategory)
})

test('Delete project category', async t => {
  const client = t.context.client
  const projectCategory = fixtures.getProjectCategory()

  nock(options.endpoints.projects)
    .delete(`/category/${projectCategory.id}`)
    .reply(200, projectCategory)

  const response = await client.deleteProjectCategory(projectCategory.id)

  t.deepEqual(response.body, projectCategory)
})

test('Save project', async t => {
  const client = t.context.client
  const project = fixtures.getProject()

  nock(options.endpoints.projects)
    .post('/save', project)
    .reply(201, project)

  const response = await client.saveProject(project)

  t.deepEqual(response.body, project)
})

test('Get project', async t => {
  const client = t.context.client
  const project = fixtures.getProject()

  nock(options.endpoints.projects)
    .get(`/${project.id}`)
    .reply(200, project)

  const response = await client.getProject(project.id)

  t.deepEqual(response.body, project)
})

test('Get projects', async t => {
  const client = t.context.client
  const projects = fixtures.getProjects()

  nock(options.endpoints.projects)
    .get(`/list`)
    .reply(200, projects)

  const response = await client.getProjects()

  t.deepEqual(response.body, projects)
})

test('Get projects by projects categories', async t => {
  const client = t.context.client
  const projects = fixtures.getProjects()
  const projectCategoryId = projects[0].projectCategoryId

  nock(options.endpoints.projects)
    .get(`/category/${projectCategoryId}/projects`)
    .reply(200, projects)

  const response = await client.getProjectsByProjectCategory(projectCategoryId)

  t.deepEqual(response.body, projects)
})

test('Update project', async t => {
  const client = t.context.client
  const project = fixtures.getProject()

  nock(options.endpoints.projects)
    .put(`/${project.id}`, project)
    .reply(200, project)

  const response = await client.updateProject(project.id, project)

  t.deepEqual(response.body, project)
})

test('Delete project', async t => {
  const client = t.context.client
  const project = fixtures.getProject()

  nock(options.endpoints.projects)
    .delete(`/${project.id}`)
    .reply(200, project)

  const response = await client.deleteProject(project.id)

  t.deepEqual(response.body, project)
})

test('Save office', async t => {
  const client = t.context.client
  const office = fixtures.getOffice()

  nock(options.endpoints.offices)
    .post('/save', office)
    .reply(201, office)

  const response = await client.saveOffice(office)

  t.deepEqual(response.body, office)
})

test('Get office', async t => {
  const client = t.context.client
  const office = fixtures.getOffice()

  nock(options.endpoints.offices)
    .get(`/${office.id}`)
    .reply(200, office)

  const response = await client.getOffice(office.id)

  t.deepEqual(response.body, office)
})

test('Get offices', async t => {
  const client = t.context.client
  const offices = fixtures.getOffices()

  nock(options.endpoints.offices)
    .get(`/list`)
    .reply(200, offices)

  const response = await client.getOffices()

  t.deepEqual(response.body, offices)
})

test('Update office', async t => {
  const client = t.context.client
  const office = fixtures.getOffice()

  nock(options.endpoints.offices)
    .put(`/${office.id}`, office)
    .reply(200, office)

  const response = await client.updateOffice(office.id, office)

  t.deepEqual(response.body, office)
})

test('Delete office', async t => {
  const client = t.context.client
  const office = fixtures.getOffice()

  nock(options.endpoints.offices)
    .delete(`/${office.id}`)
    .reply(200, office)

  const response = await client.deleteOffice(office.id)

  t.deepEqual(response.body, office)
})

test('Save position', async t => {
  const client = t.context.client
  const position = fixtures.getPosition()

  nock(options.endpoints.users)
    .post('/position/save', position)
    .reply(201, position)

  const response = await client.savePosition(position)

  t.deepEqual(response.body, position)
})

test('Get position', async t => {
  const client = t.context.client
  const position = fixtures.getPosition()

  nock(options.endpoints.users)
    .get(`/position/${position.id}`)
    .reply(200, position)

  const response = await client.getPosition(position.id)

  t.deepEqual(response.body, position)
})

test('Get positions', async t => {
  const client = t.context.client
  const positions = fixtures.getPositions()

  nock(options.endpoints.users)
    .get(`/position/list`)
    .reply(200, positions)

  const response = await client.getPositions()

  t.deepEqual(response.body, positions)
})

test('Update position', async t => {
  const client = t.context.client
  const position = fixtures.getPosition()

  nock(options.endpoints.users)
    .put(`/position/${position.id}`, position)
    .reply(200, position)

  const response = await client.updatePosition(position.id, position)

  t.deepEqual(response.body, position)
})

test('Delete position', async t => {
  const client = t.context.client
  const position = fixtures.getPosition()

  nock(options.endpoints.users)
    .delete(`/position/${position.id}`)
    .reply(200, position)

  const response = await client.deletePosition(position.id)

  t.deepEqual(response.body, position)
})

test('Save user', async t => {
  const client = t.context.client
  const user = fixtures.getUser()

  nock(options.endpoints.users)
    .post('/save', user)
    .reply(201, user)

  const response = await client.saveUser(user)

  t.deepEqual(response.body, user)
})

test('Get user', async t => {
  const client = t.context.client
  const user = fixtures.getUser()

  nock(options.endpoints.users)
    .get(`/${user.username}`)
    .reply(200, user)

  const response = await client.getUser(user.username)

  t.deepEqual(response.body, user)
})

test('Get users', async t => {
  const client = t.context.client
  const user = fixtures.getUser()

  nock(options.endpoints.users)
    .get(`/list`)
    .reply(200, user)

  const response = await client.getUsers()

  t.deepEqual(response.body, user)
})

test('Get users by office', async t => {
  const client = t.context.client
  const user = fixtures.getUser()

  nock(options.endpoints.users)
    .get(`/office/1/users`)
    .reply(200, user)

  const response = await client.getUsersByOffice(1)

  t.deepEqual(response.body, user)
})

test('Update user', async t => {
  const client = t.context.client
  const user = fixtures.getUser()
  const newUserData = fixtures.getUser()

  nock(options.endpoints.users)
    .put(`/${user.username}`, newUserData)
    .reply(200, newUserData)

  const response = await client.updateUser(user.username, newUserData)

  t.deepEqual(response.body, newUserData)
})

test('Delete user', async t => {
  const client = t.context.client
  const user = fixtures.getUser()

  nock(options.endpoints.users)
    .delete(`/${user.username}`)
    .reply(200, user)

  const response = await client.deleteUser(user.username)

  t.deepEqual(response.body, user)
})
