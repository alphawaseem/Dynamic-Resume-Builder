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
	"display": function(){
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
		"title": "My Awosome Project",
		"dates": "2016-07-01",
		"description": "(God) is the One who spread out the earth and set therein mountains standing firm and rivers. For every fruit He placed two of a pair. He covers the day with the night. Verily in this there are Signs for people who reflect.",
		"images": ["./images/p1.jpg", "./images/p2.jpg", "./images/p3.jpg"]
	}, {
		"title": "My Another Great Project",
		"dates": "2016-08-10",
		"description": "And it is We who have constructed the heaven with might, and verily, it is We who are steadily expanding it.",
		"images": ["./images/p1.jpg", "./images/p2.jpg", "./images/p3.jpg"]
	}],
	"display": function() {
		$("#projects").append(HTMLprojectStart);
		this.projects.forEach(function(project){
			$(".project-entry").append(HTMLprojectTitle.replace("%data%",project.title));
			$(".project-entry").append(HTMLprojectDates.replace("%data%",project.dates));
			$(".project-entry").append(HTMLprojectDescription.replace("%data%",project.description));
			project.images.forEach(function(image){
				$(".project-entry").append(HTMLprojectImage.replace("%data%",image));
			})
		});
	}
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
	},
	"display" : function() {
		this.showBioInfo();
		bio.showContactInfo("topContacts");
		bio.showContactInfo("footerContacts");		
		this.showSkills();
	}

} // end of bio object

// education object
let education = {
	"schools": [{
		"name": "St. Joseph P.U College",
		"location": "Hassan,Karnataka,India",
		"degree": "12th grade",
		"dates": "2012-2014",
		"url": "stjosephassan.com",
		"majors": ["Physics","Chemistry","Maths","Computer Science"]
	}, {
		"name": "N.D.R.K Institute of Technology",
		"location": "Kandali,Hassan,Karnataka",
		"degree": "B.E",
		"dates": "2014-present",
		"url": "ndrkit.ac.in",
		"majors": ["Computer Science"]
	}
	],

	"onlineCourses": [{
		"title": "Developing Android Apps",
		"school": "Udacity",
		"dates": "2016-07-01",
		"url": "www.udacity.com"
	}, {
		"title": "Into to HTML5 and CSS3",
		"school": "Udacity",
		"dates": "2016-07-01",
		"url": "www.udacity.com"
	}],

	"showSchools" : function() {
		$("#education").append(HTMLschoolStart);
		this.schools.forEach(function(school){
			
			let name = HTMLschoolName.replace("%data%",school.name);
			let degree = HTMLschoolDegree.replace("%data%",school.degree);
			$(".education-entry").append(name+degree);


			let date = HTMLschoolDates.replace("%data%",school.dates);
			$(".education-entry").append(date);

			let location = HTMLschoolLocation.replace("%data%",school.location);
			$(".education-entry").append(location);

			school.majors.forEach(function(major){
				
				$(".education-entry").append(HTMLschoolMajor.replace("%data%",major));
			})	
			
		});
	},

	"showOnlineSchools" : function() {
		$(".education-entry").append(HTMLonlineClasses);
		this.onlineCourses.forEach(function(course){
			let title = HTMLonlineTitle.replace("%data%",course.title);
			let school = HTMLonlineSchool.replace("%data%",course.school);
			$(".education-entry").append(title+school);

			let date = HTMLonlineDates.replace("%data%",course.dates);
			$(".education-entry").append(date);

			let url = HTMLonlineURL.replace("%data%",course.url);
			$(".education-entry").append(url);
		});
	},
	"display" : function() {
		this.showSchools();
		this.showOnlineSchools();
	}
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


bio.display();
work.display();
projects.display();
education.display();