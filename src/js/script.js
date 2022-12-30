class Produto{



constructor(){
	this.id = 1;
	this.arrayProdutos = [];
}

salvar(){
	let produto = this.lerDados();

	if(this.validaCampos(produto)){
		this.adicionar(produto);
	}
		this.listaTabela();
		this.limpar();
}

adicionar(produto){
	this.arrayProdutos.push(produto);
	this.id++;
}

excluir(){
	alert('Item excluído!');
}

lerDados(){
	let produto = {}

	produto.id = this.id;
	produto.nomeProduto = document.getElementById('produto').value;
	produto.descricao = document.getElementById('descricao').value;
	produto.quantidade = document.getElementById('qtde').value;
	produto.medida = document.getElementById('medida').value;
	produto.fornecedor = document.getElementById('fornecedor').value;
	produto.valorUnitario = document.getElementById('vlrUnit').value;
	produto.valorTotal = produto.quantidade * produto.valorUnitario;

	return produto;
}

validaCampos(produto){
	let msg = '';

	if(produto.nomeProduto == ''){
		msg += ' - Informe o nome do material \n';
	}

	if(produto.quantidade == ''){
		msg += ' - Informe a quantidade de material \n';
	}

	if(produto.valorUnitario == ''){
		msg += ' - Informe o valor unitário do material \n';
	}

	if(msg != ''){
		alert(msg);
		return false;
	}

	return true;
}

limpar(){

	produto.nomeProduto = document.getElementById('produto').value = '';
	produto.descricao = document.getElementById('descricao').value = '';
	produto.quantidade = document.getElementById('qtde').value = '';
	produto.medida = document.getElementById('medida').value = '';
	produto.fornecedor = document.getElementById('fornecedor').value = '';
	produto.valorUnitario = document.getElementById('vlrUnit').value = '';
}

	listaTabela(){
		let tbody = document.getElementById('tbody');

		tbody.innerText = "";

		for(let i = 0; i < this.arrayProdutos.length; i++){
			let tr = tbody.insertRow(); /*insere uma nova linha*/

			let td_id = tr.insertCell(); /*insere uma nova coluna*/
			let td_nome = tr.insertCell();
			let td_descricao = tr.insertCell();
			let td_quantidade = tr.insertCell();
			let td_medida = tr.insertCell();
			let td_fornecedor = tr.insertCell();
			let td_vlrUnitario = tr.insertCell();
			let td_vlrTotal = tr.insertCell();

			td_id.innerText = this.arrayProdutos[i].id;
			td_nome.innerText = this.arrayProdutos[i].nomeProduto;
			td_descricao.innerText = this.arrayProdutos[i].descricao;
			td_quantidade.innerText = this.arrayProdutos[i].quantidade;
			td_medida.innerText = this.arrayProdutos[i].medida;
			td_fornecedor.innerText = this.arrayProdutos[i].fornecedor;
			td_vlrUnitario.innerText = this.arrayProdutos[i].valorUnitario;
			td_vlrTotal.innerText = this.arrayProdutos[i].valorTotal;

		}
	}


/*O método não está funcionando*/
calcularValorTotal(){
	return document.getElementById('vlrUnitario') * document.getElementById('qtde');
}

}

var produto = new Produto();
