let users = [{ id: 1, name: 'John' }, { id: 2, name: 'Doe' }]

exports.getUsers = (req, res) => {
  res.json({ users })
}

exports.createUser = (req, res) => {
  users.push({ id: users.length, name: req.body.name })

  res.json({ users })
}

exports.getUserById = (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id))

  res.json({ user })
}

exports.updateUserById = (req, res) => {
  let updatedUser

  const updatedUsers = users.filter(user => {
    if (user.id === parseInt(req.params.id)) {
      updatedUser = Object.assign(user, req.body)

      return updatedUser
    } else {
      return user
    }
  })

  users = updatedUsers

  res.json({ user: updatedUser })
}

exports.deleteUserById = (req, res) => {
  const updatedUsers = users.filter(user => user.id !== parseInt(req.params.id))

  users = updatedUsers

  res.json({})
}
