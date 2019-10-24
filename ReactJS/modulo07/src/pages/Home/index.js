import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-feminino/26/COL-4398-026/COL-4398-026_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$155,99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-feminino/26/COL-4398-026/COL-4398-026_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$155,99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-feminino/26/COL-4398-026/COL-4398-026_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$155,99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-feminino/26/COL-4398-026/COL-4398-026_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$155,99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-falcon-feminino/26/COL-4398-026/COL-4398-026_detalhe2.jpg?ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$155,99</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
