import { Project } from '../types/project.type';

export const projects: Project[] = [
  {
    id: 3,
    year: 2023,
    title: {
      enGB: 'Feast BBQ',
      plPL: 'Feast BBQ',
    },
    description: {
      enGB: 'Fake restaurant website with barbecue theme. Works with postgresql database (Neon Technical Preview) to store data. Table booking functionality is implemented with simple form validtion using joi both on server and client side.',
      plPL: 'Strona wymoślonej restauracji w motywie barbecue. Uzywa bazy danych postgresql (Neon Technical Preview) do przechowywania danych. Funkcja rezerwacji stolików zawiera veryfikację formularza bo stronie servera i klienta.',
    },
    tags: [
      'Next.js',
      'react',
      'react-query',
      'typescript',
      'styled-components',
      'joi',
      'prisma',
      'rwd',
    ],
    link: {
      deployed: 'https://feast-ten.vercel.app/',
      github: 'https://github.com/wisnies/feast',
    },
  },
  {
    id: 2,
    year: 2023,
    title: {
      enGB: 'Infinite Feed',
      plPL: 'Infinite Feed',
    },
    description: {
      enGB: 'This simple website features data fetching and caching using react-query. Diplay mode is responsive and changable. Query operates as infinite or paginated (both on diffrent pages).',
      plPL: 'Strona poświącona uzyciu react-query do pobierania i buforowania danych. Układ strony jest resposnywny. Dane wyświetlać można jano nieskończoną tablicę lub numerowane strony',
    },
    tags: [
      'react',
      'react context',
      'react-router-dom',
      'react-query',
      'typescript',
      'sass',
      'rwd',
    ],
    link: {
      deployed: 'https://wisnies.github.io/infinite-feed/',
      github: 'https://github.com/wisnies/infinite-feed',
    },
  },
  {
    id: 1,
    year: 2023,
    title: {
      enGB: 'Tic Tac Toe',
      plPL: 'Tic Tac Toe',
    },
    description: {
      enGB: 'Tic-Tac-Toe game made with React. Features playing against otherplayer on the same screen, or computer. ',
      plPL: 'Gra kółko i krzyżyk zrealizowane przy użyciu React. Umożliwia grę przeciwko innemu graczowi na tym samym ekranie lub komputerowi.',
    },
    tags: ['react', 'react context', 'react-router-dom', 'typescript', 'sass'],
    link: {
      deployed: 'https://wisnies.github.io/tic-tac-toe/',
      github: 'https://github.com/wisnies/tic-tac-toe',
    },
  },
];
