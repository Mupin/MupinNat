var yo = require('yo-yo');

module.exports = function layout (content) {
	return yo `
	<div>
		<nav class="header">
			<div class="nav-wrapper">
				<div class="container">
					<div class="row">
						<div class="col s10 m6">
							<a href="/" class="brand-logo platzigram">Mupiñ</a>				
						</div>
						<div class="col s2 m6 right-align">
							<a href="/" class="btn btn-large btn-flat dropdown-button icn-log" data-activates="drop-user">
								<i class="fa fa-user-circle-o" aria-hidden="true"></i>
							</a>
							<ul id="drop-user" class="dropdown-content">
								<li><a href="#">Salir</a></li>
							</ul>				
						</div>
					</div>
				</div>
			</div>
		</nav>
		<div class="content">
			${content}
		</div>
	</div>`;
}
