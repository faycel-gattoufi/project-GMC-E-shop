import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Gattoufi Faissel',
    email: 'gattoufi.faycel@live.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Hedhili Mouna',
    email: 'Mouna@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
