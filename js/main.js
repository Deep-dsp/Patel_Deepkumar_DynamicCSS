(()=> {

	//make an AJAX request using the Fetch API
	fetch('./Data/dataSet.json')
	.then(res => res.json())
	.then(data => {
        debugger;
		//console.log(data);

		//handle data
        //here's where you would call the function that puts the pieces on the page
        handleData(data);
    })
    
    function handleData(data)
    {
        let courseName = document.querySelector('.profPanelText .text-muted'),
            profname = document.querySelector('.profPanelText .profName'),
            time = document.querySelector('.profPanelText .list-inline');

            courseName.innerHTML = data.coursename + "-" +'<span class="text-primary">' + data.coursecode +"</span>";
            profname.innerHTML = "Professor - "+data.profname;
            time.innerHTML = "<li>" + "&#128338;" + data.classtime[0] + "</li>" + "<li>" + "&#128338;" + data.classtime[1] + "</li>"

    }

})();
