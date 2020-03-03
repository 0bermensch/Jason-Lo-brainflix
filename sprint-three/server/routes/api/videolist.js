const express = require("express");

const videosFile = __dirname + "./../../models/videolist.json";
const videos = require(videosFile);

const helper = require("../../helper/helper");

const router = express.Router();

router.get("/", (req, res) => {
  const videoList = videos.map(video => {
    return {
      id: video.id,
      title: video.title,
      image: video.image,
      channel: video.channel
    };
  });
  res.json(videoList);
});

router.get("/:id", (req, res) => {
  const found = videos.some(video => video.id === req.params.id);
  if (found) {
    res.json(videos.filter(video => video.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `Video with ID:${req.params.id} not found` });
  }
});

router.post("/", (req, res) => {
  const newVideo = {
    id: helper.getNewId(),
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    comment: []
  };
  if (!newVideo.title || !newVideo.description) {
    return res.status(400).json({
      errorMessage: "please provide required information"
    });
  }
  videos.push(newVideo);
  helper.writeJSONFile(videosFile, videos);
  res.json(videos);
});

router.put("/:id", (req, res) => {
  const found = videos.some(video => video.id === req.params.id);
  if (found) {
    videos.forEach(video => {
      if (video.id === req.params.id) {
        video.title = req.body.title ? req.body.title : video.title;
        video.description = req.body.description
          ? req.body.description
          : video.description;
        video.image = req.body.image ? req.body.image : video.image;
      }
    });
    helper.writeJSONFile(videosFile, videos);
    res.json({ msg: "Video Updated", videos: videos });
  } else {
    res
      .status(404)
      .json({ errorMessage: `Video with ID: ${req.params.id} not found` });
  }
});

module.exports = router;
