module.exports = () => {
	let googleUser = {};
	const startApp = function () {
		gapi.load('auth2', function () {
			// Retrieve the singleton for the GoogleAuth library and set up the client.
			auth2 = gapi.auth2.init({
				client_id: '453714535618-b9cq9curc3k2q6f84mktbpu5c3056pfi.apps.googleusercontent.com',
				cookiepolicy: 'single_host_origin',
			});
			attachSignin(document.getElementById('customBtn'));
		});
	};

	const attachSignin = (element) => {
		auth2.attachClickHandler(element, {},
			function (googleUser) {
				console.log(googleUser.w3.Paa);
				document.getElementById('name').innerHTML = "<a href='thongtin.html'><span>" + googleUser.getBasicProfile().getName() + "</span><span>Quản lý tài khoản</span></a>";

				document.getElementById('google-image-user').innerHTML = "<img src=" + googleUser.w3.Paa + ">"
				document.getElementById('login-popup').remove()
			},
			function (error) {
				alert(JSON.stringify(error, undefined, 2));
			});
	};

	(() => {
		startApp();
	})();
};