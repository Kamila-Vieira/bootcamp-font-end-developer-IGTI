O arquivo db.json contém os dados disponibilizados pelo "servidor" que usaremos nas aulas, no trabalho prático e no desafio.
Para utilizar este arquivo e criar um servidor onde iremos consultar as informações, siga as instruções a seguir:

- Instalar o json-server
  Instale a biblioteca do json-server globalmente em seu computador. Ele é o servidor que irá interpretar o arquivo db.json e
  disponibilizará rotas HTTP para consultarmos.

---

```
npm install -g json-server
```

---

## Uma vez instalado, teste o servidor json (na pasta onde estiver o arquivo db.json):

```
json-server db.json
```

---

Após ativar o servidor, acesse uma das chaves disponibilizadas no arquivo como rota GET (racas, servicos ou produtos) no browser
via http://localhost:3000/produtos (por exemplo - confira se ele está rodando na porta 3000). Você deve ver a lista de produtos no browser (pode também testar usando Postman).

## Em seus projetos, quando for fazer uma requisição a API, utilize a biblioteca axios, para instalar (em seu projeto):

```
npm install axios
```

---

E em seguida, em seu componente:

```
<script>
import axios from 'axios';
export default {
	created() {
		// Aqui no caso estamos buscando a API de produtos, se precisar de raças ou serviços, somente substituir no string abaixo.
		const { data } = axios.get('http://localhost:3000/produtos');
	},
	...
```

O axios sempre irá retornar os dados da requisição dentro de um campo data.
