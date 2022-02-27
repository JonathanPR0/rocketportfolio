const express = require('express');
const lerolero = require('lerolero');
const exphbs = require('express-handlebars');

const app = express();
const hbs = exphbs.create({
  partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
  const perfil = {
    name: 'Jonathan Amarante',
    ocapation: 'Web Developer',
  };
  const info = {
    localization: 'Brasil',
    github: 'JonathanPR0',
    personalWebsite: 'https://jonathanpr0.github.io/',
    email: 'jonathan.almeida1793@gmail.com',
  };
  const technologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'C',
    'Github',
    'Node.js',
    'Git',
    'React.js',
  ];
  const experience = [
    { title: 'NLW 03', date: '2020', local: 'Sweet Home' },
    { title: 'NLW 07', date: '2021', local: 'Sweet Home' },
  ];
  const education = [
    { title: 'Rocketseat', date: '2020', course: 'Discover' },
    { title: 'Origamid', date: '2021', course: 'JavaScript Avançado' },
    { title: 'Udemy', date: '2022', course: 'Node.js' },
  ];
  const projects = [
    {
      name: 'MusicRandomizer',
      description: lerolero(),
      randomNumber: Math.floor(Math.random() * 11),
      language: 'JavaScript',
      languageColor: '#F1E05A',
      link: 'https://github.com/JonathanPR0/MusicRandomizer',
    },
    {
      name: 'Projetos-em-C',
      description: lerolero(),
      randomNumber: Math.floor(Math.random() * 11),
      language: 'C',
      languageColor: '#555555',
      link: 'https://github.com/JonathanPR0/Projetos-em-C',
    },
  ];
  const posts = [
    {
      title: 'Meu primeiro post (JavaScript)',
      time: '1 hora atrás',
      description: lerolero(),
      hashtags: ['#programacao', '#javascript', '#aprendizado'],
    },
  ];

  res.render('home', {
    perfil,
    info,
    technologies,
    experience,
    education,
    projects,
    posts,
  });
});

app.listen(3000, () => {
  console.log('App funcionando');
});
