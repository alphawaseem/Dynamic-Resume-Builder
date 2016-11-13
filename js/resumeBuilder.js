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
		"description": "Read: In the name of your Lord Who creates, creates man from a clot. Read: And your Lord is the Most Bounteous, Who teaches by the use of the pen, teaches man that which he knew not."
	}, {
		"employer": "Udacity",
		"title": "Web Developer",
		"location": "Mumbai",
		"dates": "2016/06/1-2016/12/31",
		"description": "(God is) the One Who has made for you the earth like a cradle and inserted roads into it for you. He sent water down from the sky and thereby We brought forth pairs of plants, each separate from the other. Eat! Pasture your cattle! Verily in this are Signs for people endued with intelligence."
	}],
	"showJobs": function(){
		$("#workExperience").append(HTMLworkStart);
		 this.jobs.forEach(function(job) {
			
			let employer = job.employer;
			let title = job.title;
			let date = job.dates;
			let location = job.location;
			let description = job.description;

			let formattedLocation = HTMLworkLocation.replace("%data%",location);
			let formattedDescription = HTMLworkDescription.replace("%data%",description);
			let formattedDate = HTMLworkDates.replace("%data%",date);
			let formattedEmployer = HTMLworkEmployer.replace("%data%",employer);
			let formattedTitle =  HTMLworkTitle.replace("%data%",title);
			$(".work-entry:last").append(formattedEmployer+formattedTitle);
			$(".work-entry").append(formattedDate);
			$(".work-entry").append(formattedLocation);
			$(".work-entry").append(formattedDescription);
		});
	}
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
	"welcomeMessage": "Peace be upon you.",
	"biopic": "./images/waseem-ahmed.jpg",
	"contacts": {
		"mobile": "+91 767 642 4299",
		"email": "alphawaseem@gmail.com",
		"github": "alphawaseem",
		"twitter": "@alphawaseem",
		"location": "Hassan, Karnataka, India"
	},
	"skills": skills,

	"showBioInfo" : function() {

		let formattedRole = HTMLheaderRole.replace("%data%",this.role);
		$("#header").prepend(formattedRole); 
		let formattedName = HTMLheaderName.replace("%data%",inName(this.name));
		$("#header").prepend(formattedName); 

		let formattedMessage = HTMLwelcomeMsg.replace("%data%",this.welcomeMessage)
		$("#header").append(formattedMessage);

		let formattedPicUrl = HTMLbioPic.replace("%data%",this.biopic);
		$("#header").append(formattedPicUrl);

		
	},
	"showContactInfo" : function(id) {
		let formattedMobile = HTMLmobile.replace("%data%",this.contacts.mobile);
		let formattedEmail = HTMLemail.replace("%data%",this.contacts.email);
		let formattedGithub = HTMLgithub.replace("%data%",this.contacts.github);
		let formattedTwitter = HTMLtwitter.replace("%data%",this.contacts.twitter);
		let formattedLocation = HTMLlocation.replace("%data%",this.contacts.location)
		$("#"+id+":last").append(formattedMobile);
		$("#"+id+":last").append(formattedEmail);
		$("#"+id+":last").append(formattedGithub);
		$("#"+id+":last").append(formattedTwitter);
		$("#"+id+":last").append(formattedLocation);

	},
	"showSkills" : function() {
		$("#header").append(HTMLskillsStart);
		this.skills.forEach(function(skill) {
			let formattedSkill = HTMLskills.replace("%data%",skill);
			$("#skills:last").append(formattedSkill);
		});
	}

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

function inName(fullName){
	fullName = fullName.split(' ');
	let firstName = fullName[0];
	let secondName = fullName[1].toUpperCase();
	firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1).toLowerCase();

	return firstName + " " + secondName;
}



function showMap(){
	$("#mapDiv").append(googleMap);	
}
bio.showBioInfo();
bio.showContactInfo("topContacts");
bio.showSkills();
work.showJobs();
bio.showContactInfo("footerContacts");
showMap();