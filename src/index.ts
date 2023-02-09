type Locale = {
  pageTitle: {
    home: { en: string; pl: string };
    about: { en: string; pl: string };
    projects: { en: string; pl: string };
    contact: { en: string; pl: string };
  };
  nav: {
    home: { en: string; pl: string };
    about: { en: string; pl: string };
    projects: { en: string; pl: string };
    contact: { en: string; pl: string };
  };
  themes: {
    dark: { en: string; pl: string };
    light: { en: string; pl: string };
  };
  pages: {
    about: {
      title: { en: string; pl: string };
      desc: { en: string; pl: string };
      skillsTitle: { en: string; pl: string };
    };
    contact: {
      title: { en: string; pl: string };
    };
  };
};

const locale: Locale = {
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

interface IApp {
  DOM: {
    body: HTMLBodyElement;
    theme: {
      container: HTMLDivElement;
      darkBtn: HTMLButtonElement;
      lightBtn: HTMLButtonElement;
    };
    nav: {
      container: HTMLElement;
      items: HTMLLIElement[];
    };
    pageTitle: HTMLHeadingElement;
    pages: HTMLElement[];
  };
  locale: Locale;
  currentLocale: 'en' | 'pl';
  changeTheme: (e: MouseEvent) => void;
  changePage: (e: MouseEvent) => void;
  changeLocale: (locale: 'en' | 'pl') => void;

  setupApp: () => void;
}

class App implements IApp {
  DOM;

  locale;

  currentLocale: 'en' | 'pl';

  constructor() {
    this.DOM = {
      body: document.querySelector('body') as HTMLBodyElement,
      theme: {
        container: document.querySelector('.app__theme') as HTMLDivElement,
        darkBtn: document.querySelector('#darkThemeBtn') as HTMLButtonElement,
        lightBtn: document.querySelector('#lightThemeBtn') as HTMLButtonElement,
      },
      nav: {
        container: document.querySelector('.nav') as HTMLDivElement,
        items: Array.from(
          document.querySelectorAll(
            '.nav__list_item'
          ) as NodeListOf<HTMLLIElement>
        ),
      },
      pageTitle: document.querySelector('#pageTitle') as HTMLHeadingElement,
      pages: Array.from(
        document.querySelectorAll('.page') as NodeListOf<HTMLDivElement>
      ),
    };
    this.locale = locale;
    this.currentLocale = 'en';
  }

  public changeTheme = (e: MouseEvent) => {
    const btn = e.target as HTMLButtonElement;

    if (btn.classList.contains('active')) return;
    const { darkBtn, lightBtn } = this.DOM.theme;
    if (btn.id === 'lightThemeBtn') {
      darkBtn.classList.remove('active');
      lightBtn.classList.add('active');
      this.DOM.body.classList.add('light');
    } else {
      darkBtn.classList.add('active');
      lightBtn.classList.remove('active');
      this.DOM.body.classList.remove('light');
    }
  };

  public changePage = (e: MouseEvent) => {
    const li = e.target as HTMLLIElement;
    if (li.classList.contains('active')) return;

    const {
      pages,
      nav: { items },
    } = this.DOM;

    const currentLi = items.filter((l) => l.classList.contains('active'))[0];
    const currentPage = pages.filter((p) => p.classList.contains('active'))[0];
    const target = li.dataset.target as string;
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

  public changeLocale = (newLocale: 'en' | 'pl') => {
    this.currentLocale = newLocale;
  };

  public setupApp = () => {
    this.DOM.theme.container.addEventListener('click', this.changeTheme);
    this.DOM.nav.container.addEventListener('click', this.changePage);
  };
}

const app = new App();
app.setupApp();
