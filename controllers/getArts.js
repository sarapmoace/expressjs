const fs = require('fs')

const path = `${__dirname}/../dev-data/arts.json`

const arts = JSON.parse(fs.readFileSync(path));

const getArts = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: arts.length,
    data: {
      arts
    }
  })
}

const postArts = async (req, res) => {
  const newId = arts[arts.length - 1].id + 1;
  const newArt = Object.assign({ id: newId }, req.body);

  arts.push(newArt)
  fs.writeFile(path, JSON.stringify(arts), err => {
    res.status(201).json({
      status: 'created',
      data: {
        arts: newArt
      }
    })
  })
}

const getArtsById = async (req, res) => {
  try{
    const id = req.params.id * 1;
    const art = arts.find(el => el.id === id)

    res.status(200).json({
      status: 'success',
      data: {
        art
      }
    })
  }catch (err){
    res.status(404).json({
      status: 'not found',
      message: err.message
    })
  }
}

const updateArts = async (req, res) => {
  try{
    res.status(200).json({
      status: 'success',
      data: {
        tour: 'Updated tour here'
      }
    })
  }catch(err){
    res.status(404).json({
      status: '404 not found',
      message: err.message
    })
  }
}

const deleteArts = async (req, res) => {
  try{
    res.status(204).json({
      status: 'Deleted successfully',
      data: null
    })
  }catch{
    res.status(404).json({
      status: '404 failed to delete',
      message: err.message
    })
  }
}

module.exports = {
  getArts,
  postArts,
  getArtsById,
  updateArts,
  deleteArts
}