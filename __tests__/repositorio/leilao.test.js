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



describe("negocio/repositorio/leilao", () => {

    beforeEach(() => {
        apiLeiloes.get.mockClear();
    });

    describe("Obtem leiloes", () => {
        it('Deve retornor uma lista de leilões', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes))

            const leiloes = await obtemLeiloes();

            expect(leiloes).toEqual(mockLeiloes);

            //verificando se foi chamada com o parametro certo
            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);

        });

        it('Deve retornor uma lista vazia quando a requisição falhar', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoError())

            const leiloes = await obtemLeiloes();

            expect(leiloes).toEqual([]);

            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);

        });

    });


    describe('obtemLeilao', () => {
        it('Deve retorna um leilao', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes[0]))

            const leilao = await obtemLeilao(1);

            expect(leilao).toEqual(mockLeiloes[0])
        });

        it('Deve retorna um objeto vazio caso erro na aquisicao', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoError())

            const leilao = await obtemLeilao(1);

            expect(leilao).toEqual({});
        });


    });


});