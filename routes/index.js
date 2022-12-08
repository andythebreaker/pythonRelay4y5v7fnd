var express = require('express');
var router = express.Router();
var cmd=require('node-cmd');
    
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  const syncClone=cmd.runSync('python3 hel.py');
  console.log(syncClone);
  res.render('index', { title: '<3 <3 Express' });
});
router.get('/testpy', function(req, res, next) {
  const syncClone=cmd.runSync('python3 ~/yolov5/segment/predict.py --weights https://raw.githubusercontent.com/andythebreaker/pythonRelay4y5v7fnd/main/ttplapts/best11.pt --source https://images.chinatimes.com/newsphoto/2020-03-11/900/20200311005314.jpg --device cpu --conf 0.25 --save-txt --save-conf --save-crop');
  console.log(syncClone);
  res.render('index', { title: '<3 <3 Express' });
});



module.exports = router;
