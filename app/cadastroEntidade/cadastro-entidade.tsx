"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconX } from "@tabler/icons-react";
import styles from "./cadastro-entidade.module.css";
import React, { useState } from "react";

interface Entidade {
  id: number;
  nome: string;
  cnpj: string;
  email: string;
  telefone: string;
  dataCadastro: string;
}

interface CadastroEntidadeProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (entidade: Omit<Entidade, 'id' | 'dataCadastro'>) => void;
  title?: string;
}

export function CadastroEntidade({ 
  isOpen, 
  onClose, 
  onSubmit, 
  title = "Cadastrar Nova Entidade" 
}: CadastroEntidadeProps) {
  const [formData, setFormData] = useState({
    nome: "",
    cnpj: "",
    email: "",
    telefone: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar se todos os campos estão preenchidos
    if (!formData.nome || !formData.cnpj || !formData.email || !formData.telefone) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Por favor, insira um email válido.");
      return;
    }

    // Validar formato do CNPJ (básico)
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    if (!cnpjRegex.test(formData.cnpj)) {
      alert("Por favor, insira um CNPJ válido no formato XX.XXX.XXX/XXXX-XX.");
      return;
    }

    // Validar formato do telefone (básico)
    const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!telefoneRegex.test(formData.telefone)) {
      alert("Por favor, insira um telefone válido no formato (XX) XXXXX-XXXX.");
      return;
    }

    // Chamar função de callback com os dados da entidade
    onSubmit(formData);
    
    // Limpar formulário
    setFormData({ nome: "", cnpj: "", email: "", telefone: "" });
  };

  const handleCancel = () => {
    setFormData({ nome: "", cnpj: "", email: "", telefone: "" });
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCancel}
            className={styles.closeButton}
          >
            <IconX className="h-4 w-4" />
            <span className="sr-only">Fechar</span>
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <div className={styles.formFields}>
            <div className={styles.formField}>
              <Label htmlFor="nome">Nome da Entidade *</Label>
              <Input
                id="nome"
                type="text"
                placeholder="Digite o nome da entidade"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                required
              />
            </div>
            
            <div className={styles.formField}>
              <Label htmlFor="cnpj">CNPJ *</Label>
              <Input
                id="cnpj"
                type="text"
                placeholder="XX.XXX.XXX/XXXX-XX"
                value={formData.cnpj}
                onChange={(e) => handleInputChange("cnpj", e.target.value)}
                required
              />
            </div>
            
            <div className={styles.formField}>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite o email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            
            <div className={styles.formField}>
              <Label htmlFor="telefone">Telefone *</Label>
              <Input
                id="telefone"
                type="text"
                placeholder="(XX) XXXXX-XXXX"
                value={formData.telefone}
                onChange={(e) => handleInputChange("telefone", e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className={styles.modalFooter}>
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className={styles.cancelButton}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className={styles.submitButton}
            >
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 