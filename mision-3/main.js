async function obtenerInfoUsuarioGitHub() {
  try {
    const resp = await fetch('https://api.github.com/users/EdwardbotA')
    const {login, name, followers, repos_url} = await resp.json()
    const resp2 = await fetch(repos_url)
    const repos = await resp2.json()

    
    console.log({name, login, followers, repos});
    return {name, login, followers, repos}
  } catch (error) {
    throw new Error('No se pudo conectar ' + error)
  }

}
obtenerInfoUsuarioGitHub()