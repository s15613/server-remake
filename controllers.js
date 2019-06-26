const Video = require('./models')

exports.create = (req, res) => {
	const data = req.body
	const newVideo = new Video(data)
	newVideo.save()
			.then(newVideo => res.json(newVideo))
			.catch(err => console.log(err))
}
exports.getAll = (req, res) => {
	Video.find()
		 .then(videos => res.json(videos))
		 .catch(err => console.log(err))
}
exports.getCategory = (req, res) => {
	Video.find({category: req.params.category})
		 .then(videos => res.json(videos))
		 .catch(err => console.log(err))
}
exports.getOne = (req, res) => {
	Video.findById(req.params.videoId)
		 .then(video => res.json(video))
		 .catch(err => console.log(err))
}