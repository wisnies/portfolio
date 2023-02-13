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
                en: 'Self taught, ambition driven. Always lookig learn to and improve.',
                pl: 'Ambitny samouk, zawsze chętny do nauki i rozwoju umiejętności',
            },
            skillsTitle: { en: 'What I can do', pl: 'Co potrafię' },
        },
        projects: {
            nextBtn: {
                en: 'next project',
                pl: 'następny projekt',
            },
            prevBtn: {
                en: 'previous project',
                pl: 'poprzedni projekt',
            },
        },
        contact: {
            title: { en: 'Contact me', pl: 'Dane kontaktowe' },
        },
    },
};
const projects = [
    {
        title: 'Skin Care (work in progress)',
        year: 2023,
        deployed: 'https://skin-care-wfe2-n21g3ihuw-mateuszwisniewskikonto-gmailcom.vercel.app/',
        githubRepo: null,
        tags: [
            'Next.js',
            'React.js',
            'styled-components',
            'joi',
            'Prisma',
            'typescript',
            'RWD',
        ],
    },
    {
        title: 'Feast BBQ',
        year: 2023,
        deployed: 'https://feast-6ce2tes3j-mateuszwisniewskikonto-gmailcom.vercel.app/',
        githubRepo: 'https://github.com/wisnies/feast',
        tags: [
            'Next.js',
            'React.js',
            'React.js Context',
            'styled-components',
            'joi',
            'Prisma',
            'typescript',
            'RWD',
            'webpack',
        ],
    },
    {
        title: 'Tic Tac Toe',
        year: 2023,
        deployed: 'https://wisnies.github.io/tic-tac-toe/',
        githubRepo: 'https://github.com/wisnies/tic-tac-toe',
        tags: [
            'React.js',
            'React.js Context',
            'react-router-dom',
            'typescript',
            'sass',
            'RWD',
            'webpack',
        ],
    },
    {
        title: 'Infinite Feed',
        year: 2023,
        deployed: 'https://wisnies.github.io/infinite-feed/',
        githubRepo: 'https://github.com/wisnies/infinite-feed',
        tags: [
            'React.js',
            'React.js Context',
            'react-query',
            'react-router-dom',
            'typescript',
            'sass',
            'RWD',
        ],
    },
];
class App {
    constructor() {
        this.copyToClipboard = (e) => {
            const target = e.target;
            const value = target.dataset.value;
            navigator.clipboard.writeText(value);
            alert(`Copied : ${value}`);
        };
        this.handleTransitionEnd = () => {
            const { slider } = this.DOM.projectsPage;
            if (this.direction === -1) {
                slider.appendChild(slider.firstElementChild);
            }
            else {
                slider.prepend(slider.lastElementChild);
            }
            slider.style.transition = 'none';
            slider.style.transform = 'translateY(0)';
            setTimeout(() => {
                slider.style.transition = 'all 0.5s ease';
            });
        };
        this.handleNextSlide = () => {
            const { carousel, slider } = this.DOM.projectsPage;
            if (this.direction === 1) {
                slider.prepend(slider.lastElementChild);
                this.direction = -1;
            }
            carousel.style.justifyContent = 'flex-start';
            slider.style.transform = `translateY(-${100 / this.projects.length}%)`;
        };
        this.handlePrevSlide = () => {
            const { carousel, slider } = this.DOM.projectsPage;
            if (this.direction === -1) {
                slider.appendChild(slider.firstElementChild);
                this.direction = 1;
            }
            carousel.style.justifyContent = 'flex-end';
            slider.style.transform = `translateY(${100 / this.projects.length}%)`;
        };
        this.updateDOM = (locale) => {
            this.DOM.theme.darkBtnText.innerText = this.locale.themes.dark[locale];
            this.DOM.theme.lightBtnText.innerText = this.locale.themes.light[locale];
            this.DOM.nav.items.forEach((i) => {
                i.innerText = this.locale.nav[i.dataset.target][locale];
            });
            this.DOM.pageTitle.innerText =
                this.locale.pageTitle[this.currentPage][locale];
            this.DOM.aboutPage.title.innerText = this.locale.pages.about.title[locale];
            this.DOM.aboutPage.desc.innerText = this.locale.pages.about.desc[locale];
            this.DOM.aboutPage.skillsTitle.innerText =
                this.locale.pages.about.skillsTitle[locale];
            this.DOM.contactPage.title.innerText =
                this.locale.pages.contact.title[locale];
            this.DOM.projectsPage.nextBtn.innerText =
                this.locale.pages.projects.nextBtn[locale];
            this.DOM.projectsPage.prevBtn.innerText =
                this.locale.pages.projects.prevBtn[locale];
        };
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
            const target = li.dataset.target;
            const { pages, nav: { items }, } = this.DOM;
            const currentLi = items.filter((l) => l.classList.contains('active'))[0];
            const currentPage = pages.filter((p) => p.classList.contains('active'))[0];
            const nextPage = pages.filter((p) => p.dataset.page === target)[0];
            const currentOvClass = `app__background_overlay--${currentPage.dataset.page}`;
            const nextOvClass = `app__background_overlay--${target}`;
            this.currentPage = target;
            currentLi.classList.remove('active');
            li.classList.add('active');
            this.DOM.pageTitle.classList.add('fadeOutAndIn');
            currentPage.classList.remove('active');
            currentPage.classList.add('fadeOut');
            nextPage.classList.add('active');
            this.DOM.overlay.classList.remove(currentOvClass);
            this.DOM.overlay.classList.add(nextOvClass);
            setTimeout(() => {
                this.DOM.pageTitle.innerText =
                    this.locale.pageTitle[target][this.currentLocale];
                currentPage.classList.remove('fadeOut');
            }, 200);
            setTimeout(() => {
                this.DOM.pageTitle.classList.remove('fadeOutAndIn');
            }, 400);
        };
        this.changeLocale = (e) => {
            const btn = e.target;
            if (btn.classList.contains('active'))
                return;
            const { enBtn, plBtn } = this.DOM.locale;
            const target = btn.dataset.target;
            if (btn.dataset.target === 'en') {
                plBtn.classList.remove('active');
                enBtn.classList.add('active');
                // update dom
            }
            else {
                plBtn.classList.add('active');
                enBtn.classList.remove('active');
                // update dom
            }
            this.updateDOM(target);
            this.currentLocale = target;
        };
        this.createProject = (data) => {
            const project = document.createElement('article');
            project.classList.add('project');
            project.style.flexBasis = `${100 / this.projects.length}%`;
            const titleContainer = document.createElement('div');
            titleContainer.classList.add('project__title_container');
            const title = document.createElement('a');
            title.classList.add('project__title');
            title.textContent = data.title;
            title.href = data.deployed;
            title.target = '_blank';
            title.rel = 'norefferer';
            const year = document.createElement('span');
            year.classList.add('project__title_year');
            year.textContent = `${data.year}`;
            titleContainer.appendChild(year);
            titleContainer.prepend(title);
            const tagsContainer = document.createElement('div');
            tagsContainer.classList.add('tag__container');
            setTimeout(() => {
                data.tags.forEach((t) => {
                    const tag = document.createElement('span');
                    tag.classList.add('tag');
                    tag.textContent = t;
                    tagsContainer.appendChild(tag);
                });
            });
            project.appendChild(titleContainer);
            project.appendChild(tagsContainer);
            if (data.githubRepo) {
                const githubLink = document.createElement('a');
                githubLink.classList.add('project__link');
                githubLink.textContent = 'github repo';
                githubLink.href = data.githubRepo;
                project.appendChild(githubLink);
            }
            return project;
        };
        this.setupCarousel = () => {
            this.DOM.projectsPage.slider.style.height = `${100 * this.projects.length}%`;
            const projects = this.projects.map((p) => this.createProject(p));
            projects.forEach((p) => this.DOM.projectsPage.slider.appendChild(p));
        };
        this.drawOverlay = () => {
            for (let i = 0; i < 50; i++) {
                const strip = document.createElement('div');
                strip.classList.add('strip');
                strip.classList.add(`strip-${i}`);
                const inner = document.createElement('div');
                inner.classList.add('strip__inner');
                const fill = document.createElement('div');
                fill.classList.add('strip__fill');
                strip.appendChild(fill);
                strip.appendChild(inner);
                if (i > 4 && i <= 20) {
                    strip.classList.add('strip--top');
                }
                if (i > 20 && i <= 28) {
                    strip.classList.add('strip--middle');
                }
                if (i > 28 && i <= 40) {
                    strip.classList.add('strip--bottom');
                }
                this.DOM.overlay.appendChild(strip);
            }
        };
        this.setupApp = () => {
            this.DOM.theme.container.addEventListener('click', this.changeTheme);
            this.DOM.locale.container.addEventListener('click', this.changeLocale);
            this.DOM.nav.container.addEventListener('click', this.changePage);
            this.DOM.contactPage.emailBtn.addEventListener('click', this.copyToClipboard);
            this.DOM.contactPage.mobileBtn.addEventListener('click', this.copyToClipboard);
            this.DOM.projectsPage.nextBtn.addEventListener('click', this.handleNextSlide);
            this.DOM.projectsPage.prevBtn.addEventListener('click', this.handlePrevSlide);
            this.DOM.projectsPage.slider.addEventListener('transitionend', this.handleTransitionEnd);
            this.updateDOM('en');
            this.setupCarousel();
            this.drawOverlay();
            if (window.TouchEvent) {
                window.addEventListener('touchstart', (e) => {
                    this.initialY = e.targetTouches[0].clientY;
                    this.isMoving = true;
                });
                window.addEventListener('touchmove', (e) => {
                    if (this.isMoving) {
                        const currentY = e.targetTouches[0].clientY;
                        const diff = currentY - this.initialY;
                        if (diff >= 10) {
                            this.isMoving = false;
                            this.handlePrevSlide();
                            return;
                        }
                        if (diff <= -10) {
                            this.isMoving = false;
                            this.handleNextSlide();
                            return;
                        }
                    }
                });
                window.addEventListener('touchend', () => {
                    this.isMoving = false;
                });
            }
            window.addEventListener('mousedown', (e) => {
                this.initialY = e.pageY;
                this.isMoving = true;
            });
            window.addEventListener('mousemove', (e) => {
                if (this.isMoving) {
                    const currentY = e.pageY;
                    const diff = currentY - this.initialY;
                    if (diff >= 40) {
                        this.isMoving = false;
                        this.handlePrevSlide();
                        return;
                    }
                    if (diff <= -40) {
                        this.isMoving = false;
                        this.handleNextSlide();
                        return;
                    }
                }
            });
            window.addEventListener('mouseup', () => {
                this.isMoving = false;
            });
        };
        this.DOM = {
            body: document.querySelector('body'),
            overlay: document.querySelector('.app__background_overlay'),
            theme: {
                container: document.querySelector('.app__theme'),
                darkBtn: document.querySelector('#darkThemeBtn'),
                darkBtnText: document.querySelector('.theme__btn_text--dark'),
                lightBtn: document.querySelector('#lightThemeBtn'),
                lightBtnText: document.querySelector('.theme__btn_text--light'),
            },
            locale: {
                container: document.querySelector('.app__locale'),
                enBtn: document.querySelector('#enBtn'),
                plBtn: document.querySelector('#plBtn'),
            },
            nav: {
                container: document.querySelector('.nav'),
                items: Array.from(document.querySelectorAll('.nav__list_item')),
            },
            pageTitle: document.querySelector('#pageTitle'),
            pages: Array.from(document.querySelectorAll('.page')),
            aboutPage: {
                title: document.querySelector('.title--ab'),
                desc: document.querySelector('.desc--ab'),
                skillsTitle: document.querySelector('.skillsTitle--ab'),
            },
            contactPage: {
                title: document.querySelector('.title--c'),
                emailBtn: document.querySelector('.copy__btn--email'),
                mobileBtn: document.querySelector('.copy__btn--mobile'),
            },
            projectsPage: {
                carousel: document.querySelector('.project__carousel'),
                slider: document.querySelector('.project__carousel_slider'),
                prevBtn: document.querySelector('.project__carousel_btn--prev'),
                nextBtn: document.querySelector('.project__carousel_btn--next'),
            },
        };
        this.locale = locale;
        this.currentLocale = 'en';
        this.currentPage = 'home';
        this.direction = -1;
        this.projects = projects;
        this.initialY = null;
        this.isMoving = false;
    }
}
const app = new App();
app.setupApp();
