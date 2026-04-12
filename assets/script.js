function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        window.scrollTo(0, 0);
    }
}

function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const toggle = element.querySelector('.faq-toggle');
    answer.classList.toggle('open');
    toggle.classList.toggle('open');
}

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Teşekkürler ${name}! Mesajınız başarıyla gönderildi. 🎉`);
    event.target.reset();
}