const Express = require('express'), 
			App = Express();

let port = process.env.PORT || 3000;

App.use((req,res,next) => {
	if (req.headers['x-forwarded-proto'] === 'http') {
		next();
	}
	else{
		res.redirect('http://' + req.hostname + req.url);
	}
})

App.use(express.static('public'));

App.listen(port, function () {
  console.log('Express server is up on port' + port);
});
