type DOM = {
  body: HTMLBodyElement;
  overlay: HTMLDivElement;
  theme: {
    container: HTMLDivElement;
    darkBtn: HTMLButtonElement;
    darkBtnText: HTMLSpanElement;
    lightBtn: HTMLButtonElement;
    lightBtnText: HTMLSpanElement;
  };
  locale: {
    container: HTMLDivElement;
    enBtn: HTMLButtonElement;
    plBtn: HTMLButtonElement;
  };
  nav: {
    container: HTMLElement;
    items: HTMLLIElement[];
  };
  pageTitle: HTMLHeadingElement;
  pages: HTMLElement[];
  aboutPage: {
    title: HTMLHeadingElement;
    desc: HTMLParagraphElement;
    skillsTitle: HTMLHeadingElement;
  };
  contactPage: {
    title: HTMLHeadingElement;
    emailBtn: HTMLButtonElement;
    mobileBtn: HTMLButtonElement;
  };
  projectsPage: {
    carousel: HTMLDivElement;
    slider: HTMLDivElement;
    prevBtn: HTMLButtonElement;
    nextBtn: HTMLButtonElement;
  };
};

type LocaleElement = { en: string; pl: string };
type Locale = {
  pageTitle: {
    home: LocaleElement;
    about: LocaleElement;
    projects: LocaleElement;
    contact: LocaleElement;
  };
  nav: {
    home: LocaleElement;
    about: LocaleElement;
    projects: LocaleElement;
    contact: LocaleElement;
  };
  themes: {
    dark: LocaleElement;
    light: LocaleElement;
  };
  pages: {
    about: {
      title: LocaleElement;
      desc: LocaleElement;
      skillsTitle: LocaleElement;
    };
    projects: {
      nextBtn: LocaleElement;
      prevBtn: LocaleElement;
    };
    contact: {
      title: LocaleElement;
    };
  };
};

