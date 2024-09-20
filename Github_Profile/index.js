let userName = document.getElementById("userName")
let btn = document.getElementById("btn")
let userImg = document.getElementById("userImg")
let user = document.getElementById('user')
let userDetails = document.querySelectorAll('.userDetails')
let repos = document.querySelector('.repos')


let url = `https://api.github.com/users/`
let reposURL = ''

async function API() {
  let name = userName.value
  
  if(name==''){
    alert('No record found')
    repos.innerHTML=''
    user.innerHTML="Check Spelling..."
  }
  else{
  let response = await fetch(url+name)
  // console.log(response)
  let result = await response.json()
  // console.log(result)
  if(response.status===404){
    repos.innerHTML=''
    alert('No record found Check for the spelling !!!')
  }
  repos.innerHTML=''
  user.innerHTML = result.login
  userDetails[0].innerHTML = 'Followers :- ' + result.followers
  userDetails[1].innerHTML = 'Following :- ' + result.following
  userDetails[2].innerHTML = 'No. of Repos :- ' + result.public_repos  

  userImg.src=result.avatar_url

  reposURL = result.repos_url;

  allRepos()
  
  }
}

btn.addEventListener('click',API)


async  function allRepos(){
  let response = await fetch(reposURL)
  // console.log(response)
  let result = await response.json()
  // console.log(result)
  result.forEach(element => {
    // console.log(element)
    let reposLink = document.createElement('a')
    reposLink.classList.add('repo')
    reposLink.href=element.html_url
    reposLink.innerHTML=element.name
    reposLink.target='_blank'
    repos.append(reposLink)
  });
}
