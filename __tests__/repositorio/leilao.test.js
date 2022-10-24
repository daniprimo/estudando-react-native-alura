import { obtemLeilao, obtemLeiloes } from "../../src/repositorio/leilao";
import apiLeiloes from '../../src/servicos/apiLeiloes';

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

const mockRequisicao = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: retorno
            })
        }, 200);
    });
}

const mockRequisicaoError = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject();
        }, 200);
    });
}



describe("repositorio/leilao", () => {
    describe("Obtem leiloes", () => {
        it('Deve retornor uma lista de leilões', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes))

            const leiloes = await obtemLeiloes();

            expect(leiloes).toEqual(mockLeiloes);
        });

        it('Deve retornor uma lista vazia quando a requisição falhar', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoError())

            const leiloes = await obtemLeiloes();

            expect(leiloes).toEqual([]);
        });

    });
});