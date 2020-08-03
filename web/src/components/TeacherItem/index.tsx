import React from 'react';

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src='https://avatars3.githubusercontent.com/u/45128599?s=460&u=ea287985f3bd311971c6d6c58dc4341556e874e7&v=4' alt="felipe" />

        <div>
          <strong>Felipe Ramos Kafuri</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>


      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>

        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
              </button>
      </footer>
    </article>
  );
}

export default TeacherItem;