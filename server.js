const Express = require('express'), 
			App = Express();

let port = process.env.PORT || 3000;

App.use((req,res,next) => {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	}
	else{
		next();
	}
})

App.use(Express.static('public'));

App.listen(port, function () {
  console.log('Express server is up on port' + port);
});
