"use client"

import { Formulario, FormField } from "@/components/fomulario/formulario";

export function FormIdentificacao() {
  const identificacaoFields: FormField[] = [
    {
      id: 'nomeProjeto',
      label: 'Nome do Projeto',
      type: 'text' as const,
      placeholder: 'Digite o nome do projeto',
      required: true
    },
    {
      id: 'localExecucao',
      label: 'Local de Execução',
      type: 'text' as const,
      placeholder: 'Digite o local de execução',
      required: true
    },
    {
      id: 'duracao',
      label: 'Duração',
      type: 'text' as const,
      placeholder: 'Ex: 12 meses',
      required: true
    },
    {
      id: 'resumoProjeto',
      label: 'Resumo do Projeto',
      type: 'textarea' as const,
      placeholder: 'Descreva um resumo do projeto',
      required: true,
      rows: 6
    }
  ];

  const handleIdentificacaoSubmit = (data: Record<string, string>) => {
    console.log('Dados da Identificação:', data);
    // Aqui você pode implementar a lógica para salvar os dados
    // Por exemplo, enviar para uma API ou salvar no estado global
  };

  return (
    <div className="max-w-3xl w-full mx-auto p-6">
      <Formulario
        title="I - Identificação do Projeto"
        fields={identificacaoFields}
        onSubmit={handleIdentificacaoSubmit}
        submitButtonText="Salvar Identificação"
      />
    </div>
  );
}
