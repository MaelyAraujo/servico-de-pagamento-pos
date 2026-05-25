const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', () => {
  it('deve cadastrar pagamento caro', () => {
    const servico = new ServicoDePagamento();

    servico.pagar('0987-7656-3475', 'Samar', 156.87);

    assert.deepStrictEqual(servico.consultarUltimoPagamento(), {
      codigoBarras: '0987-7656-3475',
      empresa: 'Samar',
      valor: 156.87,
      categoria: 'cara'
    });
  });
});
