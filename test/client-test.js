import test from 'ava'
import nock from 'nock'
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
  t.is(typeof client.saveProject, 'function', 'saveProject Should be a function')
  t.is(typeof client.getProject, 'function', 'getProject Should be a function')
  t.is(typeof client.getProjects, 'function', 'getProjects Should be a function')
  t.is(typeof client.getProjectsByProjectCateogory, 'function', 'getProjectsByProjectCateogory Should be a function')
  t.is(typeof client.updateProject, 'function', 'updateProject Should be a function')
  t.is(typeof client.deleteProject, 'function', 'deleteProject Should be a function')
  t.is(typeof client.saveProjectCategory, 'function', 'saveProjectCategory Should be a function')
  t.is(typeof client.updateProjectCategory, 'function', 'updateProjectCategory Should be a function')
  t.is(typeof client.deleteProjectCategory, 'function', 'deleteProjectCategory Should be a function')
})
