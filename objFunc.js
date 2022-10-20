const generateData = (name1) => {
    const info = {
      nome: `${name1}`, class: () => 'Aluno da turma 27!' };
    return info;
  }

  module.exports = generateData;