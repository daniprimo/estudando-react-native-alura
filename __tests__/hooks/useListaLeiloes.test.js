import useListaLeiloes from '../../src/hooks/useListaLeiloes';
import { renderHook, act } from '@testing-library/react-hooks';

import { obtemLeilao, obtemLeiloes } from "../../src/repositorio/leilao";

jest.mock("../../src/repositorio/leilao");

const mockLeiloes = [
    {
        id: 1,
        nome: 'Leilão',
        descricao: 'descricao do leilao'
    }
]

const mockLeiloesAtualizada = [
    {
        id: 1,
        nome: 'Leilão',
        descricao: 'descricao do leilao'
    },
    {
        id: 2,
        nome: 'Leilão 2',
        descricao: 'descricao do leilao 2'
    }
]


describe('hooks/useListaLeiloes', () => {
    it('Deve retorna uma lista de leiloe e uma funcao para atualizar', async () => {
        obtemLeiloes.mockImplementation(() => mockLeiloes);

        const { result, waitForNextUpdate } = renderHook(() => useListaLeiloes());
        expect(result.current[0]).toEqual([]);
        //console.log(result.current[0]);
        await waitForNextUpdate();
        expect(result.current[0]).toEqual(mockLeiloes);
        //console.log(result.current[0]);
        obtemLeiloes.mockImplementation(() => mockLeiloesAtualizada);

        await act(() => result.current[1]());
        expect(result.current[0]).toEqual(mockLeiloesAtualizada);

    });
});