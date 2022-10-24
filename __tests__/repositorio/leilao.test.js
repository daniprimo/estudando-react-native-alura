import { obtemLeilao, obtemLeiloes } from "../../src/repositorio/leilao";

// jest.mock('../../src/servicos/apiLeiloes.js', () => {

// });

jest.mock('../../src/servicos/apiLeiloes.js');

const mockLeiloes = [
    {
        id: 1,
        nome: 'Leilão',
        descricao: 'descricao do leilao'
    }
]


describe("repositorio/leilao", () => {
    describe("Obtem leiloes", () => {
        it('Deve retornor uma lista de leilões', async () => {
            const leiloes = await obtemLeiloes();
            console.log(leiloes);
        });
    });
});