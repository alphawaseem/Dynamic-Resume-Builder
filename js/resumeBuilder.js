/*
This is empty on purpose! Your code to build the resume will go here.
 */
// let name = "Waseem Ahmed";
// let role = "Web Developer";
let skills = ["HTML5","CSS3","Javascript","JQuery","Python","Java","Android"];
// let formattedName = HTMLheaderName.replace("%data%",name);
// let formattedRole = HTMLheaderRole.replace("%data%",role);

//  $("#header").prepend(formattedRole); 
//  $("#header").prepend(formattedName); 

// work object
let work = {
	"jobs": [{
		"employer": "Google",
		"title": "Android Developer",
		"location": "Bangalore",
		"dates": "2016/01/01-2016/06/31",
		"description": "Android Developer at Google"
	}, {
		"employer": "Udacity",
		"title": "Web Developer",
		"location": "Mumbai",
		"dates": "2016/06/1-2016/12/31",
		"description": "Full Stack Web Developer at Udacity"
	}, {
		"employer": "Self Employed",
		"title": "Android and Web Developer",
		"location": "Remote",
		"dates": "2017/01/01-Present",
		"description": "Working as freelancer on Android and Web projects"
	}]
} // end of work object

// projects object
let projects = {
	"projects": [{
		"title": "",
		"dates": "",
		"description": "",
		"images": ["url1", "url2", "url3"]
	}, {
		"title": "",
		"dates": "",
		"description": "",
		"images": ["url1", "url2", "url3"]
	}, {
		"title": "",
		"dates": "",
		"description": "",
		"images": ["url1", "url2", "url3"]
	}]
} // end of projects

// bio object
let bio = {
	"name": "Waseem Ahmed",
	"role": "Web Developer",
	"welcomeMessage": "",
	"biopic": "./images/waseem-ahmed.jpg",
	"contacts": {
		"mobile": "+91 767 642 4299",
		"email": "alphawaseem@gmail.com",
		"github": "alphawaseem",
		"twitter": "@alphawaseem",
		"location": "Hassan, Karnataka, India"
	},
	"skills": skills
} // end of bio object

// education object
let education = {
	"schools": [{
		"name": "",
		"location": "",
		"degree": "",
		"dates": "",
		"url": "url of school",
		"majors": ["Major 1", "Major 2"]
	}, {
		"name": "",
		"location": "",
		"degree": "",
		"dates": "",
		"url": "url of school",
		"majors": ["Major 1", "Major 2"]
	}, {
		"name": "",
		"location": "",
		"degree": "",
		"dates": "",
		"url": "url of school",
		"majors": ["Major 1", "Major 2"]
	}],

	"onlineCourses": [{
		"title": "",
		"school": "",
		"dates": "",
		"url": ""
	}, {
		"title": "",
		"school": "",
		"dates": "",
		"url": ""
	}, {
		"title": "",
		"school": "",
		"dates": "",
		"url": ""
	}]
} // end of education object

function showName() {
	if( bio.name) {
		let formattedName = HTMLheaderName.replace("%data%",bio.name);
		$("#header").prepend(formattedName); 
	}
}

function showRole() {
	if( bio.role) {
		let formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		$("#header").prepend(formattedRole); 
	}
}

function showJobs() {
	
	for(jobIndex in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		let employer = work.jobs[jobIndex].employer;
		let title = work.jobs[jobIndex].title;
		let formattedEmployer = HTMLworkEmployer.replace("%data%",employer);
		let formattedTitle =  HTMLworkTitle.replace("%data%",title);

		$(".work-entry:last").append(formattedEmployer+formattedTitle);
	}	
}
function showPic() {
	let formattedPicUrl = HTMLbioPic.replace("%data%",bio.biopic);
	$("#header").append(formattedPicUrl);
}
function showContactInfo(){
	let formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	let formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	let formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	let formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	let formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location)
	$("#topContacts:last").append(formattedMobile);
	$("#topContacts:last").append(formattedEmail);
	$("#topContacts:last").append(formattedGithub);
	$("#topContacts:last").append(formattedTwitter);
	$("#topContacts:last").append(formattedLocation);

}
showPic();
showRole();
showName();
showContactInfo();
showJobs();
