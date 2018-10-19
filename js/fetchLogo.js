loadLogo = () => {

const URL = 'https://preview.ibb.co/n0YRaf/logo.jpg'

fetch(URL).then(
    data => {
        sessionStorage.setItem('logoURL',data.url)
        let source = sessionStorage.getItem('logoURL')
        document.getElementById('logo').href = source;
    }
).catch(console.error())

console.log('source fetched!')
}