alert = config.alerteanabled
alertext = config.alertext

// lots of code
helpers:{
alertenabled: alert,
alerttext: alertext

		{{#if helpers.alertEnabled}}
			<div>{{helpers.alertinfo}}</div>
			{{foo}}
		{{/if}}

}