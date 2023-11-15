import { TierListData } from '../models/tier-list.model';

const list1: TierListData = {
  _id: '1',
  title: 'Tier list de cursos de Platzi y otros',
  description: '',
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
        {
          image:
            'https://i.ytimg.com/vi/sxjpUNRU_tI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBA-OcoMcpITgoBB1nmUIAV_oSBZw',
          name: 'RxJS',
          url: 'https://www.youtube.com/watch?v=2LVtVKuMAR4&list=PL4vWncexIMYuvT5oCCGpShrRoM0hizLky',
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
    {
      rowItems: [
        {
          image:
            'https://static.platzi.com/media/blog/blog-manos-og-aa2e8eea-0bab-40c6-9ada-2f6b6a398add.png',
          name: 'Curso de cómo lavarse correctamente las manos',
          url: 'https://platzi.com/blog/lavarte-manos/',
        },
      ],
    },
  ],
};

const list2: TierListData = {
  _id: '2',
  title: 'Tier list de frameworks para frontend de JS',
  description: '',
  table: [
    {
      background: '#ff7f7e',
      color: '#09090b',
      rowName: 'S',
      rowItems: [
        {
          image:
            'https://github.com/angular/angular/raw/main/aio/src/assets/images/logos/angular/angular_renaissance.png',
          name: 'Angular',
          url: 'https://angular.dev/',
        },
        {
          image:
            'https://camo.githubusercontent.com/f21f1fa29dfe5e1d0772b0efe2f43eca2f6dc14f2fede8d9cbef4a3a8210c91d/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67',
          name: 'Next',
          url: 'https://nextjs.org/',
        },
        {
          image:
            'https://camo.githubusercontent.com/c8f91d18976e27123643a926a2588b8d931a0292fd0b6532c3155379e8591629/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67',
          name: 'Vue',
          url: 'https://vuejs.org/',
        },
      ],
    },
    {
      background: '#ffbd80',
      color: '#09090b',
      rowName: 'A',
      rowItems: [],
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
      rowItems: [],
    },
    {
      background: '#7fffff',
      color: '#09090b',
      rowName: 'D',
      rowItems: [],
    },
    {
      rowItems: [
        {
          image:
            'https://svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg',
          name: 'Svelte',
          url: 'https://svelte.dev/',
        },
        {
          image:
            'https://astro.build/assets/press/astro-icon-light-gradient.svg',
          name: 'Astro',
          url: 'https://astro.build/',
        },
        {
          image:
            'https://raw.githubusercontent.com/BuilderIO/qwik/main/.github/assets/qwik-logo.svg',
          name: 'Qwik',
          url: 'https://qwik.builder.io/',
        },
        {
          image: 'https://www.solidjs.com/assets/logo-123b04bc.svg',
          name: 'Solid',
          url: 'https://www.solidjs.com/',
        },
        {
          image: 'https://alpinejs.dev/alpine_long.svg',
          name: 'Alpine JS',
          url: 'https://alpinejs.dev/',
        },
      ],
    },
  ],
};

export const data = [list1, list2];
