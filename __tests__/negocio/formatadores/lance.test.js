import { formataMaiorLanceDoLeilao } from "../../../src/negocio/formatadores/lance";

describe("negocio/formatadores/lance", () => {
    describe("Retornando o maior lance", () => {

        it("deveRetornaroMaiorLance", () => {
            const lances = [
                {
                    valor: 10
                },
                {
                    valor: 30
                },
                {
                    valor: 20
                }
            ];

            const valorInicial = 5;
            const leilao = formataMaiorLanceDoLeilao(lances, valorInicial);

            expect(leilao).toBe(30);
        });

        it('deve retornar o valor inicial caso não existir lances', () => {
            const lances = [];
            const valorInicial = 5;
            const maiorLance = formataMaiorLanceDoLeilao(lances, valorInicial);
            expect(maiorLance).toBe(5);
          });

    });
});