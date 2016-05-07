var express = require('express');
var router = express.Router();
var searchManager = require('./searchManager');
var filterManager = require('./filterManager');

    var defaultPage = function(req, res, next) {
        searchManager.query('select * from HotelInfo', function(qerr, rows, fields) {
            res.render('index', {
                tabChoose: 0,
                data: rows
            })
        })
    }

/*@brief GET home page
 *render index.ejs
 */
router.get('/', defaultPage(res, req, next));

/*@brief GET index page
 *render index.ejs
 *by default select all the Hotel info
 */
router.get('/index', defaultPage(res, req, next));

router.post('/index', function(req, res, next) {
    console.log(req.body);
    res.render('index', {
        tabChoose: 0,
        data: '提交成功'
    })
});

/*@brief GET comment page
 *render comment.ejs
 */
router.get('/comment', function(req, res, next) {
    res.render('comment', {
        tabChoose: 2
    });
});

/*@brief GET search page
 *render search.ejs
 */
router.get('/search', function(req, res, next) {
    res.render('searchHotel', {
        tabChoose: 1
    });
});

router.get('/test', function(req, res, next) {
    res.render('a2', {
        tabChoose: 2
    })
})

module.exports = router;
