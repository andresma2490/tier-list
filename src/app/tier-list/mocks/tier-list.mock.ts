import { TierListData } from '../models/tier-list.model';

export const data: TierListData = {
  title: 'Tier list de cursos de Platzi y otros',
  table: [
    {
      background: '#ff7f7e',
      color: '#09090b',
      rowName: 'S',
      rowItems: [
        {
          image:
            'https://static.platzi.com/cdn-cgi/image/width=1024,quality=85,format=auto/https://thumbs.cdn.mdstrm.com/thumbs/512e13acaca1ebcd2f000279/thumb_612d19326b9a010833683fd4_612d19326b9a010833683fde_14s.jpg',
          name: 'Frontend con Angular',
          url: 'https://platzi.com/ruta/web-angular/',
        },
        {
          image:
            'https://i.ytimg.com/vi/btFk-R3tVjo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDcxQsA6h5U9ohd3XbENdgngczpuw',
          name: 'NgRx',
          url: 'https://www.youtube.com/watch?v=btFk-R3tVjo&list=PL4vWncexIMYsB6qzGjxb2g__rZ_9-maVw',
        },
      ],
    },
    {
      background: '#ffbd80',
      color: '#09090b',
      rowName: 'A',
      rowItems: [
        {
          image: 'https://i.ytimg.com/vi/LCS14ViRdNk/maxresdefault.jpg',
          name: 'Curso de Fundamentos de Python',
          url: 'https://platzi.com/cursos/python/',
        },
      ],
    },
    {
      background: '#ffff85',
      color: '#09090b',
      rowName: 'B',
      rowItems: [],
    },
    {
      background: '#7dff80',
      color: '#09090b',
      rowName: 'C',
      rowItems: [
        {
          image:
            'https://static.platzi.com/media/courses/og-prog-b%C3%A1sica-2017.png',
          name: 'Curso Gratis de Programación Básica',
          url: 'https://platzi.com/cursos/programacion-basica/',
        },
      ],
    },
    {
      background: '#7fffff',
      color: '#09090b',
      rowName: 'D',
      rowItems: [
        {
          image: 'https://img-c.udemycdn.com/course/750x422/2584992_2ae2_2.jpg',
          name: 'REDUX en Angular con NGRX',
          url: 'https://www.udemy.com/course/redux-ngrx-angular/',
        },
      ],
    },
  ],

  items: [
    {
      image:
        'https://static.platzi.com/media/blog/blog-manos-og-aa2e8eea-0bab-40c6-9ada-2f6b6a398add.png',
      name: 'Curso de cómo lavarse correctamente las manos',
      url: 'https://platzi.com/blog/lavarte-manos/',
    },
  ],
};
