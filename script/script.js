const redesSociais = {
  github: 'Adrianosgs',
  instagram: 'Adrianosgs',
  youtube: 'maykbrito',
  facebook: 'AdrianoSantos',
  twitter: 'Adriano41018652'
}

function integrarUrl() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${redesSociais[social]}`
  }
}

integrarUrl()

function getProfileGithub() {
  const url = `https://api.github.com/users/${redesSociais.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getProfileGithub()
