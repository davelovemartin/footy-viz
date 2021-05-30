export default function handler(req, res) {
  const online = true

  if (online === true) {
    res.status(200).json({ status: 'online' })
  } else {
    res.status(404).json({ message: 'not found' })
  }
}
