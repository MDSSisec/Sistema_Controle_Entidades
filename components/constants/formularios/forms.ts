export const FORMS = {

    TITULO_IDENTIFICACAO: "I - Identificação",
    TITULO_DESCRICAO: "II - Descrição do Projeto",

    // Botões
    BOTAO_EDITAR: "Editar",
    BOTAO_CANCELAR: "Cancelar",
    BOTAO_SALVAR: "Salvar",
    
    // Estados brasileiros
    ESTADOS_BRASILEIROS: [
        { value: "AC", label: "AC" },
        { value: "AL", label: "AL" },
        { value: "AP", label: "AP" },
        { value: "AM", label: "AM" },
        { value: "BA", label: "BA" },
        { value: "CE", label: "CE" },
        { value: "DF", label: "DF" },
        { value: "ES", label: "ES" },
        { value: "GO", label: "GO" },
        { value: "MA", label: "MA" },
        { value: "MT", label: "MT" },
        { value: "MS", label: "MS" },
        { value: "MG", label: "MG" },
        { value: "PA", label: "PA" },
        { value: "PB", label: "PB" },
        { value: "PR", label: "PR" },
        { value: "PE", label: "PE" },
        { value: "PI", label: "PI" },
        { value: "RJ", label: "RJ" },
        { value: "RN", label: "RN" },
        { value: "RS", label: "RS" },
        { value: "RO", label: "RO" },
        { value: "RR", label: "RR" },
        { value: "SC", label: "SC" },
        { value: "SP", label: "SP" },
        { value: "SE", label: "SE" },
        { value: "TO", label: "TO" }
    ],

    // ----- FORMULÁRIO 01 - PROJETO -----
    PROJETO: {
        // Títulos e Subtítulos
        SUBTITULO: "1.0 - Identificação do Projeto",
        TITULO_EDICAO: "I - Identificação do Projeto",
        
        // Placeholders
        NOME_PROJETO: "Digite o nome completo do projeto",
        LOCAL_EXECUCAO: "Digite o local de execução do projeto",
        DURACAO: "Ex: 12 meses, 6 meses, 1 ano",
        RESUMO_PROJETO: "Descreva um resumo detalhado do projeto, incluindo objetivos principais, público-alvo e impacto esperado",
        
        // Labels do modo de visualização
        LABEL_NOME: "1.1 - Nome do Projeto",
        LABEL_LOCAL: "1.2 - Local de Execução",
        LABEL_DURACAO: "1.3 - Duração",
        LABEL_RESUMO: "1.4 - Resumo do Projeto",
        
    },

    // ----- FORMULÁRIO 02 - ENTIDADE -----
    ENTIDADE: {
        // Títulos
        TITULO: "2.0 - Identificação da Entidade Proponente",
        
        // Placeholders
        NOME: "Digite o nome completo da entidade",
        CNPJ: "00.000.000/0000-00",
        DATA_FUNDACAO: "DD/MM/AAAA",
        REGISTRO_CNPJ: "DD/MM/AAAA",
        CEP: "00000-000",
        BAIRRO: "Digite o nome do bairro",
        UF: "Ex: SP, RJ, MG",
        ENDERECO_COMPLETO: "Digite o endereço completo (rua, número, complemento)",
        EMAIL: "contato@entidade.com.br",
        TELEFONE_FAX: "(11) 99999-9999 / (11) 3333-4444",
        PAGINA_WEB: "https://www.entidade.com.br",
        
        
        // Labels do modo de edição
        LABEL_NOME: "2.1 - Nome",
        LABEL_CNPJ: "2.2 - CNPJ",
        LABEL_DATA_FUNDACAO: "2.3 - Data de Fundação",
        LABEL_REGISTRO_CNPJ: "2.4 - Data de Registro do CNPJ",
        LABEL_CEP: "2.5 - CEP",
        LABEL_BAIRRO: "2.6 - Bairro",
        LABEL_UF: "2.7 - UF",
        LABEL_ENDERECO_COMPLETO: "2.8 - Endereço Completo",
        LABEL_EMAIL: "2.9 - E-mail",
        LABEL_TELEFONE_FAX: "2.10 - Número de telefone e fax com DDD",
        LABEL_PAGINA_WEB: "2.11 - Página na web",
        
    },

    // ----- FORMULÁRIO 03 - REPRESENTANTE LEGAL -----
    REPRESENTANTE: {
        // Títulos
        TITULO: "3.0 - Identificação do Representante Legal da Entidade Proponente",
        
        // Placeholders
        NOME: "Digite o nome completo do representante legal",
        CPF: "000.000.000-00",
        RG: "Digite o número do RG",
        ORGAO_EXPEDITOR: "Ex: SSP, DETRAN",
        UF: "Ex: SP, RJ, MG",
        PROFISSAO: "Digite a profissão do representante",
        CARGO: "Digite o cargo atual na entidade",
        ESTADO_CIVIL: "Ex: Solteiro, Casado, Divorciado",
        TELEFONE: "(11) 99999-9999",
        EMAIL: "representante@entidade.com.br",
        
        // Labels
        LABEL_NOME: "3.1 - Nome",
        LABEL_CPF: "3.2 - CPF",
        LABEL_RG: "3.3 - RG",
        LABEL_ORGAO_EXPEDITOR: "3.4 - Órgão Expedidor",
        LABEL_UF: "3.5 - UF",
        LABEL_PROFISSAO: "3.6 - Profissão",
        LABEL_CARGO: "3.7 - Cargo",
        LABEL_ESTADO_CIVIL: "3.8 - Estado Civil",
        LABEL_TELEFONE: "3.9 - Número de telefone com DDD",
        LABEL_EMAIL: "3.10 - Email",
        
    },

    // ----- FORMULÁRIO 04 - RESPONSÁVEL TÉCNICO -----
    RESPONSAVEL_TECNICO: {
        // Títulos
        TITULO: "4.0 - Identificação do Responsável Técnico pelo Projeto",
        
        // Placeholders
        NOME: "Digite o nome completo do responsável técnico",
        CARGO: "Digite o cargo atual do responsável técnico",
        TELEFONE: "(11) 99999-9999",
        CELULAR: "(11) 99999-9999",
        EMAIL: "responsavel.tecnico@entidade.com.br",
        
        // Labels
        LABEL_NOME: "4.1 - Nome",
        LABEL_CARGO: "4.2 - Cargo",
        LABEL_TELEFONE: "4.3 - Número de telefone com DDD",
        LABEL_CELULAR: "4.4 - Número de celular com DDD",
        LABEL_EMAIL: "4.5 - Email",
        
        
    },

    // ----- FORMULÁRIO 05 - JUSTIFICATIVA -----
    JUSTIFICATIVA: {
        // Títulos e Subtítulos
        SUBTITULO: "5.0 - Justificativa e Motivação do Instrumento",
        
        // Placeholders
        INTERESSES_RECIPROCOS: "Descreva a caracterização dos interesses recíprocos entre as partes envolvidas no projeto",
        PUBLICO_ALVO: "Descreva o público alvo do projeto, suas características e necessidades",
        PROBLEMA_RESOLVER: "Descreva o problema específico que o projeto visa resolver",
        RESULTADOS_ESPERADOS: "Descreva os resultados esperados com a implementação do projeto",
        RELACAO_OBJETIVOS: "Explique como a proposta se relaciona com os objetivos e diretrizes do programa",
        
        // Labels do modo de visualização
        LABEL_INTERESSES_RECIPROCOS: "5.1 - Caracterização dos Interesses Recíprocos",
        LABEL_PUBLICO_ALVO: "5.2 - Público Alvo",
        LABEL_PROBLEMA_RESOLVER: "5.3 - Problema a ser Resolvido",
        LABEL_RESULTADOS_ESPERADOS: "5.4 - Resultados Esperados",
        LABEL_RELACAO_OBJETIVOS: "5.5 - Relação entre a Proposta e os Objetivos e Diretrizes do Programa",
        
        // Labels do modo de edição
        LABEL_INTERESSES_RECIPROCOS_EDICAO: "Caracterização dos Interesses Recíprocos",
        LABEL_PUBLICO_ALVO_EDICAO: "Público Alvo",
        LABEL_PROBLEMA_RESOLVER_EDICAO: "Problema a ser Resolvido",
        LABEL_RESULTADOS_ESPERADOS_EDICAO: "Resultados Esperados",
        LABEL_RELACAO_OBJETIVOS_EDICAO: "Relação entre a Proposta e os Objetivos e Diretrizes do Programa",
        
    }

  
};