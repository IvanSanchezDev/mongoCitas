export class Login {
  // VERSION 1 DEL LOGIN
  static loginV1 = (req, res) => {
    res.status(req.data.status).send(req.data)
  }

  static loginV2 = (req, res) => {
    res.json({ message: 'fddsdssd' })
  }
}
