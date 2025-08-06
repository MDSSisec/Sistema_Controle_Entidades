export const MASCARAS = {
    // ----- MÁSCARAS PARA FORMULÁRIO 01 - PROJETO -----
    PROJETO: {
        // Não há campos que precisam de máscara específica
    },

    // ----- MÁSCARAS PARA FORMULÁRIO 02 - ENTIDADE -----
    ENTIDADE: {
        CNPJ: "00.000.000/0000-00",
        DATA_FUNDACAO: "00/00/0000",
        CEP: "00000-000",
        TELEFONE_FAX: "(00) 00000-0000 / (00) 0000-0000",
    },

    // ----- MÁSCARAS PARA FORMULÁRIO 03 - REPRESENTANTE LEGAL -----
    REPRESENTANTE: {
        CPF: "000.000.000-00",
        TELEFONE: "(00) 00000-0000",
    },

    // ----- MÁSCARAS PARA FORMULÁRIO 04 - RESPONSÁVEL TÉCNICO -----
    RESPONSAVEL_TECNICO: {
        TELEFONE: "(00) 00000-0000",
        CELULAR: "(00) 00000-0000",
    },

    // ----- MÁSCARAS PARA FORMULÁRIO 05 - JUSTIFICATIVA -----
    JUSTIFICATIVA: {
        // Não há campos que precisam de máscara específica
    },

    // ----- MÁSCARAS GLOBAIS -----
    GLOBAIS: {
        // Máscaras que podem ser usadas em múltiplos formulários
        CPF: "000.000.000-00",
        CNPJ: "00.000.000/0000-00",
        CEP: "00000-000",
        TELEFONE: "(00) 00000-0000",
        CELULAR: "(00) 00000-0000",
        DATA: "00/00/0000",
        HORA: "00:00",
        DATA_HORA: "00/00/0000 00:00",
        MOEDA: "R$ 0,00",
        PORCENTAGEM: "0,00%",
        NUMERO: "000000000",
        DECIMAL: "0,00",
        EMAIL: "exemplo@dominio.com",
    }
};

// Funções auxiliares para aplicar máscaras
export const aplicarMascara = (valor: string, mascara: string): string => {
    let resultado = '';
    let indiceValor = 0;
    
    for (let i = 0; i < mascara.length && indiceValor < valor.length; i++) {
        if (mascara[i] === '0') {
            // Substitui apenas por números
            if (/[0-9]/.test(valor[indiceValor])) {
                resultado += valor[indiceValor];
                indiceValor++;
            }
        } else {
            // Mantém o caractere da máscara
            resultado += mascara[i];
        }
    }
    
    return resultado;
};

// Funções específicas para cada tipo de máscara
export const mascarasUtils = {
    cpf: (valor: string) => aplicarMascara(valor.replace(/\D/g, ''), MASCARAS.GLOBAIS.CPF),
    cnpj: (valor: string) => aplicarMascara(valor.replace(/\D/g, ''), MASCARAS.GLOBAIS.CNPJ),
    cep: (valor: string) => aplicarMascara(valor.replace(/\D/g, ''), MASCARAS.GLOBAIS.CEP),
    telefone: (valor: string) => aplicarMascara(valor.replace(/\D/g, ''), MASCARAS.GLOBAIS.TELEFONE),
    celular: (valor: string) => aplicarMascara(valor.replace(/\D/g, ''), MASCARAS.GLOBAIS.CELULAR),
    data: (valor: string) => aplicarMascara(valor.replace(/\D/g, ''), MASCARAS.GLOBAIS.DATA),
    email: (valor: string) => {
        // Remove caracteres inválidos para email
        return valor.replace(/[^a-zA-Z0-9@._-]/g, '');
    },
    moeda: (valor: string) => {
        const numero = parseFloat(valor.replace(/\D/g, '')) / 100;
        return numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },
    porcentagem: (valor: string) => {
        const numero = parseFloat(valor.replace(/\D/g, '')) / 100;
        return `${numero.toFixed(2)}%`;
    }
};
