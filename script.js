const alert = document.querySelector('.alert')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const name = data.get('name')
    const alias = data.get('alias')
    const film = data.get('film')
    const screem = data.get('screem')

    let counter = 0

    name.toLowerCase().match(/катя|екатерина|катерина/) ? counter++ : console.log('Жесть забыла свое имя :(')
    alias.toLowerCase().match(/китик/) ? counter++ : console.log('Нет, не так называю :(')
    film.toLowerCase().match(/зеленая|зелёная/) ? counter++ : console.log('Так внимательно ты смотрела, да???')
    screem.toLowerCase() ? console.log(`хм... почему на крик ты написала это - ${screem}?`) : console.log('Жесть игнорит крик')

    if(counter === 3) {
        alert.textContent = 'Ты молодец, жди...'
        setTimeout(() => window.location.href = 'success.html', 5000);
    } else {
        form.reset()
        alert.textContent = 'Чето неправильно... F12'
    }
    
});