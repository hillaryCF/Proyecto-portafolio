
let commit = document.querySelector('.commit-github');
let date = document.querySelector('.date-github');


fetch('https://api.github.com/users/hillaryCF/events')
	.then((data)=> data.json())
	.then((json)=> githubActivity(json))
	

function githubActivity(data) {
		for (let i = 0; i < 5;) {
			let date = data[0].created_at.split('-');
			let newDate=(`${date[0]}/${date[1]}`);
			const container = document.getElementById('contaier-github');
			const nameGit =document.createElement('h2');
			nameGit.setAttribute('data-index',i);
			container.appendChild(nameGit);
			nameGit.innerText = data[i].repo.name;
			const commitGit = document.createElement('p');
			commitGit.setAttribute('data-index',i);
			container.appendChild(commitGit);
			commitGit.innerText = data[i].payload.commits[i].message;
			const dateGit = document.createElement('p');
			dateGit.setAttribute('class','date-git');
			dateGit.setAttribute('data-index',i);
			container.appendChild(dateGit);
			dateGit.innerText = newDate;
			i++
}};
