import React from 'react';

import headphones from './img/headphones.png';
import book from './img/book.png';
import tv from './img/tv.png';
import person from './img/person.png';
import heart from './img/heart.png';
import python from './img/python.png';
import doc from './img/doc.png';
import js from './img/js.png';

const icons = {
  headphones: headphones,
  book: book,
  tv: tv,
  person: person,
  heart: heart,
  python: python,
  doc: doc,
  js: js,
};

export default function Icon({ name, className }) {
  return <img src={icons[name]} alt="" className={className} />;
}