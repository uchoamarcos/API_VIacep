async function preencheCep(input){
  let cep = input.value.replace(/\D/g, '');
  if (cep.length !== 8) return;
  let response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
  let dados = await response.json();
  if (dados.erro) return;
  document.querySelector("#logradouro").value = dados.logradouro;
  document.querySelector("#bairro").value = dados.bairro;
  document.querySelector("#cidade").value = dados.localidade;
  document.querySelector("#estado").value = dados.uf;
}