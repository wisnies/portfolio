const locale = {
    pageTitle: {
        home: { en: 'portfolio', pl: 'portfolio' },
        about: { en: 'about me', pl: 'o mnie' },
        projects: { en: 'projects', pl: 'projekty' },
        contact: { en: 'contact', pl: 'kontakt' },
    },
    nav: {
        home: { en: 'home', pl: 'strona główna' },
        about: { en: 'about me', pl: 'o mnie' },
        projects: { en: 'projects', pl: 'projekty' },
        contact: { en: 'contact', pl: 'kontakt' },
    },
    themes: {
        dark: { en: 'dark', pl: 'ciemny' },
        light: { en: 'light', pl: 'jasny' },
    },
    pages: {
        about: {
            title: { en: 'Who am I', pl: 'Kim jestem' },
            desc: {
                en: 'Self tought, ambition driven. Always lookig learn and improve.',
                pl: 'Ambitny samouk, zawsze chętny do nauki i rozwoju umiejętności',
            },
            skillsTitle: { en: 'What I can do', pl: 'Co mogę robić' },
        },
        contact: {
            title: { en: 'Contact me', pl: 'Dane kontaktowe' },
        },
    },
};
class App {
    constructor() {
        this.changeTheme = (e) => {
            const btn = e.target;
            if (btn.classList.contains('active'))
                return;
            const { darkBtn, lightBtn } = this.DOM.theme;
            if (btn.id === 'lightThemeBtn') {
                darkBtn.classList.remove('active');
                lightBtn.classList.add('active');
                this.DOM.body.classList.add('light');
            }
            else {
                darkBtn.classList.add('active');
                lightBtn.classList.remove('active');
                this.DOM.body.classList.remove('light');
            }
        };
        this.changePage = (e) => {
            const li = e.target;
            if (li.classList.contains('active'))
                return;
            const { pages, nav: { items }, } = this.DOM;
            const currentLi = items.filter((l) => l.classList.contains('active'))[0];
            const currentPage = pages.filter((p) => p.classList.contains('active'))[0];
            const target = li.dataset.target;
            const nextPage = pages.filter((p) => p.dataset.page === target)[0];
            currentLi.classList.remove('active');
            li.classList.add('active');
            this.DOM.pageTitle.innerText =
                this.locale.pageTitle[target][this.currentLocale];
            currentPage.classList.remove('active');
            currentPage.classList.add('fadeOut');
            nextPage.classList.add('active');
            setTimeout(() => {
                currentPage.classList.remove('fadeOut');
            }, 200);
        };
        this.changeLocale = (newLocale) => {
            this.currentLocale = newLocale;
        };
        this.setupApp = () => {
            this.DOM.theme.container.addEventListener('click', this.changeTheme);
            this.DOM.nav.container.addEventListener('click', this.changePage);
        };
        this.DOM = {
            body: document.querySelector('body'),
            theme: {
                container: document.querySelector('.app__theme'),
                darkBtn: document.querySelector('#darkThemeBtn'),
                lightBtn: document.querySelector('#lightThemeBtn'),
            },
            nav: {
                container: document.querySelector('.nav'),
                items: Array.from(document.querySelectorAll('.nav__list_item')),
            },
            pageTitle: document.querySelector('#pageTitle'),
            pages: Array.from(document.querySelectorAll('.page')),
        };
        this.locale = locale;
        this.currentLocale = 'en';
    }
}
const app = new App();
app.setupApp();
