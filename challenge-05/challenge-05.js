/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = ["String", 5, undefined, true, 5.4];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function fun(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(fun(arr[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function newFun(arr, x) {
   if(x === undefined || x === '') {
      return arr;
    } else {
      return arr[x];
    }
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var a = [1, 2, 3, 4, 5];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
newFun(a);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(arg) {
  var obj = {
    'livro 1': {
      quantidadePaginas: 300,
      autor: 'Desconhecido',
      editora: 'Cultura'
    },
      
    'livro 2': {
      quantidadePaginas: 300,
      autor: 'Da2k',
      editora: 'Martin Fontes'
    }, 
    
    'livro 3': {
      quantidadePaginas: 300,
      autor: 'Ilson',
      editora: 'Saraiva'
    }
    
  }
  return !arg ? obj : obj[arg];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro `livro 1` tem "+book('livro 1').quantidadePaginas+" páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( "O autor do livro `Livro 3` é "+book('livro 3').autor+".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro `livro 2` foi publicado pela editora "+book('livro 2').editora+".")
