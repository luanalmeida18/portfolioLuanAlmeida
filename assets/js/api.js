async function fetchProfileData() {
  const url = 'https://raw.githubusercontent.com/luanalmeida18/portfolioLuanAlmeida/master/data/profile.json';
  const response = await fetch(url)
  const profileData = await response.json()
  return profileData
}