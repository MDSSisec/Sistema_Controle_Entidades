export const FORMS = {
    
    // ----- FORMULÁRIO 01 - PROJETO -----
    PROJETO: {
        // Títulos e Subtítulos
        TITULO: "I - Identificação",
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
        
        // Labels do modo de edição
        LABEL_NOME_EDICAO: "Nome do Projeto",
        LABEL_LOCAL_EDICAO: "Local de Execução",
        LABEL_DURACAO_EDICAO: "Duração",
        LABEL_RESUMO_EDICAO: "Resumo do Projeto",
        
        // Botões
        BOTAO_EDITAR: "Editar",
        BOTAO_CANCELAR: "Cancelar",
        BOTAO_SALVAR: "Salvar Identificação"
    },

    // ----- FORMULÁRIO 02 - ENTIDADE -----
    ENTIDADE: {
        // Títulos
        TITULO: "II - Descrição da Entidade",
        
        // Placeholders
        NOME: "Digite o nome completo da entidade",
        CNPJ: "00.000.000/0000-00",
        DATA_FUNDACAO: "DD/MM/AAAA",
        REGISTRO_CNPJ: "Número do registro do CNPJ",
        CEP: "00000-000",
        BAIRRO: "Digite o nome do bairro",
        UF: "Ex: SP, RJ, MG",
        ENDERECO_COMPLETO: "Digite o endereço completo (rua, número, complemento)",
        EMAIL: "contato@entidade.com.br",
        TELEFONE_FAX: "(11) 99999-9999 / (11) 3333-4444",
        PAGINA_WEB: "https://www.entidade.com.br",
        
        // Labels do modo de visualização
        LABEL_NOME: "Nome",
        LABEL_CNPJ: "CNPJ",
        LABEL_DATA_FUNDACAO: "Data de Fundação",
        LABEL_REGISTRO_CNPJ: "Registro do CNPJ",
        LABEL_CEP: "CEP",
        LABEL_BAIRRO: "Bairro",
        LABEL_UF: "UF",
        LABEL_ENDERECO_COMPLETO: "Endereço Completo",
        LABEL_EMAIL: "E-mail",
        LABEL_TELEFONE_FAX: "Número de telefone e fax com DDD",
        LABEL_PAGINA_WEB: "Página na web",
        
        // Labels do modo de edição
        LABEL_NOME_EDICAO: "Nome",
        LABEL_CNPJ_EDICAO: "CNPJ",
        LABEL_DATA_FUNDACAO_EDICAO: "Data de Fundação",
        LABEL_REGISTRO_CNPJ_EDICAO: "Registro do CNPJ",
        LABEL_CEP_EDICAO: "CEP",
        LABEL_BAIRRO_EDICAO: "Bairro",
        LABEL_UF_EDICAO: "UF",
        LABEL_ENDERECO_COMPLETO_EDICAO: "Endereço Completo",
        LABEL_EMAIL_EDICAO: "E-mail",
        LABEL_TELEFONE_FAX_EDICAO: "Número de telefone e fax com DDD",
        LABEL_PAGINA_WEB_EDICAO: "Página na web",
        
        // Botões
        BOTAO_EDITAR: "Editar",
        BOTAO_CANCELAR: "Cancelar",
        BOTAO_SALVAR: "Salvar Descrição"
    },

    // ----- FORMULÁRIO 03 - REPRESENTANTE LEGAL -----
    REPRESENTANTE: {
        NOME: "Digite o nome completo do representante legal",
        CPF: "000.000.000-00",
        RG: "Digite o número do RG",
        ORGAO_EXPEDITOR: "Ex: SSP, DETRAN",
        UF: "Ex: SP, RJ, MG",
        PROFISSAO: "Digite a profissão do representante",
        CARGO: "Digite o cargo atual na entidade",
        ESTADO_CIVIL: "Ex: Solteiro, Casado, Divorciado",
        TELEFONE: "(11) 99999-9999",
        EMAIL: "representante@entidade.com.br"
    },

    // ----- FORMULÁRIO 04 - RESPONSÁVEL TÉCNICO -----
    RESPONSAVEL_TECNICO: {
        // Títulos
        TITULO: "IV - Identificação do Responsável Técnico pelo Projeto",
        
        // Placeholders
        NOME: "Digite o nome completo do responsável técnico",
        CARGO: "Digite o cargo atual do responsável técnico",
        TELEFONE: "(11) 99999-9999",
        CELULAR: "(11) 99999-9999",
        EMAIL: "responsavel.tecnico@entidade.com.br",
        
        // Labels do modo de visualização
        LABEL_NOME: "Nome",
        LABEL_CARGO: "Cargo",
        LABEL_TELEFONE: "Número de telefone com DDD",
        LABEL_CELULAR: "Número de celular com DDD",
        LABEL_EMAIL: "Email",
        
        // Labels do modo de edição
        LABEL_NOME_EDICAO: "Nome",
        LABEL_CARGO_EDICAO: "Cargo",
        LABEL_TELEFONE_EDICAO: "Número de telefone com DDD",
        LABEL_CELULAR_EDICAO: "Número de celular com DDD",
        LABEL_EMAIL_EDICAO: "Email",
        
        // Botões
        BOTAO_EDITAR: "Editar",
        BOTAO_CANCELAR: "Cancelar",
        BOTAO_SALVAR: "Salvar Dados do Responsável Técnico"
    },

    // ----- FORMULÁRIO 05 - JUSTIFICATIVA -----
    JUSTIFICATIVA: {
        // Títulos e Subtítulos
        TITULO: "II - Descrição do Projeto",
        SUBTITULO: "5.0 - Justificativa e Motivação do Instrumento",
        TITULO_EDICAO: "II - Descrição do Projeto",
        
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
        
        // Botões
        BOTAO_EDITAR: "Editar",
        BOTAO_CANCELAR: "Cancelar",
        BOTAO_SALVAR: "Salvar Justificativa"
    }

  
};