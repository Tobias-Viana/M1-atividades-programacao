# Instruções
- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 8 questões objetivas assinalando a alternativa correta e **justificando sua resposta.**
- Resolva as 2 questões dissertativas escrevendo no próprio arquivo .md
- Lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com o uso de ChatGPT (e similares), pois entregar algo só para ganhar nota não fará você aprender. Não seja dependente da máquina!
- Ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```
``a) A saída será undefined seguido de erro`` 

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log

```javascript
//Resposta letra a). Pois no JavaScript, variáveis declaradas com var são içadas (hoisting), mas sem seu valor atribuído. Isso significa que var x é movido para o topo do escopo, mas sem valor, resultando em undefined na primeira impressão. Já a variável y, declarada com let, também sofre hoisting, mas não é inicializada antes da sua atribuição, o que gera um erro quando tentamos acessá-la antes da declaração.
```

**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

``a) Substituir if (a || b === 0) por if (a === 0 || b === 0)``

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

```javascript
//Resposta letra a). Pois o código verifica se pelo menos uma das variáveis tem resultado igual a 0, que é o intuito inical do código.
```
______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));
```

a) O código imprime 1000.

``b) O código imprime 200.``

c) O código imprime 50.

d) O código gera um erro.

```javascript
//Resposta letra b). Porque no exemplo de switch case está faltando o (break;) no primeiro caso, permitindo que o código "ignore" o valor proposto, lendo apenas o valor seguinte e saindo o resultado do próximo caso.
```
______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

``d) 24``

```javascript
//Resposta letra d). Inicialmente o código pega todos os números da lista e multiplica por 2, em seguida, ele filtra os números em que o resultado foi x > 5, logo depois, somando os valores de forma acumulativa, onde se inicia com 0 + 6 = 6, 6 + 8 = 14, 14 + 10 = 24.
```
______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

``c) ["banana", "abacaxi", "manga", "laranja"]``

d) ["banana", "maçã", "uva", "abacaxi", "manga"]

```javascript
//Resposta letra c). O comando lista.splice(1,2...) pega como índice 1 da lista, que corresponde à string "maçã". Em seguida, ele remove dois elementos a partir do índice 1, ou seja, "maçã" e "uva", e adiciona os novos elementos "abacaxi" e "manga" nos lugares dos elementos removidos.
```
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


``a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.``

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.

```javascript
//Resposta letra a). Nas duas afirmações, foram apresentadas características essenciais da herança, como herdar métodos e propriedades de outra classe, evitando a repetição de código, e a implementação da herança através da palavra-chave extends.
```
______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  apresentar() {
    super.apresentar();
    console.log(`Meu salário é R$ ${this.salario}.`);
  }
}
```


I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente.  
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes.

Quais das seguintes afirmações são verdadeiras sobre o código acima?

``a) I e II são verdadeiras.``

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

```javascript
//Resposta letra a). As afirmativas I e II estão corretas, enquanto a afirmativa III está errada, pois Funcionario pode herdar de Pessoa como uma classe, e o JavaScript suporta herança de classes usando a palavra-chave extends.
```

______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

``b) A asserção é verdadeira e a razão é falsa.``

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

```javascript
//Resposta letra b). O conceito de polimorfismo na Programação Orientada a Objetos (POO) permite que diferentes objetos respondam à mesma mensagem de manieras distintas, mas em JavaScript, não existe sobrecarga de métodos nativa, normalmente é implementado através de sobrescrita de métodos (override).
``` 
______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {

    let soma = 0; //Inicializando a variável soma
    for (let i = 0; i < numeros.length; i++) { //Declarando a variável com let e substituindo (numeros.size) por (numeros.length).
        soma += 2 * numeros[i];//Acumula a soma do dobro de cada elemento da lista
    }
    return soma; //Retorna a soma total
}
console.log(somaArray([1, 2, 3, 4])); //Saída esperada: 20
```
______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.
```javascript
class Produto { //Criando a classe principal
    constructor(nome, preco) { //Atributos da classe
        this.nome = nome;
        this.preco = preco;
    }

    calcularDesconto(){ //Método para calcular desconto no produto da classe principal 
    this.preco = this.preco * 0.9; //Calculando quanto fica o preço do produto com o desconto
    console.log(`Preço com desconto do produto: R$ ${this.preco.toFixed(2)}`);
    }
}

class Livro extends Produto { //Criando uma nova classe que está herdando os elemnetos da classe principal
    constructor(nome, preco, autor) { 
        super(nome, preco); //Puxando atributos da classe principal
        this.autor = autor; //Adicionando uma nova característica na classe 
    }

    calcularDesconto(){ //Método para calcular desconto no livro
    this.preco = this.preco * 0.8; //Calculando quanto fica o preço do livro com desconto
    console.log(`Preço com desconto do livro: R$ ${this.preco.toFixed(2)}`);
    }
}

const qualquerProduto = new Produto('Fone de ouvido', 80); //Criando uma variável que recebe um produto específico
qualquerProduto.calcularDesconto(); //Chama a função de calcular o desconto da classe Produto
const meuLivro = new Livro('Aprendendo JavaScript', 220, 'Cristiano Benites'); //Criando uma variável que recebe um livro específico
meuLivro.calcularDesconto(); //Chama a função de calcular o desconto da classe Livro
```
```javascript
//Resposta. A herança foi utilizada para permitir que a classe Livro compartilhasse atributos e métodos da classe Produto, evitando a repetição de código. A classe Livro herda os atributos nome e preco da classe Produto, o que significa que não é necessário redefinir essas propriedades na classe Livro. Além disso, a classe Livro também herda o método calcularDesconto() da classe Produto, mas o sobrescreve para aplicar um desconto diferente (20%) em vez do desconto padrão de 10% aplicado na classe Produto.