type Project = {
  title: string;
  year: number;
  tags: string[];
  githubRepo: string;
  deployed: string | null;
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

const projects: Project[] = [
  {
    title: 'Skin Care (work in progress)',
    year: 2023,
    deployed:
      'https://skin-care-wfe2-n21g3ihuw-mateuszwisniewskikonto-gmailcom.vercel.app/',
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
    deployed:
      'https://feast-6ce2tes3j-mateuszwisniewskikonto-gmailcom.vercel.app/',
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

interface IApp {
  DOM: DOM;
  locale: Locale;
  currentLocale: 'en' | 'pl';
  currentPage: 'home' | 'about' | 'projects' | 'contact';
  projects: Project[];
  initialY: number | null;
  isMoving: boolean;

  setupApp: () => void;
}

class App implements IApp {
  DOM: DOM;
  locale: Locale;

  currentLocale: 'en' | 'pl';
  currentPage: 'home' | 'about' | 'projects' | 'contact';
  direction: -1 | 1;
  projects: Project[];
  initialY: number | null;
  isMoving: boolean;

  constructor() {
    this.DOM = {
      body: document.querySelector('body') as HTMLBodyElement,
      overlay: document.querySelector(
        '.app__background_overlay'
      ) as HTMLDivElement,
      theme: {
        container: document.querySelector('.app__theme') as HTMLDivElement,
        darkBtn: document.querySelector('#darkThemeBtn') as HTMLButtonElement,
        darkBtnText: document.querySelector(
          '.theme__btn_text--dark'
        ) as HTMLSpanElement,
        lightBtn: document.querySelector('#lightThemeBtn') as HTMLButtonElement,
        lightBtnText: document.querySelector(
          '.theme__btn_text--light'
        ) as HTMLSpanElement,
      },
      locale: {
        container: document.querySelector('.app__locale') as HTMLDivElement,
        enBtn: document.querySelector('#enBtn') as HTMLButtonElement,
        plBtn: document.querySelector('#plBtn') as HTMLButtonElement,
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
      aboutPage: {
        title: document.querySelector('.title--ab') as HTMLHeadingElement,
        desc: document.querySelector('.desc--ab') as HTMLParagraphElement,
        skillsTitle: document.querySelector(
          '.skillsTitle--ab'
        ) as HTMLHeadingElement,
      },
      contactPage: {
        title: document.querySelector('.title--c') as HTMLHeadingElement,
        emailBtn: document.querySelector(
          '.copy__btn--email'
        ) as HTMLButtonElement,
        mobileBtn: document.querySelector(
          '.copy__btn--mobile'
        ) as HTMLButtonElement,
      },
      projectsPage: {
        carousel: document.querySelector(
          '.project__carousel'
        ) as HTMLDivElement,
        slider: document.querySelector(
          '.project__carousel_slider'
        ) as HTMLDivElement,
        prevBtn: document.querySelector(
          '.project__carousel_btn--prev'
        ) as HTMLButtonElement,
        nextBtn: document.querySelector(
          '.project__carousel_btn--next'
        ) as HTMLButtonElement,
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

  private copyToClipboard = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    const value = target.dataset.value;

    navigator.clipboard.writeText(value);
    alert(`Copied : ${value}`);
  };
  private handleTransitionEnd = () => {
    const { slider } = this.DOM.projectsPage;
    if (this.direction === -1) {
      slider.appendChild(slider.firstElementChild);
    } else {
      slider.prepend(slider.lastElementChild);
    }
    slider.style.transition = 'none';
    slider.style.transform = 'translateY(0)';
    setTimeout(() => {
      slider.style.transition = 'all 0.5s ease';
    });
  };
  private handleNextSlide = () => {
    const { carousel, slider } = this.DOM.projectsPage;
    if (this.direction === 1) {
      slider.prepend(slider.lastElementChild);
      this.direction = -1;
    }
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = `translateY(-${100 / this.projects.length}%)`;
  };
  private handlePrevSlide = () => {
    const { carousel, slider } = this.DOM.projectsPage;
    if (this.direction === -1) {
      slider.appendChild(slider.firstElementChild);
      this.direction = 1;
    }
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = `translateY(${100 / this.projects.length}%)`;
  };
  private updateDOM = (locale: 'en' | 'pl') => {
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
  private changeTheme = (e: MouseEvent) => {
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
  private changePage = (e: MouseEvent) => {
    const li = e.target as HTMLLIElement;
    if (li.classList.contains('active')) return;
    const target = li.dataset.target as
      | 'home'
      | 'about'
      | 'projects'
      | 'contact';

    const {
      pages,
      nav: { items },
    } = this.DOM;

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
  private changeLocale = (e: MouseEvent) => {
    const btn = e.target as HTMLButtonElement;
    if (btn.classList.contains('active')) return;
    const { enBtn, plBtn } = this.DOM.locale;
    const target = btn.dataset.target as 'en' | 'pl';
    if (btn.dataset.target === 'en') {
      plBtn.classList.remove('active');
      enBtn.classList.add('active');

      // update dom
    } else {
      plBtn.classList.add('active');
      enBtn.classList.remove('active');
      // update dom
    }
    this.updateDOM(target);
    this.currentLocale = target;
  };
  private createProject = (data: Project) => {
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
  private setupCarousel = () => {
    this.DOM.projectsPage.slider.style.height = `${
      100 * this.projects.length
    }%`;
    const projects = this.projects.map((p) => this.createProject(p));
    projects.forEach((p) => this.DOM.projectsPage.slider.appendChild(p));
  };
  private drawOverlay = () => {
    for (let i = 0; i < 48; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      row.classList.add(`row-${i}`);
      for (let j = 0; j < 48; j++) {
        const col = document.createElement('div');
        col.classList.add('col');
        col.classList.add(`col-${j}`);
        row.appendChild(col);
      }
      this.DOM.overlay.appendChild(row);
    }
  };

  public setupApp = () => {
    this.DOM.theme.container.addEventListener('click', this.changeTheme);
    this.DOM.locale.container.addEventListener('click', this.changeLocale);
    this.DOM.nav.container.addEventListener('click', this.changePage);
    this.DOM.contactPage.emailBtn.addEventListener(
      'click',
      this.copyToClipboard
    );
    this.DOM.contactPage.mobileBtn.addEventListener(
      'click',
      this.copyToClipboard
    );
    this.DOM.projectsPage.nextBtn.addEventListener(
      'click',
      this.handleNextSlide
    );
    this.DOM.projectsPage.prevBtn.addEventListener(
      'click',
      this.handlePrevSlide
    );
    this.DOM.projectsPage.slider.addEventListener(
      'transitionend',
      this.handleTransitionEnd
    );
    this.updateDOM('en');
    this.setupCarousel();
    this.drawOverlay();

    if (window.TouchEvent) {
      window.addEventListener('touchstart', (e: TouchEvent) => {
        this.initialY = e.targetTouches[0].clientY;
        this.isMoving = true;
      });
      window.addEventListener('touchmove', (e: TouchEvent) => {
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
    window.addEventListener('mousedown', (e: MouseEvent) => {
      this.initialY = e.pageY;
      this.isMoving = true;
    });

    window.addEventListener('mousemove', (e: MouseEvent) => {
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
}

const app = new App();
app.setupApp();
