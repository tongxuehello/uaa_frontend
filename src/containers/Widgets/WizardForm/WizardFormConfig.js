export var wizardFormConfig = { // <----- THIS IS THE IMPORTANT PART!
	form: 'wizard',                           // a unique name for this form
	fields: [ 'reportName', 'reportType', 'reportDiscription', 'gender', 'age', 'region', 'wordSelect'], // all the fields in your form
	destroyOnUnmount: false,     // <------ preserve form data
	initialValues: {
		reportName: '测试报告',
		reportType: 'normal',
		reportDiscription: '测试内容',
		gender: ['all'],
		age: ['-18','19-24'],
		wordSelect: 'all'
	}
}