function getProjectCategory () {
  return {
    id: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    name: 'ProjectCategory 8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
  }
}

function getProject () {
  return {
    id: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    name: 'Lorem 8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    imageURL: 'http://intranet.test/uploads/8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    extURL: 'http://extlink.test/',
    projectCategoryId: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8'
  }
}

function getOffice () {
  return {
    id: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    name: 'Office 8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    number: '8091112222',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
  }
}

function getPosition () {
  return {
    id: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    name: 'Position 8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
  }
}

function getUser () {
  return {
    id: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    fullname: 'Jhon Doe 8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    username: 'jhondoe-8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    password: 'password123456',
    extensionNumber: 1234,
    email: `jhondoe8bdafc78-5090-4b91-ab22-d0b3ef3fabf8@test.com`
  }
}

function getDocumentCategory () {
  return {
    id: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    name: 'Document Category 8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
  }
}

function getDepartment () {
  return {
    id: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    name: `Document Category 8bdafc78-5090-4b91-ab22-d0b3ef3fabf8`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
  }
}

function getDocument () {
  return {
    id: '8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    name: 'Document Category 8bdafc78-5090-4b91-ab22-d0b3ef3fabf8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    fileURL: `http://intranet.test/uploads/8bdafc78-5090-4b91-ab22-d0b3ef3fabf8`,
    extension: 'pdf'
  }
}

function getProjectCategories () {
  return [
    getProjectCategory(),
    getProjectCategory(),
    getProjectCategory()
  ]
}

function getOffices () {
  return [
    getOffice(),
    getOffice(),
    getOffice()
  ]
}

function getProjects () {
  return [
    getProject(),
    getProject(),
    getProject()
  ]
}

function getPositions () {
  return [
    getPosition(),
    getPosition(),
    getPosition()
  ]
}

function getDocumentCategories () {
  return [
    getDocumentCategory(),
    getDocumentCategory(),
    getDocumentCategory()
  ]
}

function getDepartments () {
  return [
    getDepartment(),
    getDepartment(),
    getDepartment()
  ]
}

function getDocuments () {
  return [
    getDocument(),
    getDocument(),
    getDocument()
  ]
}

function getUsers () {
  return [
    getUser(),
    getUser(),
    getUser()
  ]
}

module.exports = {
  getProjectCategory,
  getProject,
  getOffice,
  getPosition,
  getUser,
  getDocumentCategory,
  getDepartment,
  getDocument,
  getProjectCategories,
  getProjects,
  getOffices,
  getPositions,
  getDocumentCategories,
  getDepartments,
  getDocuments,
  getUsers
}
